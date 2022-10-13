package cn.koala.eucalyptus;

import cn.koala.database.JdbcTable;
import cn.koala.database.Table;
import cn.koala.utils.ZipHelper;
import cn.koala.web.DataResponse;
import cn.koala.web.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.util.Assert;
import org.springframework.util.CollectionUtils;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

/**
 * 代码模板组接口实现类
 *
 * @author Houtaroy
 */
@Slf4j
@RequiredArgsConstructor
public class CodeTemplateGroupApiImpl implements CodeTemplateGroupApi {

  private final CodeTemplateGroupService service;
  private final DomainConverterService domainConverterService;
  private final Generator generator;
  private final GeneratorProperties generatorProperties;

  @Override
  public DataResponse<Page<CodeTemplateGroup>> page(Map<String, Object> parameters, Pageable pageable) {
    return DataResponse.ok(service.list(parameters, pageable));
  }

  @Override
  public DataResponse<CodeTemplateGroup> loadById(String id) {
    return DataResponse.ok(service.load(id).orElse(null));
  }

  @Override
  public DataResponse<CodeTemplateGroup> create(CodeTemplateGroupEntity entity) {
    service.add(entity);
    return DataResponse.ok(entity);
  }

  @Override
  public Response update(String id, CodeTemplateGroupEntity entity) {
    entity.setId(id);
    service.update(entity);
    return Response.SUCCESS;
  }

  @Override
  public Response delete(String id) {
    service.delete(CodeTemplateGroupEntity.builder().id(id).build());
    return Response.SUCCESS;
  }

  @Override
  public DataResponse<Map<String, List<GenerateResult>>> preview(String id, GenerateRequestBody body) {
    CodeTemplateGroup group = service.load(id).orElseThrow(() -> new IllegalArgumentException("代码模板组不存在"));
    List<JdbcTable> tables = body.getTables();
    if (CollectionUtils.isEmpty(tables)) {
      tables.add(MockData.MOCK_TABLE);
    }
    Map<String, List<GenerateResult>> result = new HashMap<>(tables.size());
    tables.forEach(
      table -> result.put(table.getName(), generate(group, table, body.getGlobalOptions()))
    );
    return DataResponse.ok(result);
  }

  @Override
  public DataResponse<String> download(String id, GenerateRequestBody body, HttpServletResponse response) {
    CodeTemplateGroup group = service.load(id).orElseThrow(() -> new IllegalArgumentException("代码模板组不存在"));
    Assert.notEmpty(body.getTables(), "没有要生成的数据库表");
    String tempPath = UUID.randomUUID().toString();
    String dirPath = generatorProperties.getTempPath() + File.separator + tempPath;
    for (JdbcTable table : body.getTables()) {
      String tableDirPath = dirPath + File.separator + table.getName();
      List<GenerateResult> results = generate(group, table, body.getGlobalOptions());
      for (GenerateResult result : results) {
        File file = new File(tableDirPath + File.separator + result.name());
        try {
          FileUtils.write(file, result.code(), Charset.defaultCharset());
        } catch (IOException e) {
          LOGGER.error("数据表[name={}]的代码文件[name={}]写入失败", table.getName(), result.name(), e);
        }
      }
    }
    File dir = new File(dirPath);
    File[] files = dir.listFiles();
    Assert.notNull(files, "没有代码文件生成");
    Assert.notEmpty(files, "没有代码文件生成");
    String zipFilename = dirPath + File.separator + group.getName() + ".zip";
    try {
      ZipHelper.zip(Arrays.asList(files), new FileOutputStream(zipFilename));
      return DataResponse.of(HttpStatus.OK.value(), "请求成功", "%s/%s.zip".formatted(tempPath, group.getName()));
    } catch (IOException e) {
      LOGGER.error("压缩文件生成失败", e);
      throw new RuntimeException("代码文件生成失败");
    }
  }

  /**
   * 生成代码
   *
   * @param group         代码模板组
   * @param table         数据库表
   * @param globalOptions 全局参数
   * @return 生成结果列表
   */
  protected List<GenerateResult> generate(CodeTemplateGroup group, Table table, Map<String, Object> globalOptions) {
    Optional<DomainConverter> converter = domainConverterService.get(group.getDomainConverterId());
    Assert.isTrue(converter.isPresent(), "未找到指定的领域转换器");
    Map<String, Object> context = Map.of(
      "table", table,
      "domain", converter.get().convert(table),
      "globalOptions", globalOptions
    );
    return generator.generate(group, context);
  }
}
