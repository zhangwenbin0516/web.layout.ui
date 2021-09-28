/**
 * @root-router 根路由配置文件
 */
import { lazy } from "react";
const config = [
  {
    path: '/',
    name: '首页',
    value: 'page',
    component: lazy(() => import('@/pages'))
  },
  {
    path: '/page/',
    name: '首页',
    value: 'page',
    component: lazy(() => import('@/pages/home'))
  }
]

export default config;