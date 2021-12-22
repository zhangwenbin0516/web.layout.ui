/**
 * @filename  config-provider/index.js
 * @author zhangwenbin
 * @date 2021-12-17
 */
import * as React from 'react';
import { ConfigContext } from './context';
import LocaleProvider from '../locale-provider';

let ConfigProvider = function ConfigProvider(props) {
  console.log(props)
  return /*#__PURE__*/React.createElement(LocaleProvider)
};

ConfigProvider.ConfigContext = ConfigContext;

export default ConfigProvider;