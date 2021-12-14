import * as React from 'react';

export interface Locale {
  locale: string;
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
  render(): JSX.Element;
}