/**
 * @asider 侧边栏
 */

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const MenuAsider = (props) => {
  const [component, setComponent] = useState([]);
  const history = useHistory();
  useEffect(() => {
    setComponent((props.menus || []).map((item, index) => {
      return React.createElement(Link, {
        key: index,
        to: item.path
      }, [item.title])
    }))
  }, [props])
  return React.createElement('div', {
    key: 'menu'
  }, component)
}

export default MenuAsider;