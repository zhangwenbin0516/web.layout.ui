import React, { useEffect } from "react";
import style from './header.style.scss';

const UserInfo = (props) => {
    useEffect(() => {
    }, [props])
    return React.createElement('div', {
        key: 'userinfo',
        className: style.header_userinfo
    }, [])
}

export default UserInfo;