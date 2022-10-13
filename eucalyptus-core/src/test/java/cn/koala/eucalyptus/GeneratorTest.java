package cn.koala.eucalyptus;

import cn.koala.template.EnjoyRenderer;
import com.jfinal.template.Engine;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

/**
 * 代码生成器测试
 *
 * @author Houtaroy
 */
public class GeneratorTest {
  @Test
  public void test() {
    DomainConverterService converterService = new InMemoryDomainConverterService();
    EnhancedTableDomainConverter converter = new EnhancedTableDomainConverter(true);
    converterService.add(converter);
    Generator generator = new DefaultGenerator(new EnjoyRenderer(Engine.use()));
    List<GenerateResult> results = generator.generate(DataHelperTest.group(), Map.of("table", DataHelperTest.table()));
    Assertions.assertEquals(results.size(), 1);
    Assertions.assertEquals(results.get(0).name(), "GoodEntity.java");
    Assertions.assertEquals(results.get(0).code(), "商品实体类");
  }
}
