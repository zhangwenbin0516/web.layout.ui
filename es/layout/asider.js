import React from "react";
import style from './layout.style.scss';

const Asider = (props) => {
    return React.createElement('div', {
        className: props.className || style.asider_left
    }, [props.logoRender, props.menuRender])
}

export default Asider;