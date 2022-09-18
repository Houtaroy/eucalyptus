package cn.koala.eucalyptus;

import cn.koala.database.Table;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Map;

/**
 * 代码生成器
 *
 * @author Houtaroy
 */
public interface CodeGenerator {

  /**
   * 获取代码生成器名称
   *
   * @return 代码生成器名称
   */
  String getName();

  /**
   * 生成代码
   *
   * @param template 代码模板
   * @param table    数据库表
   * @param config   额外配置
   * @return 代码生成结果
   */
  CodeGenerateResult generate(CodeTemplate template, Table table, Map<String, Object> config);

  /**
   * 生成代码
   *
   * @param group  代码组
   * @param table  数据库表
   * @param config 额外配置
   * @return 代码生成结果列表
   */
  default List<CodeGenerateResult> generate(CodeTemplateGroup group, Table table, Map<String, Object> config) {
    Assert.notNull(group.getGeneratorName(), "未指定代码生成器");
    Assert.isTrue(group.getGeneratorName().equals(getName()), "代码生成器不匹配");
    return group.getTemplates().stream().map(template -> generate(template, table, config)).toList();
  }
}
