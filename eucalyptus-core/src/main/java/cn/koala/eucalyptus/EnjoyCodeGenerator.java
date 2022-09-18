package cn.koala.eucalyptus;

import cn.koala.database.Table;
import cn.koala.template.EnjoyRenderer;
import com.jfinal.template.Engine;
import lombok.RequiredArgsConstructor;

import java.util.Map;

/**
 * @author Houtaroy
 */
@RequiredArgsConstructor
public class EnjoyCodeGenerator implements CodeGenerator {

  protected final EnjoyRenderer renderer;

  /**
   * 使用Enjoy引擎创建Enjoy代码生成器
   *
   * @param engine Enjoy引擎
   */
  public EnjoyCodeGenerator(Engine engine) {
    this.renderer = new EnjoyRenderer(engine);
  }

  @Override
  public String getName() {
    return "koala-enjoy";
  }

  @Override
  public CodeGenerateResult generate(CodeTemplate template, Table table, Map<String, Object> config) {
    return new CodeGenerateResult(generateName(template, table, config), generateCode(template, table, config));
  }

  protected String generateName(CodeTemplate template, Table table, Map<String, Object> config) {
    return template.getName();
  }

  protected String generateCode(CodeTemplate template, Table table, Map<String, Object> config) {
    return this.renderer.render(template, generateData(template, table, config));
  }

  protected Map<String, Object> generateData(CodeTemplate template, Table table, Map<String, Object> config) {
    return Map.of("table", table, "config", config);
  }
}
