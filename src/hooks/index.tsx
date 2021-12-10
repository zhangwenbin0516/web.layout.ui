/**
 * @hook-app
 * @author zhangwenbin<942623159@qq.com>
 * @AppContext 入口state组件
 * @AppComponent 入口hook模板
 */
import React, {useReducer} from "react";
import initState from "./state";
import {init} from "./reducers";

export const AppContext: any = React.createContext(initState);

export const Provider = (props: any) => {
  const [store, dispatch]: any = useReducer(init, {
    ...initState,
    ...props
  });
  return <AppContext.Provider value={{...store,
    ...props,
    dispatch}}>
    {props.children}
  </AppContext.Provider>;
};
