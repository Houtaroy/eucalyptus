package cn.koala.eucalyptus;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * TODO: 修改类描述
 *
 * @author Houtaroy
 */
@ConfigurationProperties("eucalyptus.generator")
@Data
public class GeneratorProperties {
  private String tempPath;
}
