package cn.koala.eucalyptus;

import java.util.Optional;

/**
 * 领域转换器服务类定义
 *
 * @author Houtaroy
 */
public interface DomainConverterService {
  /**
   * 获取领域转换器
   *
   * @param id 领域转换器标识
   * @return 领域转换器对象
   */
  Optional<DomainConverter> get(String id);

  /**
   * 新增领域转换器
   *
   * @param domainConverter 领域转换器对象
   */
  void add(DomainConverter domainConverter);

  /**
   * 移除领域转换器
   *
   * @param id 领域转换器标识
   */
  void remove(String id);
}
