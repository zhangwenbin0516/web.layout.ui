/**
 * @author zhangwenbin
 * @date 2021-11-25
 * @filename handsontable/hooks/index
 * @name handsontable数据共享组件
 */
import React, { useState, useEffect, useReducer } from 'react';

/**
 * @Reducer 状态管理
 * @Action 行为管理
 * @initState 初始化数据
 */
import Reducer from './reducer';
import Action from './action';
import initState from './state';

const reducer = new Reducer();

export const TableContext = React.createContext(null);

export const Provider = (props) => {
  const [ options, setOptions ] = useState({});
  const [ state, dispatch ] = useReducer(reducer[Action.$get()], { ...initState, ...props });
  useEffect(() => {
    setOptions({ ...props.options })
  }, [props.options]);
  return <TableContext.Provider value={{ ...state, ...options, dispatch }}>
    { props.children }
  </TableContext.Provider>
}