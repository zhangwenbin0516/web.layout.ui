/**
 * @author zhangwenbin<942623159@qq.com>
 * @date 2021-11-25
 * @filename handsontable/hooks/index
 * @name handsontable状态管理组件
 */
import Action from "./action";
class Reducer {
  [Action.$get()](state, action) {
    return state;
  }
}

export default Reducer;