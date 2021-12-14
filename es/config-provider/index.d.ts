import * as React from 'react';

export interface ProviderProps {
  locale?: string|object;

}

declare const ConfigProvider: React.FC<ProviderProps> & {

}

export default ConfigProvider;