package cn.koala.eucalyptus;

import cn.koala.datamodel.MetadataEntity;
import cn.koala.persistence.Idable;
import cn.koala.template.TemplateEntity;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

/**
 * 持久化代码模板组
 *
 * @author Houtaroy
 */
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
@Schema(description = "代码模板组实体")
public class CodeTemplateGroupEntity extends MetadataEntity implements CodeTemplateGroup, Idable<String> {
  @Schema(description = "领域转换器ID", required = true)
  private String domainConverterId;
  @Schema(description = "代码模板列表", required = true)
  private List<TemplateEntity> templates;
}
