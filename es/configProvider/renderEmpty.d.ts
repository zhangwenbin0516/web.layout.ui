/**
 * @empty 空文件
 * @author zhangwenbin<942623159@qq.com>
 * @date 2021-12-13
 */

import * as React from 'react';
// 声明空模板状态
declare const renderEmpty: (componentName?: string|undefined) => React.ReactNode;

// 声明类型别称
export declare type RenderEmptyHandler = typeof renderEmpty;

export default renderEmpty;