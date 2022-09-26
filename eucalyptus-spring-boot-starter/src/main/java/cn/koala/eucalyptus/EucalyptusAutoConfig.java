package cn.koala.eucalyptus;

import cn.koala.eucalyptus.mybatis.CodeTemplateGroupRepository;
import cn.koala.eucalyptus.mybatis.MyBatisCodeTemplateGroupService;
import cn.koala.template.EnjoyRenderer;
import cn.koala.template.Renderer;
import com.jfinal.template.Engine;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import java.util.List;

/**
 * 桉树自动配置类
 *
 * @author Houtaroy
 */
@Configuration
@EnableConfigurationProperties({GeneratorProperties.class, EucalyptusProperties.class})
@Import(WebMvcConfig.class)
@MapperScan(basePackages = "cn.koala.eucalyptus.mybatis")
public class EucalyptusAutoConfig {

  /**
   * 模板渲染器的bean
   *
   * @return 模板渲染器对象
   */
  @Bean
  @ConditionalOnMissingBean
  public Renderer renderer() {
    return new EnjoyRenderer(Engine.create("_koala"));
  }

  /**
   * 代码模板组服务的bean
   *
   * @param repository 代码模板组存储库对象
   * @return 代码模板组服务对象
   */
  @Bean
  @ConditionalOnMissingBean
  public CodeTemplateGroupService codeTemplateGroupService(CodeTemplateGroupRepository repository) {
    return new MyBatisCodeTemplateGroupService(repository);
  }

  /**
   * 领域转换器服务的bean
   *
   * @param converters 领域转换器列表
   * @return 领域转换器服务对象
   */
  @Bean
  @ConditionalOnMissingBean
  public DomainConverterService domainConverterService(List<DomainConverter> converters,
                                                       EucalyptusProperties properties) {
    DomainConverterService result = new InMemoryDomainConverterService();
    result.add(new EnhancedTableDomainConverter(properties.isRemoveTablePrefix()));
    converters.forEach(result::add);
    return result;
  }

  /**
   * 代码生成器的bean
   *
   * @param domainConverterService 领域转换器服务对象
   * @param renderer               模板渲染器对象
   * @return 代码生成器对象
   */
  @Bean
  @ConditionalOnMissingBean
  public Generator generator(DomainConverterService domainConverterService, Renderer renderer) {
    return new DefaultGenerator(domainConverterService, renderer);
  }

  /**
   * 代码模板组接口的bean
   *
   * @param codeTemplateGroupService 代码模板组服务对象
   * @param generator                代码生成器对象
   * @param generatorProperties      生成器参数
   * @return 代码模板组接口对象
   */
  @Bean
  @ConditionalOnMissingBean
  public CodeTemplateGroupApi codeTemplateGroupApi(CodeTemplateGroupService codeTemplateGroupService,
                                                   Generator generator, GeneratorProperties generatorProperties) {
    return new CodeTemplateGroupApiImpl(codeTemplateGroupService, generator, generatorProperties);
  }

  /**
   * 领域转换器接口的bean
   *
   * @param domainConverterService 领域转换器服务对象
   * @return 领域转换器接口对象
   */
  @Bean
  @ConditionalOnMissingBean
  public DomainConverterApi domainConverterApi(DomainConverterService domainConverterService) {
    return new DomainConverterApiImpl(domainConverterService);
  }
}
