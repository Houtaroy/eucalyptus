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

DROP TABLE IF EXISTS t_code_template;
CREATE TABLE t_code_template
(
  id          VARCHAR(36)  NOT NULL COMMENT '主键',
  name        VARCHAR(200) NOT NULL COMMENT '代码模板名称',
  description VARCHAR(200) NOT NULL COMMENT '代码模板描述',
  content     TEXT         NOT NULL COMMENT '代码模板内容',
  group_id    VARCHAR(36)  NOT NULL COMMENT '代码模板组id',
  PRIMARY KEY (id)
) COMMENT = '代码模板表';


