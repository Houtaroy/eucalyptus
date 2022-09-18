package cn.koala.eucalyptus;

import cn.koala.utils.WordUtil;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author Houtaroy
 */
@AllArgsConstructor
@Getter
public class Word {
  private String singular;
  private String plural;

  /**
   * 根据单数创建单词
   *
   * @param singular 单数
   */
  public Word(String singular) {
    this.singular = singular;
    this.plural = WordUtil.plural(singular);
  }
}
