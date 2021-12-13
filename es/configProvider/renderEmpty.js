/**
 * @empty 空文件
 * @author zhangwenbin<942623159@qq.com>
 * @date 2021-12-13
 */

import * as React from 'react';

var renderEmpty = function(componentName) {
  return /*#__PURE__*/React.createElement('div', null, function(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var empty = getPrefixCls('empty');
    switch(componentName) {
      default:
        return /*#__PURE__*/React.createElement('div', null)
    }
  })
}

export default renderEmpty;