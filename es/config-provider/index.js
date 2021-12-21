/**
 * @filename  config-provider/index.js
 * @author zhangwenbin
 * @date 2021-12-17
 */
import * as React from 'react';
import { ConfigContext } from './context';
let ConfigProvider = function ConfigProvider(props) {
  console.log(props)
  return null ///*#__PURE__*/React.createElement(null)
};

ConfigProvider.ConfigContext = ConfigContext;

export default ConfigProvider;