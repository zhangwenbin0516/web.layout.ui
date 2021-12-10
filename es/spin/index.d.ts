import * as React from 'react';

export interface SpinProps {
  loading?: boolean;
  className?: string;
  delay?: number;
  component?: React.Component;
  target?: () => Window | HTMLElement | null;
  children: React.ReactNode;
}
export interface SpinState {
  spinStyle?: React.CSSProperties;
  placeholderStyle?: React.CSSProperties;
  status: boolean;
  prevTarget: Window | HTMLElement | null;
}
declare class Spin extends React.Component<SpinProps, SpinState> {
  state: SpinState;
  placeholderNode: HTMLDivElement;
  private timeout;
  componentDidMount(): void;
  componentDidUpdate(prevProps: SpinProps): void;
  componentWillUnmount(): void;
  render: () => JSX.Element;
}

export default Spin;