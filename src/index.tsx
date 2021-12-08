/**
 * @root 根目录入口文件
 * @reset css reset
 * @common.style sass配置公有变量
 * @BrowserRouter history路由模式
 * @RouterComponent 路由渲染模板
 */

import React, {useEffect} from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import RouterComponent from "@/router";
import configs from "@/router/root.routes";
import "@/styles/reset.css";
import style from "@/styles/common.style.scss";

/**
 * @App 入口组件
 */

const App = () => {
  useEffect(() => {
  }, []);
  return <div className={ style.root }>
    <BrowserRouter>
      <RouterComponent routes={ configs } />
    </BrowserRouter>
  </div>;
};
render(<App />, document.getElementById("root"));
