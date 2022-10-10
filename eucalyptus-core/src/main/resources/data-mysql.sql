insert into t_code_template_group
values ('simple-java', '简易Java模板', '基于Spring Boot, MyBatis的简易Java模板, 生成从接口到Mapper的全部代码',
        'enhanced-table');
insert into t_code_template
values ('simple-java-api', '#(domain.naming.pascal().singular())Api.java', 'package #(globalOptions.package);

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * #(domain.remarks)接口
 *
 * @author Eucalyptus Generator
 */
@RequestMapping("/#(domain.naming.kebab().plural())")
@RestController
public interface #(domain.naming.pascal().singular())Api {

  /**
   * 根据条件分页查询#(domain.remarks)
   *
   * @param parameters 查询条件
   * @param pageable   分页条件
   * @return #(domain.remarks)列表
   */
  @GetMapping
  Page<#(domain.naming.pascal().singular())Entity> page(@RequestParam Map<String, Object> parameters, Pageable pageable);
#if(domain.primaryKey != null)

  /**
   * 查询#(domain.remarks)
   *
   * @param #(domain.primaryKey.naming.camel().singular()) #(domain.primaryKey.remarks)
   * @return #(domain.remarks)
   */
  @GetMapping("{#(domain.primaryKey.naming.camel().singular())}")
  #(domain.naming.pascal().singular())Entity load(@PathVariable("#(domain.primaryKey.naming.camel().singular())") #(domain.primaryKey.javaType) #(domain.primaryKey.naming.camel().singular()));

  /**
   * 创建#(domain.remarks)
   *
   * @param #(domain.naming.pascal().singular())Entity #(domain.remarks)
   * @return 已创建的#(domain.remarks)
   */
  @PostMapping
  #(domain.naming.pascal().singular())Entity create(@RequestBody #(domain.naming.pascal().singular())Entity entity);

  /**
   * 更新#(domain.remarks)
   *
   * @param #(domain.primaryKey.naming.camel().singular()) #(domain.primaryKey.remarks)
   * @param #(domain.naming.pascal().singular())Entity #(domain.remarks)
   * @return 操作结果
   */
  @PutMapping("{#(domain.primaryKey.naming.camel().singular())}")
  String update(@PathVariable("#(domain.primaryKey.naming.camel().singular())") #(domain.primaryKey.javaType) #(domain.primaryKey.naming.camel().singular()), #(domain.naming.pascal().singular())Entity entity);

  /**
   * 删除#(domain.remarks)
   *
   * @param #(domain.primaryKey.naming.camel().singular()) #(domain.primaryKey.remarks)
   * @return 操作结果
   */
  @DeleteMapping("{#(domain.primaryKey.naming.camel().singular())}")
  String delete(@PathVariable("#(domain.primaryKey.naming.camel().singular())") #(domain.primaryKey.javaType) #(domain.primaryKey.naming.camel().singular()));
#end
}
', 'simple-java'),
       ('simple-java-api-impl', '#(domain.naming.pascal().singular())ApiImpl.java', 'package #(globalOptions.package);

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * #(domain.remarks)接口实现
 *
 * @author Eucalyptus Generator
 */
@RequiredArgsConstructor
@RestController
public class #(domain.naming.pascal().singular())ApiImpl implements #(domain.naming.pascal().singular())Api {

  private final #(domain.naming.pascal().singular())Service service;

  @Override
  public Page<#(domain.naming.pascal().singular())Entity> page(Map<String, Object> parameters, Pageable pageable) {
    return service.list(parameters, pageable));
  }
#if(domain.primaryKey != null)

  @Override
  public #(domain.naming.pascal().singular())Entity load(#(domain.primaryKey.javaType) #(domain.primaryKey.naming.camel().singular())) {
    return service.load(#(domain.primaryKey.naming.camel().singular())).orElse(null));
  }

  @Override
  public #(domain.naming.pascal().singular())Entity create(#(domain.naming.pascal().singular())Entity entity) {
    service.add(entity);
    return entity;
  }

  @Override
  public String update(#(domain.primaryKey.javaType) #(domain.primaryKey.naming.camel().singular()), #(domain.naming.pascal().singular())Entity entity) {
    entity.set#(domain.primaryKey.naming.pascal().singular())(#(domain.primaryKey.naming.camel().singular()));
    service.update(entity);
    return "success";
  }

  @Override
  public String delete(#(domain.primaryKey.javaType) #(domain.primaryKey.naming.camel().singular())) {
    service.delete(#(domain.naming.pascal().singular())Entity.builder().#(domain.primaryKey.naming.camel().singular())(#(domain.primaryKey.naming.camel().singular())).build());
    return "success";
  }
#end
}
', 'simple-java'),
       ('simple-java-entity', '#(domain.naming.pascal().singular())Entity.java', 'package #(globalOptions.package);

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

/**
 * #(domain.remarks)数据实体
 *
 * @author Eucalyptus Generator
 */
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class #(domain.naming.pascal().singular())Entity {
#for(column : domain.enhancedColumns)
  private #(column.javaType) #(column.naming.camel().singular());
#end
}
', 'simple-java'),
       ('simple-java-service', '#(domain.naming.pascal().singular())Service.java', 'package #(globalOptions.package);

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * #(domain.remarks)服务类
 *
 * @author Eucalyptus Generator
 */
@Component
@RequiredArgsConstructor
public class #(domain.naming.pascal().singular())Service {

  private final #(domain.naming.pascal().singular())Repository repository;

  public Page<#(domain.naming.pascal().singular())Entity> list(Map<String, Object> parameters, Pageable pageable) {
    com.github.pagehelper.Page<T> result = PageHelper.startPage(
      Math.max(pageable.getPageNumber() + 1, 1),
      pageable.getPageSize()
    ).doSelectPage(() -> repository.findAll(parameters, pageable));
    return new PageImpl<>(result, pageable, result.getTotal());
  }
