package cn.koala.eucalyptus;

import cn.koala.template.PersistentTemplate;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.SuperBuilder;

/**
 * @author Houtaroy
 */
@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder(toBuilder = true)
public class PersistentCodeTemplate extends PersistentTemplate implements CodeTemplate {
  protected String description;
  protected String groupId;
}
