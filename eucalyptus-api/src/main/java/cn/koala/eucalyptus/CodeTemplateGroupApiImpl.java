package cn.koala.eucalyptus;

import cn.koala.web.DataResponse;
import cn.koala.web.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * 代码模板组接口实现类
 *
 * @author Houtaroy
 */
@RequiredArgsConstructor
public class CodeTemplateGroupApiImpl implements CodeTemplateGroupApi {

  private final CodeTemplateGroupService service;
  private final CodeGeneratorManager codeGeneratorManager;

  @Override
  public DataResponse<Page<CodeTemplateGroup>> page(Map<String, Object> parameters, Pageable pageable) {
    return DataResponse.ok(service.list(parameters, pageable));
  }

  @Override
  public DataResponse<CodeTemplateGroup> loadById(String id) {
    return DataResponse.ok(service.load(id).orElse(null));
  }

  @Override
  public DataResponse<CodeTemplateGroup> create(PersistentCodeTemplateGroup entity) {
    service.add(entity);
    return DataResponse.ok(entity);
  }

  @Override
  public Response update(String id, PersistentCodeTemplateGroup entity) {
    entity.setId(id);
    service.update(entity);
    return Response.SUCCESS;
  }

  @Override
  public Response delete(String id) {
    service.delete(PersistentCodeTemplateGroup.builder().id(id).build());
    return Response.SUCCESS;
  }

  @Override
  public DataResponse<List<CodeGenerateResult>> generate(String id, CodeGenerateRequestBody requestBody) {
    Optional<CodeTemplateGroup> group = service.load(id);
    Assert.isTrue(group.isPresent(), "代码模板组不存在");
    Optional<CodeGenerator> generator = codeGeneratorManager.get(group.get().getGeneratorName());
    Assert.isTrue(generator.isPresent(), "代码生成器不存在");
    return DataResponse.ok(generator.get().generate(group.get(), requestBody.getTable(), requestBody.getConfig()));
  }
}
