import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _createSuper from '@babel/runtime/helpers/esm/createSuper';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import * as React from 'react';

var LocaleProvider = /*#__PURE__*/function($Component) {
  _inherits(LocaleProvider, $Component);
  var _super = _createSuper(LocaleProvider);
  function LocaleProvider(props) {
    var _this;
    _classCallCheck(this, props);
    _this = _super.call(this, props);
    return _this;
  }
  _createClass(LocaleProvider, [
    {
      key: "render",
      values: function render() {
        var $props = this.props,
            locale = $props.locale,
            children = $props.children;
        return /*#__PURE__*/React.createElement(LocaleProvider.)
      }
    }
  ])
  return LocaleProvider;
}(React.Component);

export {LocaleProvider as default};
LocaleProvider.defaultProps = {
  locale: {}
};