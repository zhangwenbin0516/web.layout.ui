/**
 * @ConfigContext 全局容器
 * @author zhangwenbin
 * @date 2021-12-22
 */
import * as React from 'react';
import Options from "./config";
// 获取class样式
const defaultGetPrefix = function defaultGetPrefix(suffix, custom) {
  if (custom) {
    return custom;
  } else {
    return suffix ? Options.prefix.concat('-', suffix) : Options.prefix;
  }
};

// 定义上下文容器
export const ConfigContext = /*#__PURE__*/React.createContext({
  getPrefix: defaultGetPrefix
});

// 承接上文数据组件
export const ConfigConsumer = /*#__PURE__*/ConfigContext.Consumer;