/**
 * @filename  config-provider/index.js
 * @author zhangwenbin
 * @date 2021-12-17
 */
import * as React from 'react';
import { ConfigContext } from './context';
import LocaleProvider from '../locale-provider';

let ConfigProvider = function ConfigProvider(props) {
  return /*#__PURE__*/React.createElement(LocaleProvider, props);
};

ConfigProvider.ConfigContext = ConfigContext;

export default ConfigProvider;