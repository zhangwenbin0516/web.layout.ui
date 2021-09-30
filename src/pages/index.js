/**
 * @
 */
import React, { useEffect } from 'react';

import HeaderComponent from '@/components/header/top';
import AsiderComponent from '@/components/layout/asider';
import RouterComponent from '@/router';

import style from './page.style.scss';

const RootComponent = (props) => {
  useEffect(() => {
    
  }, [props])
  return <div className={ style.page }>
    <HeaderComponent />
    <AsiderComponent />
    <RouterComponent routes={[]} />
  </div>
}

export default RootComponent;