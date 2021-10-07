import React, { useState, useEffect } from "react";
import style from './header.style.scss';
const Menu = (props) => {
    useEffect(() => {
        console.log(props)
    }, [props])
    return React.createElement('div', {
        className: style.header_menu
    }, [])
}

export default Menu;