import React from "react";
import style from './header.style.scss';
const Menu = (props) => {
    return React.createElement('div', {
        className: props.className || style.header_menu
    }, [])
}

export default Menu;