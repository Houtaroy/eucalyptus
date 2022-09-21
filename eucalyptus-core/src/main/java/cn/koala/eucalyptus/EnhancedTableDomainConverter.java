package cn.koala.eucalyptus;

import cn.koala.database.Column;
import cn.koala.database.JdbcColumn;
import cn.koala.database.JdbcTable;
import cn.koala.database.Table;
import cn.koala.utils.Naming;
import lombok.Data;
import org.springframework.beans.BeanUtils;

import java.sql.JDBCType;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 增强表领域转换器
 *
 * @author Houtaroy
 */
@Data
public class EnhancedTableDomainConverter implements DomainConverter {
  public static final Map<String, String> JAVA_TYPE_CONVERTER;

  static {
    JAVA_TYPE_CONVERTER = new HashMap<>(JDBCType.values().length);
    JAVA_TYPE_CONVERTER.put(JDBCType.SMALLINT.getName(), JavaType.INTEGER.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.INTEGER.getName(), JavaType.INTEGER.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.BIGINT.getName(), JavaType.LONG.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.FLOAT.getName(), JavaType.FLOAT.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.DOUBLE.getName(), JavaType.DOUBLE.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.DECIMAL.getName(), JavaType.BIG_DECIMAL.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.DATE.getName(), JavaType.LOCAL_DATE_TIME.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.TIME.getName(), JavaType.LOCAL_DATE_TIME.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.TIMESTAMP.getName(), JavaType.LOCAL_DATE_TIME.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.CHAR.getName(), JavaType.STRING.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.VARCHAR.getName(), JavaType.STRING.getName());
    JAVA_TYPE_CONVERTER.put(JDBCType.BOOLEAN.getName(), JavaType.BOOLEAN.getName());
  }

  private String id = "enhanced-table";
  private String name = "增强表领域转换器";
  private boolean removePrefix = false;

  @Override
  public Object convert(Table table) {
    if (table instanceof JdbcTable jdbcTable) {
      return enhance(jdbcTable);
    }
    throw new IllegalStateException("转换对象应为JdbcTable或其子类");
  }

  /**
   * 实际转换逻辑
   *
   * @param table JdbcTable
   * @return 增强表对象
   */
  protected EnhancedTable enhance(JdbcTable table) {
    String tableName = table.getName().toLowerCase();
    String underscore = removePrefix ? tableName.substring(tableName.indexOf("_") + 1) : tableName;
    List<EnhancedColumn> columns = table.getColumns().stream().map(this::enhance).toList();
    EnhancedTable result = new EnhancedTable();
    BeanUtils.copyProperties(table, result);
    result.setEnhancedColumns(columns);
    result.setNaming(Naming.fromUnderScore(underscore));
    result.setPrimaryKey(columns.stream().filter(Column::isPrimaryKey).findFirst().orElse(null));
    return result;
  }

  /**
   * 增加数据库列
   *
   * @param column JdbcColumn
   * @return 增强列对象
   */
  protected EnhancedColumn enhance(JdbcColumn column) {
    EnhancedColumn result = new EnhancedColumn();
    BeanUtils.copyProperties(column, result);
    result.setNaming(Naming.fromUnderScore(column.getName().toLowerCase()));
    result.setJavaType(JAVA_TYPE_CONVERTER.get(column.getType()));
    return result;
  }

  @Override
  public List<DomainProperty> getProperties() {
    return DomainPropertiesBuilder.builder()
      .property("表名称", "name", "字符串", "数据库表的名称")
      .property("表名称", "naming", "命名", "数据库表的命名, 支持多种风格, 详情参照Naming")
      .property("表备注", "remarks", "字符串", "数据库表的备注")
      .property("表备注", "primaryKey", "列对象", "数据库表的主键列")
      .property("表备注", "enhancedColumns[1]", "增强列对象", "数据库表的某一列")
      .property("列名称", "enhancedColumns[1].name", "字符串", "数据库列的名称")
      .property("列命名", "enhancedColumns[1].naming", "命名", "数据库列的命名")
      .property("列数据类型", "enhancedColumns[1].type", "字符串", "数据库列的JDBC类型的名称")
      .property("列数据类型", "enhancedColumns[1].javaType", "字符串", "数据库列对应的Java类型名称")
      .property("列长度", "enhancedColumns[1].size", "整型", "数据库列的长度")
      .property("列小数长度", "enhancedColumns[1].decimalDigits", "整型", "数据库列的小数长度")
      .property("列备注", "enhancedColumns[1].remarks", "字符串", "数据库列的备注")
      .property("列是否允许为空", "enhancedColumns[1].nullable", "布尔", "数据库列是否允许为空")
      .property("列是否自增", "enhancedColumns[1].autoIncrement", "布尔", "数据库列是否自增")
      .property("列是否主键", "enhancedColumns[1].primaryKey", "布尔", "数据库列是否主键")
      .build();
  }
}
