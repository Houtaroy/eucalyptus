package cn.koala.eucalyptus;

import lombok.extern.slf4j.Slf4j;
import org.springframework.util.Assert;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author Houtaroy
 */
@Slf4j
public class InMemoryGeneratorManager implements CodeGeneratorManager {
  protected final Map<String, CodeGenerator> generators = new ConcurrentHashMap<>();

  @Override
  public Optional<CodeGenerator> get(String name) {
    return Optional.ofNullable(generators.get(name));
  }

  @Override
  public void add(CodeGenerator generator) {
    Assert.notNull(generator, "代码生成器不能为空");
    Assert.notNull(generator.getName(), "代码生成器名称不能为空");
    if (generators.containsKey(generator.getName())) {
      LOGGER.warn("代码生成器[name={}]被覆盖", generator.getName());
    }
    generators.put(generator.getName(), generator);
  }

  @Override
  public void remove(String name) {
    generators.remove(name);
  }
}