#if(domain.primaryKey != null)

  public Optional<#(domain.naming.pascal().singular())Entity> load(#(domain.primaryKey.javaType) #(domain.primaryKey.naming.camel().singular())) {
    return repository.findBy#(domain.primaryKey.naming.pascal().singular())(#(domain.primaryKey.naming.camel().singular()));
  }

  public void add(#(domain.naming.pascal().singular())Entity entity) {
    repository.add(entity);
  }

  public void update(#(domain.naming.pascal().singular())Entity entity) {
    repository.update(entity);
  }

  public void delete(#(domain.naming.pascal().singular())Entity entity) {
    repository.delete(entity);
  }
#end
}
', 'simple-java'),
       ('simple-java-repository', '#(domain.naming.pascal().singular())Repository.java', 'package #(globalOptions.package);

import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * #(domain.remarks)存储库类
 *
 * @author Eucalyptus Generator
 */
public interface #(domain.naming.pascal().singular())Repository {

  /**
   * 分页查询#(domain.remarks)
   *
   * @param parameters 查询参数
   * @param pageable   分页参数
   * @return #(domain.remarks)列表
   */
  List<#(domain.naming.pascal().singular())Entity> findAll(@Param("parameters") Map<String, Object> parameters, Pageable pageable);
#if(domain.primaryKey != null)

  /**
   * 根据#(domain.primaryKey.remarks)查询#(domain.remarks)
   *
   * @param #(domain.primaryKey.naming.camel().singular()) #(domain.primaryKey.remarks)
   * @return #(domain.remarks)
   */
  Optional<#(domain.naming.pascal().singular())Entity> findBy#(domain.primaryKey.naming.pascal().singular())(#(domain.primaryKey.javaType) #(domain.primaryKey.naming.camel().singular()));

  /**
   * 新增#(domain.remarks)
   *
   * @param entity #(domain.remarks)
   */
  void add(#(domain.naming.pascal().singular())Entity entity);

  /**
   * 更新#(domain.remarks)
   *
   * @param entity #(domain.remarks)
   */
  void update(#(domain.naming.pascal().singular())Entity entity);

  /**
   * 删除#(domain.remarks)
   *
   * @param entity #(domain.remarks)
   */
  void delete(#(domain.naming.pascal().singular())Entity entity);
#end
}
', 'simple-java'),
       ('simple-java-mapper', '#(domain.naming.pascal().singular())Mapper.xml', '<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="#(globalOptions.package).#(domain.naming.pascal().singular())Repository">
  <sql id="select#(domain.naming.pascal().singular())">
    select
#for(column : table.columns)
    t.#(column.name)#if(!for.last),#end
#end
    from #(table.name) t
  </sql>

  <select id="findAll" resultType="#(globalOptions.package).#(domain.naming.pascal().singular())Entity">
    <include refid="select#(domain.naming.pascal().singular())"/>
    <where>
#for(column : domain.enhancedColumns)
      <if test="parameters.#(column.naming.camel().singular()) != null and parameters.#(column.naming.camel().singular()) != ''''">
        and t.#(column.name) = #{parameters.#(column.naming.camel().singular())}
      </if>
#end
    </where>
  </select>
#if(domain.primaryKey != null)
  <select id="findBy#(domain.primaryKey.naming.pascal().singular())" resultType="#(globalOptions.package).#(domain.naming.pascal().singular())Entity">
    <include refid="select#(domain.naming.pascal().singular())"/>
    where t.#(domain.primaryKey.name) = #{#(domain.primaryKey.naming.camel().singular())}
  </select>
  <insert id="add" parameterType="#(globalOptions.package).#(domain.naming.pascal().singular())Entity">
    insert into #(table.name) values (
#for(column : domain.enhancedColumns)
    #{#(column.naming.camel().singular())}#if(!for.last),#end
#end
    )
  </insert>
  <update id="update" parameterType="#(globalOptions.package).#(domain.naming.pascal().singular())Entity">
    update #(table.name)
#for(column : domain.enhancedColumns)
    set #(column.name) = #{#(column.naming.camel().singular())}#if(!for.last),#end
#end
    where #(domain.primaryKey.name) = #{#(domain.primaryKey.naming.camel().singular())}
  </update>
  <update id="delete" parameterType="#(globalOptions.package).#(domain.naming.pascal().singular())Entity">
    delete from #(table.name) where #(domain.primaryKey.name) = #{#(domain.primaryKey.naming.camel().singular())}
  </update>
#end
</mapper>
', 'simple-java');
insert into t_property
values ('simple-java-global-options-package', 'package', '包名', '包名', 3, 'simple-java');
