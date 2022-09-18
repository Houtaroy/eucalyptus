package cn.koala.eucalyptus.mybatis;

import cn.koala.eucalyptus.CodeTemplateGroup;
import cn.koala.eucalyptus.CodeTemplateGroupService;
import cn.koala.mybatis.AbstractCrudService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * @author Houtaroy
 */
@RequiredArgsConstructor
@Getter
public class MyBatisCodeTemplateGroupService extends AbstractCrudService<String, CodeTemplateGroup>
  implements CodeTemplateGroupService {
  protected final CodeTemplateGroupRepository repository;
}
