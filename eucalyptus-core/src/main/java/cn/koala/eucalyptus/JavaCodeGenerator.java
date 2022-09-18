package cn.koala.eucalyptus;

import cn.koala.database.Column;
import cn.koala.database.Table;
import com.google.common.base.CaseFormat;
import com.jfinal.template.Engine;

import java.sql.JDBCType;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Houtaroy
 */
public class JavaCodeGenerator extends EnjoyCodeGenerator {
  public static final Map<JDBCType, JavaType> TYPE_CONVERTER;

  static {
    TYPE_CONVERTER = new HashMap<>(JDBCType.values().length);
    TYPE_CONVERTER.put(JDBCType.SMALLINT, JavaType.INTEGER);
    TYPE_CONVERTER.put(JDBCType.INTEGER, JavaType.INTEGER);
    TYPE_CONVERTER.put(JDBCType.BIGINT, JavaType.LONG);
    TYPE_CONVERTER.put(JDBCType.FLOAT, JavaType.FLOAT);
    TYPE_CONVERTER.put(JDBCType.DOUBLE, JavaType.DOUBLE);
    TYPE_CONVERTER.put(JDBCType.DECIMAL, JavaType.BIG_DECIMAL);
    TYPE_CONVERTER.put(JDBCType.DATE, JavaType.LOCAL_DATE_TIME);
    TYPE_CONVERTER.put(JDBCType.TIME, JavaType.LOCAL_DATE_TIME);
    TYPE_CONVERTER.put(JDBCType.TIMESTAMP, JavaType.LOCAL_DATE_TIME);
    TYPE_CONVERTER.put(JDBCType.CHAR, JavaType.STRING);
    TYPE_CONVERTER.put(JDBCType.VARCHAR, JavaType.STRING);
    TYPE_CONVERTER.put(JDBCType.BOOLEAN, JavaType.BOOLEAN);
  }

  protected boolean tablePrefix;

  /**
   * 根据Enjoy引擎和是否有表前缀创建Java代码生成器
   *
   * @param engine      Enjoy引擎
   * @param tablePrefix 是否有表前缀
   */
  public JavaCodeGenerator(Engine engine, boolean tablePrefix) {
    super(engine);
    this.tablePrefix = tablePrefix;
  }

  @Override
  public String getName() {
    return "koala-java-simple";
  }

  @Override
  protected String generateName(CodeTemplate template, Table table, Map<String, Object> config) {
    String lowerUnderscore = getLowerUnderscoreDomainName(table);
    return template.getName().formatted(CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.UPPER_CAMEL, lowerUnderscore));
  }

  protected String getLowerUnderscoreDomainName(Table table) {
    String tableName = table.getName();
    return tablePrefix ? tableName.substring(tableName.indexOf("_") + 1) : tableName;
  }

  @Override
  protected Map<String, Object> generateData(CodeTemplate template, Table table, Map<String, Object> config) {
    return Map.of("domain", toJavaDomain(table), "config", config);
  }

  protected JavaDomain toJavaDomain(Table table) {
    List<JavaDomainProperty> properties = toJavaDomainProperties(table.getColumns());
    return new JavaDomain(
      table,
      DomainName.fromLowerUnderscore(getLowerUnderscoreDomainName(table)),
      table.getRemarks(),
      properties.stream().filter(property -> property.getColumn().isPrimaryKey()).findFirst().orElse(null),
      properties
    );
  }

  protected List<JavaDomainProperty> toJavaDomainProperties(List<? extends Column> columns) {
    return columns.stream().map(this::toJavaDomainProperty).toList();
  }

  protected JavaDomainProperty toJavaDomainProperty(Column column) {
    return new JavaDomainProperty(
      column,
      CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, column.getName()),
      column.getRemarks(),
      TYPE_CONVERTER.get(column.getType())
    );
  }
}
