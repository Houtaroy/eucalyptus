package cn.koala.eucalyptus;

import cn.koala.database.JdbcTable;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

/**
 * 代码生成请求体
 *
 * @author Houtaroy
 */
@Data
@NoArgsConstructor
public class CodeGenerateRequestBody {
  private JdbcTable table;
  private Map<String, Object> config;
}
