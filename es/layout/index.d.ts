import * as React from 'react';

export interface LayoutProps {
  style?: React.CSSProperties;
  onChange?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export interface LayoutState {}

declare class Layout extends React.Component<LayoutProps, LayoutState> {
  render: () => JSX.Element
}

export default Layout;