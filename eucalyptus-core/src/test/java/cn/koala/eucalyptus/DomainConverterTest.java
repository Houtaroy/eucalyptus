package cn.koala.eucalyptus;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * 领域转换器测试类
 *
 * @author Houtaroy
 */
public class DomainConverterTest {
  @Test
  public void test() {
    EnhancedTableDomainConverter converter = new EnhancedTableDomainConverter(true);
    EnhancedTable enhancedTable = (EnhancedTable) converter.convert(DataHelperTest.table());
    Assertions.assertEquals(enhancedTable.getNaming().pascal().plural(), "Goods");
    Assertions.assertEquals(enhancedTable.getPrimaryKey().getName(), "id");
  }
}
