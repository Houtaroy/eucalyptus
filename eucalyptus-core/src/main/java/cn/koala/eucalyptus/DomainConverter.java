package cn.koala.eucalyptus;

import cn.koala.database.Table;
import cn.koala.persistence.Idable;

import java.util.List;

/**
 * 领域转换器
 *
 * @author Houtaroy
 */
public interface DomainConverter extends Idable<String> {
  /**
   * 获取领域转换器名称
   *
   * @return 领域转换器名称
   */
  String getName();

  /**
   * 将数据库表转换为领域
   *
   * @param table 数据库表
   * @return 领域
   */
  Object convert(Table table);

  /**
   * 获取领域参数列表, 用于展示
   *
   * @return 领域参数列表
   */
  List<DomainProperty> getProperties();
}
