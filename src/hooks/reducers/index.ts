/**
 * @reducer
 * @author zhangwenbin<942623159@qq.com>
 * date 2021-12-10
 */

interface State {
  [key: string]: any
}
interface Action {
  type?: string
  data?: any
  [key: string]: any
}
class Reducer {
  deep(state: State, action: Action) {
    delete action.type;
  }

  init(state: State, action: Action) {
    if (action.type && reducer[action.type]) return reducer[action.type](state, action);

    return this.deep(state, action);
  }
}

const reducer: State = new Reducer();
export default reducer;
export const init: any = reducer.init;
