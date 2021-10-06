/**
 * @
 */
import React, { useState, useEffect } from 'react';
import { Layout } from '@es';
import HeaderComponent from '@/components/header/top';
import MenuComponent from '@/components/menus/asider';
import RouterComponent from '@/router';

import style from './page.style.scss';

const RootComponent = (props) => {
  let [count, setCount] = useState(0)
  useEffect(() => {
    console.log(props)
  }, [props])
  function onTest() {
    setCount(count++)
  }
  return <div className={ style.page }>
    <Layout 
      header="top"
      headerRender={<HeaderComponent />} 
      className={ style.page }
      menus={[]}
      menuRender={<MenuComponent />}
      style={{}}>
        <div onClick={ () => onTest() }>sadasdsad</div>
       <div> {count}</div>
      <RouterComponent routes={props.routes} />
    </Layout>
  </div>
}

export default RootComponent;