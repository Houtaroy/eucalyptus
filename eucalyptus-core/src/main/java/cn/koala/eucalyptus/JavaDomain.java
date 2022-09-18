package cn.koala.eucalyptus;

import cn.koala.database.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * @author Houtaroy
 */
@AllArgsConstructor
@Data
public class JavaDomain {
  protected Table table;
  protected DomainName name;
  protected String description;
  protected JavaDomainProperty idProperty;
  protected List<JavaDomainProperty> properties;
}
