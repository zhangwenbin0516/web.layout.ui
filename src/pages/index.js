/**
 * @
 */
import React, { useEffect } from 'react';
import { Layout } from '@es';
import HeaderComponent from '@/components/header/top';
// import MenuComponent from '@/components/menus/asider';
import RouterComponent from '@/router';
import menus from './menu.config';
import style from '@/styles/page.style.scss';

const RootComponent = (props) => {
  useEffect(() => {
  }, [props])
  return <div className={ style.page }>
    <Layout 
      header="left"
      headerRender={<HeaderComponent />} 
      className={ style.page_main }
      logo={{
        title: 'YHUI',
        url: require('@/assets/logo.png')
      }}
      menus={menus}
      // menuRender={<MenuComponent key="menu" menus={menus} />}
      style={{}}>
      <RouterComponent routes={props.routes} />
    </Layout>
  </div>
}

export default RootComponent;