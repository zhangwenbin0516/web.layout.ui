/**
 * @layout 页面布局
 * @header 头部信息
 * @menu 菜单列表
 * @content 内容信息
 */
import _typeof from "@babel/runtime/helpers/esm/typeof";
import React, { useState, useEffect } from "react";

const Layout = (props) => {
  const [component, setComponent] = useState(props.children);
  useEffect(() => {
    console.log(props)
    if (props.children.constructor === Array) {
      setComponent(<div>
        {
          props.children.map((item) => {
            return item;
          })
        }
      </div>)
    } else {
      setComponent(props.children)
    }
  }, [props.children])
  if (props.className) {
    return React.createElement('div', { className: props.className }, props.children)
  } else {
    return <React.Fragment>
      {props.children}
    </React.Fragment>
  }
}

export default Layout;