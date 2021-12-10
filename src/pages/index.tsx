/**
 * @author zhangwenbin<942623159@qq.com>
 * @filename index.js
 * @date 2021-12-07
 */

/*
 * import HeaderComponent from '@/components/header/top';
 * import MenuComponent from '@/components/menus/asider';
 * import RouterComponent from '@/router';
 * import menus from './menu.config';
 */
/*
 * interface Props {
 *   routes: any
 * }
 */
const RootComponent = () => {
  return <div>
    {/* <Layout
      header="left"
      headerRender={<HeaderComponent />}
      className={ style.page_main }
      logo={{
        title: 'YHUI',
        url: require('@/assets/logo.png')
      }}
      menus={menus}
      menuRender={<MenuComponent key="menu" menus={menus} />}
      style={{}}>
      <RouterComponent routes={props.routes} />
    </Layout> */}
  </div>;
};

export default RootComponent;
