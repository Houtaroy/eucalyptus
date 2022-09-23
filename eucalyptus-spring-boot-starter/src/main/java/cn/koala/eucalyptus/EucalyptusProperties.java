package cn.koala.eucalyptus;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;

/**
 * 桉树配置参数
 *
 * @author Houtaroy
 */
@ConfigurationProperties("eucalyptus")
@Data
public class EucalyptusProperties {
  private boolean removeTablePrefix = true;
  @NestedConfigurationProperty
  private GeneratorProperties generator;
}
