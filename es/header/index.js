/**
 * 
 */
 import React, { useState, useEffect } from 'react';
 import style from './header.style.scss';

 const Header = (props) => {
   const [state, setState] = useState({})
   useEffect(() => {
    setState(props)
   }, [props])
   return React.createElement('div', {
     style: { ...state.style },
     className: state.className || style.header
   }, [state.logoRender, state.menuRender, state.userRender])
 }

 export default Header;