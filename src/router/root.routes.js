/**
 * @root-router 根路由配置文件
 * @path string url路径
 * @name string 模板名称
 * @value string 模板别名
 * @component any 模板组件
 * @components object<any> 多模板组件
 * @children array<object<any>> 子路由结合 
 */
import { lazy } from "react";
const config = [
  {
    path: '/',
    name: '首页',
    value: 'page',
    component: lazy(() => import(/* webpackChunkName: 'page' */ '@/pages')),
    children: [
      {
        path: '/page',
        name: '首页',
        value: 'page',
        component: lazy(() => import(/* webpackChunkName: 'home' */ '@/pages/home'))
      }
    ]
  },
  
]

export default config;