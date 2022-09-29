DROP TABLE IF EXISTS t_code_template;
CREATE TABLE t_code_template
(
  id       VARCHAR(36)  NOT NULL COMMENT '主键',
  name     VARCHAR(200) NOT NULL COMMENT '代码模板名称',
  content  TEXT         NOT NULL COMMENT '代码模板内容',
  group_id VARCHAR(36)  NOT NULL COMMENT '代码模板组id',
  PRIMARY KEY (id)
) COMMENT = '代码模板表';

DROP TABLE IF EXISTS t_code_template_group;
CREATE TABLE t_code_template_group
(
  id                  VARCHAR(36)  NOT NULL COMMENT '主键',
  name                VARCHAR(20)  NOT NULL COMMENT '代码模板组名称',
  description         VARCHAR(900) NOT NULL COMMENT '代码模板组描述',
  domain_converter_id VARCHAR(36)  NOT NULL COMMENT '领域转换器id',
  PRIMARY KEY (id)
) COMMENT = '代码模板组表';

DROP TABLE IF EXISTS t_property;
CREATE TABLE t_property
(
  id          VARCHAR(36) NOT NULL COMMENT '主键',
  code        VARCHAR(50) NOT NULL COMMENT '属性代码',
  name        VARCHAR(50) NOT NULL COMMENT '属性名称',
  description VARCHAR(500) COMMENT '属性描述',
  type        INT         NOT NULL COMMENT '属性类型',
  metadata_id VARCHAR(36) NOT NULL COMMENT '元数据id',
  PRIMARY KEY (id)
) COMMENT = '属性表';


