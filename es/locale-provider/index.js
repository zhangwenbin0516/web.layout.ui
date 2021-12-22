/**
 * @LocaleProvider 配置国际化语言
 * @author zhangwenbin
 * @date 2021-12-22
 */
import _createSuper from '@babel/runtime/helpers/createSuper';
import _inherits from '@babel/runtime/helpers/inherits';
import _createClass from '@babel/runtime/helpers/createClass';
import _extends from '@babel/runtime/helpers/extends';
import * as React from 'react';
import LocaleContext from './context';
const LocaleProvider = /*#__PURE__*/function($component) {
  // 继承父级实例
  _inherits(LocaleProvider, $component);
  // 创建数据同步实例
  const _super = _createSuper(LocaleProvider);

  function LocaleProvider(props) {
    let _this;
    _this = _super.call(this, props);
    return _this;
  }
  _createClass(LocaleProvider, [
    {
      key: 'render',
      value: function render() {
        const $props = this.props;
        const locale = $props.locale;
        const children = $props.children;
        return React.createElement(LocaleContext.Provider, {
          value: _extends({}, locale)
        }, children);
      }
    }
  ]);
  return LocaleProvider;
}(React.Component);

export default LocaleProvider;