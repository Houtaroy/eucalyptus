package cn.koala.eucalyptus;

import cn.koala.persistence.Idable;
import lombok.Data;
import lombok.experimental.SuperBuilder;

import java.util.List;

/**
 * 持久化代码模板组
 *
 * @author Houtaroy
 */
@Data
@SuperBuilder(toBuilder = true)
public class PersistentCodeTemplateGroup implements CodeTemplateGroup, Idable<String> {
  private String id;
  private String name;
  private String domainConverterId;
  private String globalOptionsDefinitionId;
  private List<PersistentCodeTemplate> templates;
}
