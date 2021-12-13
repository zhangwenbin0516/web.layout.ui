import _createSuper from '@babel/runtime/helpers/esm/createSuper';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _clasCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import * as React from 'react';

var LocaleProvider = /*#__PURE__*/function($Component) {
  // 合并模板
  _inherits(LocaleProvider, $Component);
  var _super = _createSuper(LocaleProvider);
  function LocaleProvider(props) {
    var _this;
    _clasCallCheck(this, LocaleProvider);
    _this = _super.call(this, props);
    return _this;
  }
  _createClass(LocaleProvider, [
    {
      key: 'componentDidMount',
      value: function componentDidMount(prevProps) {

      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidMount(prevProps) {
        
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentDidMount(prevProps) {
        
      }
    },
    {
      key: 'render',
      value: function render() {
        var $props = this.props,
        locale = $props.locale,
        children = $props.children;
        return /*#__PURE__*/React.createElement(LocaleProvider.Provider, {

        }, children);
      }
    }
  ]);
  return LocaleProvider;
}(React.Component);

export { LocaleProvider as default };
LocaleProvider.defaultProps = {
  locale: {}
}