package cn.koala.eucalyptus;

import cn.koala.database.JdbcColumn;
import cn.koala.database.JdbcTable;
import cn.koala.database.Table;

import java.sql.JDBCType;
import java.util.List;

/**
 * TODO: 修改类描述
 *
 * @author Houtaroy
 */
public class DataHelperTest {
  public static Table table() {
    return new JdbcTable(
      "t_good",
      "商品",
      List.of(
        new JdbcColumn("id", JDBCType.VARCHAR, 36, 0, "主键", false, false, true),
        new JdbcColumn("type", JDBCType.INTEGER, 50, 0, "商品类别", false, false, true),
        new JdbcColumn("name", JDBCType.VARCHAR, 50, 0, "商品名称", false, false, true),
        new JdbcColumn("description", JDBCType.VARCHAR, 200, 0, "商品描述", true, false, true),
        new JdbcColumn("create_time", JDBCType.DATE, 0, 0, "创建时间", false, false, true)
      ));
  }

  public static CodeTemplateGroup group() {
    return PersistentCodeTemplateGroup.builder()
      .domainConverterId("enhanced-table")
      .templates(List.of(
        PersistentCodeTemplate.builder().name("#(domain.naming.pascal().singular())Entity.java").content("#(domain.remarks)实体类").build()
      ))
      .build();
  }
}
