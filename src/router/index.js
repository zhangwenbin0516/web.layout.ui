/**
 * @router 路由处理
*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import config from './root.routes';

const RouterComponent = () => {
    return <Switch>
        {
            config.map((item, index) => {
                return <Route key={index} path={item.path} component={ item.component } />
            })
        }
    </Switch>
}
export default RouterComponent;