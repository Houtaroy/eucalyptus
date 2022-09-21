package cn.koala.eucalyptus;

import cn.koala.database.Table;

import java.util.List;
import java.util.Map;

/**
 * 代码生成器
 *
 * @author Houtaroy
 */
public interface Generator {

  /**
   * 生成代码
   *
   * @param group         代码组
   * @param table         数据库表
   * @param globalOptions 全局选项
   * @return 代码生成结果列表
   */
  List<GenerateResult> generate(CodeTemplateGroup group, Table table, Map<String, Object> globalOptions);
}
