# Eucalyptus
[English](./README.en.md)

## 介绍

桉树(Eucalyptus)是一款免费开源的代码生成工具, 基于`Java`和[Spring生态](https://github.com/spring-projects)开发, 使用了从数据库表到领域模型再到代码的设计思路

项目提供了开箱即用的基础方案, 也可进行深层次的定制开发

## 理念

在项目开发和后期迭代过程中, 我们将坚持以下理念:

- 桉树致力于成为程序员的助手
- 桉树只负责生成代码, 与低代码无关
- 代码要跑, 文档先行
- 简单优雅, 学习成本极低

## 功能

- [x] 数据库表生成代码
- [x] 代码模板组管理
- [x] 应用界面
- [x] 友好的二次开发
- [ ] 多数据源支持
- [ ] 主从表关联
- [ ] 多模板引擎支持
- [ ] ...

## 项目预览

- [桉树示例项目](https://eucalyptus.dxl.pink/): 每天定时重置数据

## 使用

根据实际需求, 可分为如下两种使用方式:

- [直接使用](#直接使用): 现有功能即可为您提供有效帮助, 快速启动开始
- [定制开发](#定制开发): 拥有开发环境, 快速集成或二次开发

### 直接使用

1. 本地安装Java 17环境, Linux推荐使用[SDKMAN](https://sdkman.io/)
2. 下载[最新发行版](https://github.com/koala-projects/eucalyptus/releases/tag/2022.0.0-SNAPSHOT)
3. 创建并使用[脚本](https://github.com/koala-projects/eucalyptus/tree/main/eucalyptus-core/src/main/resources)初始化数据库
4. 修改配置文件`config/application.yml`

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/eucalyptus?useUnicode=true&characterEncoding=utf-8&allowMultiQueries=true
    username: eucalyptus
    password: eucalyptus
eucalyptus:
  generator:
    # 临时目录
    temp-path: D:\\Temp\\eucalyptus\\
```

5. 启动项目: `./spring-cmd.sh start eucalyptus-2022.0.0-SNAPSHOT`
6. 访问`http://127.0.0.1:9999`, 参照[使用手册](./docs/manual/index.md)开始生成代码

![预览图片](./docs/public/preview.png)

### 定制开发

定制开发可分为集成与源代码开发, 本节主要讲述集成, 源代码开发请您参考[开发手册](./docs/develop/index.md)

桉树使用前后端分离开发模式, 后端基于[Spring Boot](https://github.com/spring-projects/spring-boot), 前端基于[Vue Vben Admin](https://github.com/vbenjs/vue-vben-admin)

当前仅后端提供了用于集成的组件`eucalyptus-spring-boot-starter`, 前端只能进行源代码开发

1. 增加Maven仓库

```xml
<repositories>
  <repository>
    <id>koala</id>
    <name>koala</name>
    <url>https://raw.github.com/Houtaroy/maven-repositories/snapshot/</url>
  </repository>
</repositories>
```

访问Github不方便的可以使用码云: `https://gitee.com/houtaroy/maven-repositories/raw/snapshot/`

2. 引入依赖

```xml
<dependencies>
  <dependency>
    <groupId>cn.koala</groupId>
    <artifactId>eucalyptus-spring-boot-starter</artifactId>
    <version>2022.0.0-SNAPSHOT</version>
  </dependency>
</dependencies>
```

3. 创建并使用[脚本](https://github.com/koala-projects/eucalyptus/tree/main/eucalyptus-core/src/main/resources)初始化数据库
4. 修改配置文件`application.yml`, 可参照[上一节](#直接使用)
5. 启动项目, 访问`http://127.0.0.1:9999/swagger-ui.html`可查看接口文档
6. 如需定制前端, 请参照[开发手册](./docs/develop/index.md)

## 联系方式

如您有任何意见建议, 可以发送邮件至`koala_projects@yeah.net`

## 许可

[MIT © Eucalyptus 2022](./LICENSE)
