package cn.koala.eucalyptus;

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
   * 获取代码组模板描述
   *
   * @return 代码组模板描述
   */
  String getDescription();

  /**
   * 获取代码生成器标识
   *
   * @return 代码生成器标识
   */
  String getDomainConverterId();

  /**
   * 获取全局参数定义标识
   *
   * @return 全局参数定义标识
   */
  String getGlobalOptionsDefinitionId();

  /**
   * 获取代码模板列表
   *
   * @return 代码模板列表
   */
  List<? extends CodeTemplate> getTemplates();
}
