package cn.koala.eucalyptus;

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
   * @param group   代码组
   * @param context 上下文
   * @return 代码生成结果列表
   */
  List<GenerateResult> generate(CodeTemplateGroup group, Map<String, Object> context);
}
