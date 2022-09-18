package cn.koala.eucalyptus;

import cn.koala.template.Template;

/**
 * 代码模板
 *
 * @author Houtaroy
 */
public interface CodeTemplate extends Template {
  /**
   * 获取代码模板描述
   *
   * @return 代码模板描述
   */
  String getDescription();

  /**
   * 获取代码模板组
   *
   * @return 代码模板组
   */
  CodeTemplateGroup getGroup();
}
