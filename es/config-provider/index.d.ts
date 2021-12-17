/**
 * @filename config-provider/index.d.ts
 * @author zhangwenbin
 * @date 2021-12-17
 */
import {Locale} from "../locale-provider";
import {ConfigContext} from "./context";
export interface ProviderProps {
  locale?: string;
  options?: Locale;
  direction?: string;
}

declare const ConfigProvider: React.FC<ProviderProps> & {
  ConfigContext: typeof ConfigContext;
};

export default ConfigProvider;
