import {lazy} from "react";
export default [
  {
    path: "/layout",
    name: "页面布局",
    value: "layout",
    component: lazy(() => import(/* webpackChunkName: 'home' */ "@/pages/layout"))
  },
  {
    path: "/table",
    name: "首页",
    value: "table",
    component: lazy(() => import(/* webpackChunkName: 'home' */ "@/pages/table"))
  },
  {
    path: "/header",
    name: "首页",
    value: "header",
    component: lazy(() => import(/* webpackChunkName: 'home' */ "@/pages/header"))
  }
];
