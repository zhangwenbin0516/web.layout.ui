/**
 * @router 路由处理
 * @react useState:初始化数据， Suspense：页面loading， useEffect：副作用钩子
 * @react-router-dom Switch：筛选路由插座， route:路由插座
 * @RouterContext 路由组件，实现路由渲染
 */
/*
 * import {Suspense, useState, useEffect, useContext} from "react";
 * import {Switch, Route, useRouteMatch, Redirect} from "react-router-dom";
 */
import {useContext} from "react";
import {AppContext} from "@/hooks";
import {Spin} from "@es";

/**
 * @RouterContext 渲染路由模板, 模板兼容三种模式的路由渲染
 * @pathname 正则校验路径，拼接正确路径
 * @component 单一模板
 * @components 多模板
 */
/*
 * interface Props {
 *     routes: Array<{
 *       [key: string]: any
 *     }>
 * }
 */
const RouterContext = () => {
  /*
   * const [routes, setRoutes]: any = useState([]);
   * const [redirect, setRedirect]: any = useState(null);
   * const match = useRouteMatch();
   */
  const {loading}: any = useContext(AppContext);

  /*
   * useEffect(() => {
   * if (props.routes && props.routes.length > 0) {
   *   const pathname: string = match.path;
   *   const item = props.routes[0];
   *   if (/\/$/.test(pathname) && /^\//.test(item.path)) item.path = item.path.slice(1, item.path.length);
   *   else if (!/\/$/.test(pathname) && !/^\//.test(item.path)) item.path = `/${item.path}`;
   */

  /*
   *   setRedirect(<Redirect to={`${pathname}${item.path}`} />);
   * } else {
   *   setRedirect(null);
   * }
   * setRoutes(props.routes);
   * }, [props.routes]);
   */
  return <Spin loading={loading}>
    asdsadsadsad
    {/* <Switch> */}
    {/* {
        routes.map((item: any, index: number) => {
          const pathname = match.path;
          if (/\/$/.test(pathname) && /^\//.test(item.path)) item.path = item.path.slice(1, item.path.length);
          else if (!/\/$/.test(pathname) && !/^\//.test(item.path)) item.path = `/${item.path}`;

          return <Route key={index} path={`${pathname}${item.path}`} render={() => {
            const Component = item.component;
            if (item.components && item.component) return <Suspense fallback={"loading..."}>
              {
                Object.values(item.components).map((key, val) => {
                  const KeyComponent: any = key;
                  return <KeyComponent key={val} routes={ item.children || [] } />;
                })
              }
              <Component routes={ item.children || [] } />
            </Suspense>;
            else if (item.components && !item.component) return <Suspense fallback={"loading..."}>
              {
                Object.values(item.components).map((key, val) => {
                  const KeyComponent: any = key;
                  return <KeyComponent key={val} routes={ item.children || [] } />;
                })
              }
            </Suspense>;

            return <Suspense fallback={"loading..."}>
              <Component routes={ item.children || [] } />
            </Suspense>;

          }} />;
        })
      } */}
    {/* { redirect } */}
    {/* </Switch> */}
  </Spin>;
};
export default RouterContext;
