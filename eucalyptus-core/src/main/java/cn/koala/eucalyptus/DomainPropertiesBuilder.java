package cn.koala.eucalyptus;

import java.util.ArrayList;
import java.util.List;

/**
 * 领域属性列表构建器
 *
 * @author Houtaroy
 */
public class DomainPropertiesBuilder {
  private final List<DomainProperty> result = new ArrayList<>();

  /**
   * 创建领域属性列表构建器
   *
   * @return 领域属性列表构建器
   */
  public static DomainPropertiesBuilder builder() {
    return new DomainPropertiesBuilder();
  }

  /**
   * 增加领域属性
   *
   * @param name        属性名称
   * @param key         属性键值
   * @param type        属性类型
   * @param description 属性描述
   * @return 当前领域属性列表构建器
   */
  public DomainPropertiesBuilder property(String name, String key, String type, String description) {
    result.add(new DomainProperty(name, key, type, description));
    return this;
  }

  /**
   * 构建
   *
   * @return 领域属性列表
   */
  public List<DomainProperty> build() {
    return result;
  }
}
