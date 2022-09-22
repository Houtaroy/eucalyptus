package cn.koala.eucalyptus;

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
    service.add(PersistentCodeTemplateGroup.builder()
      .id("test")
      .name("测试模板")
      .domainConverterId("enhanced-table")
      .templates(List.of(
        PersistentCodeTemplate.builder().name("Entity.java").description("实体类").content("实体类").build()
      ))
      .build());
  }

  @Test
  @Order(2)
  public void update() {
    service.update(PersistentCodeTemplateGroup.builder()
      .id("test")
      .name("更新测试模板")
      .domainConverterId("enhanced-table")
      .templates(List.of(
        PersistentCodeTemplate.builder().name("Entity.java").description("实体类").content("实体类").build(),
        PersistentCodeTemplate.builder().name("Api.java").description("接口").content("接口类").build()
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
    service.delete(PersistentCodeTemplateGroup.builder().id("test").build());
  }
}
