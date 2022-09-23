package cn.koala.eucalyptus;

import cn.koala.database.JdbcColumn;
import cn.koala.database.JdbcTable;

import java.sql.JDBCType;
import java.util.List;

/**
 * 模拟数据
 *
 * @author Houtaroy
 */
public class MockData {
  public static JdbcTable MOCK_TABLE;

  static {
    MOCK_TABLE = new JdbcTable(
      "t_good",
      "商品",
      List.of(
        new JdbcColumn("id", JDBCType.VARCHAR, 36, 0, "主键", false, false, true),
        new JdbcColumn("type", JDBCType.INTEGER, 50, 0, "商品类别", false, false, true),
        new JdbcColumn("name", JDBCType.VARCHAR, 50, 0, "商品名称", false, false, true),
        new JdbcColumn("description", JDBCType.VARCHAR, 200, 0, "商品描述", true, false, true),
        new JdbcColumn("create_time", JDBCType.DATE, 0, 0, "创建时间", false, false, true)
      )
    );
  }
}
