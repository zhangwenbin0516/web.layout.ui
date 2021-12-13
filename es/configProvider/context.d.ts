import * as React from 'react';

import { RenderEmptyHandler } from './renderEmpty';

export interface ConsumerProps {
  // 全局组件大小，默认：middle
  size?: string;
  // 文字和图片顺序，默认：ltr
  direction?: string;
  // 国际化语言设置
  // locale?: Locale
}

