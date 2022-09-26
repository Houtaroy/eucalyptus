package cn.koala.eucalyptus;

import cn.koala.web.DataResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

/**
 * 领域转换器接口
 *
 * @author Houtaroy
 */
@Slf4j
@RequiredArgsConstructor
public class DomainConverterApiImpl implements DomainConverterApi {

  private final DomainConverterService service;

  @Override
  public DataResponse<List<DomainConverter>> list() {
    return DataResponse.ok(service.getConverters());
  }
}
