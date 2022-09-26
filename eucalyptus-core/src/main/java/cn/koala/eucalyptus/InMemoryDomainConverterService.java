package cn.koala.eucalyptus;

import lombok.extern.slf4j.Slf4j;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 内存中的领域转换器服务实现类
 *
 * @author Houtaroy
 */
@Slf4j
public class InMemoryDomainConverterService implements DomainConverterService {

  protected final Map<String, DomainConverter> cache = new ConcurrentHashMap<>();

  @Override
  public List<DomainConverter> getConverters() {
    return cache.values().stream().toList();
  }

  @Override
  public Optional<DomainConverter> get(String id) {
    return Optional.ofNullable(cache.get(id));
  }

  @Override
  public void add(DomainConverter domainConverter) {
    Assert.notNull(domainConverter, "领域转换器不能为空");
    Assert.notNull(domainConverter.getId(), "领域转换器ID不能为空");
    if (cache.containsKey(domainConverter.getId())) {
      LOGGER.warn("领域转换器[id={}]被覆盖", domainConverter.getId());
    }
    cache.put(domainConverter.getId(), domainConverter);
  }

  @Override
  public void remove(String id) {
    cache.remove(id);
  }
}
