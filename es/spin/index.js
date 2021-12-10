import * as React from 'react';
import _createSuper from '@babel/runtime/helpers/esm/createSuper';
import _inherits from '@babel/runtime/helpers/esm/inherits';
var Spin = /*#__PUER__*/function(_React$Component) {
  _inherits(Spin, _React$Component);
  var _super = _createSuper(Spin);
  function Spin() {
    var _this;
    _this = _super.apply(this, arguments);
    _this.render = function() {
      var _this$props = _this.props,
      children = _this$props.children;
      return /*#__PUER__*/React.createElement('div', {
        key: 'spin'
      }, [/*#__PUER__*/React.createElement('div', {
        key: 'loading'
      }), children]);
    }
    return _this;
  };
  return Spin;
}(React.Component);

export default Spin;