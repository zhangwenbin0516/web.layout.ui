/**
 * @layout 页面布局
 * @header 头部信息
 * @menu 菜单列表
 * @content 内容信息
 */
import _typeof from "@babel/runtime/helpers/esm/typeof";
import React, { useState, useMemo } from "react";
import Header from "../header";
import Logo from "../header/logo";
import Asider from "./asider";
import HeaderMenu from "../header/menu";
import AsiderMenu from "./menu";
import UserInfo from "../header/userInfo";
import style from "./layout.style.scss";

const Layout = (props) => {
  const [component, setComponent] = useState([]);
  useMemo(() => {
    switch(props.header) {
      case 'top':
        setComponent([
          <Header 
          className={ style.header_top }
          logoRender={<Logo key='logo' { ...props.logo } />}
          menuRender={<HeaderMenu key='menu' menus={props.menus} menuRender={ props.menuRender } />}
          userRender={<UserInfo key='userinfo' userinfo={{ ...props.users }} />}
          key='header' />
        ].concat(props.children));
        break;
      default:
        let cls = props.header || 'left';
        setComponent([
          <Asider 
          className={ style['asider_' + cls] }
          menuRender={<AsiderMenu key='menu' className={ style.asider_menu } menus={props.menus} menuRender={ props.menuRender } />}
          key='asider' />,
          <Header
          className={ style['header_' + cls] }
          logoRender={<Logo key='logo' className={ style.asider_logo } { ...props.logo } />}
          userRender={<UserInfo key='userinfo' userinfo={{ ...props.users }} />}
          key='header' />
        ].concat(props.children));
        break;
    }
  }, [props])
  if (props.header === 'top' || props.className) {
    return React.createElement('div', { className: props.className }, component)
  } else {
    return <React.Fragment key="layout">
      { component }
    </React.Fragment>
  }
}

export default Layout;