package cn.koala.eucalyptus;

import java.util.Optional;

/**
 * 代码生成器管理者
 *
 * @author Houtaroy
 */
public interface CodeGeneratorManager {

  /**
   * 获取代码生成器
   *
   * @param name 代码生成器名称
   * @return 代码生成器
   */
  Optional<CodeGenerator> get(String name);

  /**
   * 新增代码生成器
   *
   * @param generator 代码生成器
   */
  void add(CodeGenerator generator);

  /**
   * 删除代码生成器
   *
   * @param name 代码生成器名称
   */
  void remove(String name);
}
