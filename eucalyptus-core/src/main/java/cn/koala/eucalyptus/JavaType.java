package cn.koala.eucalyptus;

import cn.koala.enhancement.ValueNameEnum;

/**
 * Java类型
 *
 * @author Houtaroy
 */
public enum JavaType implements ValueNameEnum {
  /**
   * 整型
   */
  INTEGER(1, "Integer"),
  /**
   * 长整型
   */
  LONG(2, "Long"),
  /**
   * Float浮点型
   */
  FLOAT(3, "Float"),
  /**
   * Double浮点型
   */
  DOUBLE(4, "Double"),
  /**
   * BigDecimal
   */
  BIG_DECIMAL(5, "BigDecimal"),
  /**
   * LocalDateTime
   */
  LOCAL_DATE_TIME(6, "LocalDateTime"),
  /**
   * 字符串
   */
  STRING(7, "String"),
  /**
   * 布尔型
   */
  BOOLEAN(8, "Boolean");

  private final int value;
  private final String name;

  JavaType(int value, String name) {
    this.value = value;
    this.name = name;
  }

  @Override
  public int getValue() {
    return value;
  }

  @Override
  public String getName() {
    return name;
  }

  /**
   * 根据值返回枚举
   *
   * @param value 枚举值
   * @return 枚举
   */
  public static JavaType valueOf(int value) {
    return ValueNameEnum.valueOf(JavaType.class, value);
  }
}
