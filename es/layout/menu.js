import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import style from './layout.style.scss';
const Menu = (props) => {
  const [component, setComponent] = useState([]);
  const history = useHistory();
  const local = history.location;
  useEffect(() => {
    if (props.menuRender) {
      onMenu();
    } else {
      renderMenu();
    }
  }, [props])
  function onMenu() {
    setComponent([props.menuRender])
  }
  function renderMenu() {
    function menu(data, val) {
      if (data.constructor === Array) {
        return (data || []).map((item, index) => {
          if (item.path && !item.children) {
            return React.createElement(Link, {
              key: index,
              className: `${style.asider_menu_a} ${item.path === local.pathname ? style.asider_menu_active : ''}`,
              style: {paddingLeft: val * 5 + 10},
              to: item.path
            }, [item.title])
          } else if (item.path && item.children) {
            return React.createElement('div', {
              key: index,
              className: style.asider_menu_head,
            }, [
            <Link style={{paddingLeft: val * 5 + 10}} 
            key={index} to={item.path} 
            className={`${style.asider_menu_a} ${item.path === local.pathname ? style.asider_menu_active : ''}`}>
              {item.title}
            </Link>, 
            React.createElement('div', {
              key: 'children' + index,
              className: style.asider_menu_children
            }, menu(item.children, val + 1))
          ])
          } else {
            return React.createElement('div', {
              key: index,
              className: style.asider_menu_head,
            }, [<div style={{paddingLeft: val * 5 + 10}} key={index} className={style.asider_menu_title}>{item.title}</div>, React.createElement('div', {
              key: 'children' + index,
              className: style.asider_menu_children
            }, menu(item.children, val + 1))])
          }
        });
      } else {
        return [];
      }
    }
    setComponent(menu(props.menus, 0))
  }
  return React.createElement('div', {
    className: props.className || style.asider_menu,
    key: 'menu'
  }, component)
}

export default Menu;