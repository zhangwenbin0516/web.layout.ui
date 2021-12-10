/**
 * @root 根目录入口文件
 * @reset css reset
 * @common.style sass配置公有变量
 * @BrowserRouter history路由模式
 * @RouterComponent 路由渲染模板
 */
import "@babel/polyfill";
import ReactDOM from "react-dom";
import {Provider} from "@/hooks";
import RouterContext from "@/router";
import RouteConfig from "@/router/root.routes";

const App = () => {
  return <Provider lang="zh_CN">
    <RouterContext routes={RouteConfig} />
  </Provider>;
};

ReactDOM.render(<App />, document.getElementById("root"));
