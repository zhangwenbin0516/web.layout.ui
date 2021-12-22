/**
 * @LocaleProvider 配置国际化语言
 * @author zhangwenbin
 * @date 2021-12-22
 */
import * as React from 'react';
export interface Locale {

}
export interface LocaleProps {
  locale: Locale;
  children?: React.ReactNode;
}

export default class LocaleProvider extends React.Component<LocaleProps, any> {
  static defaultProps: {
    locale: {}
  }
  constructor(props: LocaleProps);
  render: () => JSX.Element;
}
