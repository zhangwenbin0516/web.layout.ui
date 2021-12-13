import * as React from 'react';

// 声明当前语言类型
export interface Locale {
  locale: string
}

// 声明父组件语言类型
export interface LocaleProps {
  locale: Locale;
  children?: React.ReactNode;
}

export default class LocaleProvider extends React.Component<LocaleProps, any> {
  // 初始化语言数据
  static defaultProps: {
    locale: {}
  }
  constructor(props: LocaleProps);
  componentDidMount(): void;
  componentDidUpdate(prevProps: LocaleProps): void;
  componentWillUnmount(): void;
  render(): JSX.Element;
}