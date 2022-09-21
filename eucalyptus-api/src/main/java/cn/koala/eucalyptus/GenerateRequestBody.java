package cn.koala.eucalyptus;

import cn.koala.database.JdbcTable;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 代码生成请求体
 *
 * @author Houtaroy
 */
@Data
@NoArgsConstructor
public class GenerateRequestBody {
  private List<JdbcTable> tables = new ArrayList<>();
  private Map<String, Object> globalOptions;
}
