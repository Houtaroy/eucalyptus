package cn.koala.eucalyptus;

import cn.koala.database.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author Houtaroy
 */
@AllArgsConstructor
@Getter
public class JavaDomainProperty {
  protected Column column;
  protected String name;
  protected String description;
  protected JavaType type;
}
