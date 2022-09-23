package cn.koala.eucalyptus;

import cn.koala.template.EnjoyRenderer;
import com.jfinal.template.Engine;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

/**
 * TODO: 修改类描述
 *
 * @author Houtaroy
 */
public class GeneratorTest {
  @Test
  public void test() {
    DomainConverterService converterService = new InMemoryDomainConverterService();
    EnhancedTableDomainConverter converter = new EnhancedTableDomainConverter(true);
    converterService.add(converter);
    Generator generator = new DefaultGenerator(converterService, new EnjoyRenderer(Engine.use()));
    List<GenerateResult> results = generator.generate(DataHelperTest.group(), DataHelperTest.table(), Map.of());
    Assertions.assertEquals(results.size(), 1);
    Assertions.assertEquals(results.get(0).name(), "GoodEntity.java");
    Assertions.assertEquals(results.get(0).code(), "商品实体类");
  }
}
