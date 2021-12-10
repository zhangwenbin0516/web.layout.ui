/**
 * @router 路由处理
 * @react useState:初始化数据， Suspense：页面loading， useEffect：副作用钩子
 * @react-router-dom Switch：筛选路由插座， route:路由插座
 * @RouterContext 路由组件，实现路由渲染
 */
import React, {Suspense, useState, useEffect} from "react";
import {Switch, Route, useRouteMatch, Redirect} from "react-router-dom";

/**
 * @RouterContext 渲染路由模板, 模板兼容三种模式的路由渲染
 * @pathname 正则校验路径，拼接正确路径
 * @component 单一模板
 * @components 多模板
 */
interface Props {
    routes: any
}
const RouterContext = (props: Props) => {
  const [routes, setRoutes]: any = useState([]),
    [redirect, setRedirect]: any = useState(null),
    match = useRouteMatch();
  useEffect(() => {
    if (props.routes && props.routes.length > 0) {
      const pathname: string = match.path,
        item = props.routes[0];
      if (/\/$/.test(pathname) && /^\//.test(item.path)) item.path = item.path.slice(1, item.path.length);
      else if (!/\/$/.test(pathname) && !/^\//.test(item.path)) item.path = `/${item.path}`;

      setRedirect(<Redirect to={`${pathname}${item.path}`} />);
    } else {
      setRedirect(null);
    }
    setRoutes(props.routes);
  }, [props.routes]);
  return <Switch>
    {
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
    }
    { redirect }
  </Switch>;
};
export default RouterContext;
