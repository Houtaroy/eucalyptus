package cn.koala.eucalyptus;

import com.google.common.base.CaseFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author Houtaroy
 */
@AllArgsConstructor
@Getter
public class DomainName {
  private Word lowerUnderscore;
  private Word lowerHyphen;
  private Word lowerCamel;

  /**
   * 根据小写下划线格式生成领域名称
   *
   * @param lowerUnderscore 小写下划线格式
   * @return 领域名称
   */
  public static DomainName fromLowerUnderscore(String lowerUnderscore) {
    return new DomainName(
      new Word(lowerUnderscore),
      new Word(CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_HYPHEN, lowerUnderscore)),
      new Word(CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, lowerUnderscore))
    );
  }
}
