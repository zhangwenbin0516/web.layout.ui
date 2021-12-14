import * as React from 'react';

/**
 * @param {*} defaultGetPrefixCls 样式初始化
 * @param {*} initCls 默认样式
 * @param {*} prefixCls 自定义样式
 * @returns 
 */
var defaultGetPrefixCls = function defaultGetPrefixCls(initCls, prefixCls) {
  if (prefixCls) {
    return prefixCls;
  }
  return initCls ? "web-".concat(initCls) : 'web';
}

export var ConfigContext = /*#__PURE__*/React.createContext({
  getPrefixCls: defaultGetPrefixCls,
})

export var CongigConsumer = ConfigContext.Consumer;

export function withConfigConsumer(config) {
  return function fn(Component) {
    var FC = function FC(props) {
      return /*#__PURE__*/React.createElement(CongigConsumer, null, function(configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customClas = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customClas);
        return /*#__PURE__*/React.createElement(Component, _extends({}, configProps, props, {
          prefixCls
        }));
      })
    }
    return FC;
  }
}