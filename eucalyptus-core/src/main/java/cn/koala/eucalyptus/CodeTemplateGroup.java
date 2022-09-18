package cn.koala.eucalyptus;

import cn.koala.datamodel.Metadata;

import java.util.List;

/**
 * 代码模板组
 *
 * @author Houtaroy
 */
public interface CodeTemplateGroup {
  /**
   * 获取代码模板组名称
   *
   * @return 代码模板组名称
   */
  String getName();

  /**
   * 获取代码生成器名称
   *
   * @return 代码生成器名称
   */
  String getGeneratorName();

  /**
   * 获取代码模板组额外配置定义
   *
   * @return 代码模板组额外配置定义
   */
  Metadata getConfigDefinition();

  /**
   * 获取代码模板列表
   *
   * @return 代码模板列表
   */
  List<? extends CodeTemplate> getTemplates();
}
