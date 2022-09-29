package cn.koala.eucalyptus;

import cn.koala.datamodel.PropertyEntity;
import cn.koala.datamodel.PropertyType;
import cn.koala.template.TemplateEntity;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CodeTemplateGroupServiceTest {
  @Autowired
  private CodeTemplateGroupService service;

  @Test
  @Order(1)
  public void add() {
    service.add(CodeTemplateGroupEntity.builder()
      .id("test")
      .name("测试模板")
      .description("测试模板")
      .domainConverterId("enhanced-table")
      .properties(List.of(PropertyEntity.builder().name("包名").code("package").type(PropertyType.STRING).build()))
      .templates(List.of(
        TemplateEntity.builder().name("Entity.java").content("实体类").build()
      ))
      .build());
  }

  @Test
  @Order(2)
  public void update() {
    service.update(CodeTemplateGroupEntity.builder()
      .id("test")
      .name("更新测试模板")
      .description("更新测试模板")
      .domainConverterId("enhanced-table")
      .properties(List.of(PropertyEntity.builder().name("包名").code("package").type(PropertyType.STRING).build()))
      .templates(List.of(
        TemplateEntity.builder().name("Entity.java").content("实体类").build(),
        TemplateEntity.builder().name("Api.java").content("接口类").build()
      ))
      .build());
  }

  @Test
  @Order(3)
  public void list() {
    List<CodeTemplateGroup> groups = service.list(new HashMap<>());
    Assertions.assertEquals(groups.size(), 1);
  }

  @Test
  @Order(4)
  public void load() {
    Optional<CodeTemplateGroup> group = service.load("test");
    Assertions.assertTrue(group.isPresent());
    Assertions.assertEquals(group.get().getName(), "更新测试模板");
    Assertions.assertEquals(group.get().getTemplates().size(), 2);
  }

  @Test
  @Order(5)
  public void delete() {
    service.delete(CodeTemplateGroupEntity.builder().id("test").build());
  }
}
