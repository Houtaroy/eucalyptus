package cn.koala.eucalyptus;

import cn.koala.database.JdbcColumn;
import cn.koala.utils.Naming;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * 增强数据库列
 *
 * @author Houtaroy
 */
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
public class EnhancedColumn extends JdbcColumn {
  private Naming naming;
  private String javaType;
}
