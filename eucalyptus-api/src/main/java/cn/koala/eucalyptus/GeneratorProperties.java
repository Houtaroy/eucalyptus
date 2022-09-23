package cn.koala.eucalyptus;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * 生成器配置
 *
 * @author Houtaroy
 */
@Data
@ConfigurationProperties("eucalyptus.generator")
public class GeneratorProperties {
  private String tempPath;
}
