/**
 * @filename config-provider/context.d.ts
 * @author zhangwenbin
 * @date 2021-12-17
 */
import {Locale} from "../locale-provider";

export declare type DirectionType = "ltr" | "rtl" | undefined;
export interface ContextProps {
  direction?: DirectionType;
  locale?: Locale;
  rootPrefixCls?: string;
}

export declare const ConfigContext: React.Context<ContextProps>;
