import React, { useState, useEffect } from "react";
import style from './header.style.scss';

const Logo = (props) => {
    const [component, setComponent] = useState([]);
    useEffect(() => {
        if (props.logoRender) {
            logoRender();
        } else {
            onLogo();
        }
    }, [props])
    function onLogo() {
        setComponent([
            React.createElement('div', {
                className: style.header_logo_img,
                style: {
                    background: 'center no-repeat',
                    backgroundImage: `url(${ (props.url || {}).default || '' })`,
                    backgroundSize: 'cover'
                },
                key: 'logo'
            }),
            props.title
        ])
    }
    function logoRender() {
        setComponent([props.logoRender])
    }
    return React.createElement('div', {
        className: props.className || style.header_logo,
        style: { ...props.style }
    }, component)
}

export default Logo;