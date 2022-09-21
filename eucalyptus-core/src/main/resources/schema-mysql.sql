DROP TABLE IF EXISTS t_code_template;
CREATE TABLE t_code_template
(
  id          VARCHAR(36)   NOT NULL COMMENT '主键',
  name        VARCHAR(200)  NOT NULL COMMENT '代码模板名称',
  description VARCHAR(200)  NOT NULL COMMENT '代码模板描述',
  content     VARCHAR(2000) NOT NULL COMMENT '代码模板内容',
  group_id    VARCHAR(36)   NOT NULL COMMENT '代码模板组id',
  PRIMARY KEY (id)
) COMMENT = '代码模板表';

DROP TABLE IF EXISTS t_code_template_group;
CREATE TABLE t_code_template_group
(
  id                           VARCHAR(36) NOT NULL COMMENT '主键',
  name                         VARCHAR(20) NOT NULL COMMENT '代码模板组名称',
  domain_converter_id          VARCHAR(36) NOT NULL COMMENT '领域转换器id',
  global_options_definition_id VARCHAR(36) COMMENT '全局参数定义id',
  PRIMARY KEY (id)
) COMMENT = '代码模板组表';
