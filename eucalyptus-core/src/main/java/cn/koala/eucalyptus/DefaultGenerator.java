package cn.koala.eucalyptus;

import cn.koala.database.Table;
import cn.koala.template.Renderer;
import cn.koala.template.StringTemplate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * TODO: 修改类描述
 *
 * @author Houtaroy
 */
@Slf4j
@RequiredArgsConstructor
public class DefaultGenerator implements Generator {
  protected final DomainConverterService domainConverterService;
  protected final Renderer renderer;

  @Override
  public List<GenerateResult> generate(CodeTemplateGroup group, Table table, Map<String, Object> globalOptions) {
    Optional<DomainConverter> converter = domainConverterService.get(group.getDomainConverterId());
    Assert.isTrue(converter.isPresent(), "未找到指定的领域转换器");
    Map<String, Object> context = Map.of(
      "domain", converter.get().convert(table),
      "globalOptions", globalOptions
    );
    return group.getTemplates().stream()
      .map(template -> new GenerateResult(generateName(template, context), generateCode(template, context)))
      .toList();
  }

  /**
   * 生成文件名
   *
   * @param template 代码模板对象
   * @param context  生成上下文
   * @return 文件名
   */
  protected String generateName(CodeTemplate template, Map<String, Object> context) {
    try {
      return renderer.render(StringTemplate.builder().content(template.getName()).build(), context);
    } catch (Exception e) {
      LOGGER.error("代码模板[name={}]生成名称失败", template.getName(), e);
      return template.getName();
    }
  }

  /**
   * 生成代码
   *
   * @param template 代码模板对象
   * @param context  生成上下文
   * @return 代码
   */
  protected String generateCode(CodeTemplate template, Map<String, Object> context) {
    try {
      return renderer.render(template, context);
    } catch (Exception e) {
      LOGGER.error("代码模板[name={}]生成代码失败", template.getName(), e);
      return "生成代码失败, 请检查模板内容";
    }
  }
}
