/// <reference types="react" />
import { SupportedColorScheme, CssVarsTheme } from './experimental_extendTheme';
declare const Experimental_CssVarsProvider: (props: import("react").PropsWithChildren<Partial<import("packages/mui-system/src/cssVars/createCssVarsProvider").CssVarsProviderConfig<SupportedColorScheme>> & {
    theme?: CssVarsTheme | undefined;
    documentNode?: Document | null | undefined;
    colorSchemeNode?: Document | HTMLElement | null | undefined;
    colorSchemeSelector?: string | undefined;
    storageWindow?: Window | null | undefined;
}>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, useColorScheme: () => import("packages/mui-system/src/cssVars/createCssVarsProvider").ColorSchemeContextValue<SupportedColorScheme>, getInitColorSchemeScript: typeof import("packages/mui-system/src/cssVars/getInitColorSchemeScript").default;
export { useColorScheme, getInitColorSchemeScript, Experimental_CssVarsProvider };
