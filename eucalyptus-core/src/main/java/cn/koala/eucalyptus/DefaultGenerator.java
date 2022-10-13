package cn.koala.eucalyptus;

import cn.koala.template.Renderer;
import cn.koala.template.StringTemplate;
import cn.koala.template.Template;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.Map;

/**
 * 默认代码生成器实现
 *
 * @author Houtaroy
 */
@Slf4j
@RequiredArgsConstructor
public class DefaultGenerator implements Generator {
  protected final Renderer renderer;

  @Override
  public List<GenerateResult> generate(CodeTemplateGroup group, Map<String, Object> context) {
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
  protected String generateName(Template template, Map<String, Object> context) {
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
  protected String generateCode(Template template, Map<String, Object> context) {
    try {
      return renderer.render(template, context);
    } catch (Exception e) {
      LOGGER.error("代码模板[name={}]生成代码失败", template.getName(), e);
      return "生成代码失败, 请检查模板内容";
    }
  }
}
