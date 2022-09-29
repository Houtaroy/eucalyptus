package cn.koala.eucalyptus;

import cn.koala.datamodel.Metadata;
import cn.koala.template.Template;

import java.util.List;

/**
 * 代码模板组
 *
 * @author Houtaroy
 */
public interface CodeTemplateGroup extends Metadata {
  /**
   * 获取代码生成器标识
   *
   * @return 代码生成器标识
   */
  String getDomainConverterId();

  /**
   * 获取代码模板列表
   *
   * @return 代码模板列表
   */
  List<? extends Template> getTemplates();
}
