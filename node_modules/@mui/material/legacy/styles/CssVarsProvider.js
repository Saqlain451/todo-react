import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint-disable @typescript-eslint/naming-convention */
import { unstable_createCssVarsProvider as createCssVarsProvider } from '@mui/system';
import experimental_extendTheme from './experimental_extendTheme';
import createTypography from './createTypography';
var defaultTheme = experimental_extendTheme();

var _createCssVarsProvide = createCssVarsProvider({
  theme: defaultTheme,
  attribute: 'data-mui-color-scheme',
  modeStorageKey: 'mui-mode',
  colorSchemeStorageKey: 'mui-color-scheme',
  defaultColorScheme: {
    light: 'light',
    dark: 'dark'
  },
  prefix: 'mui',
  resolveTheme: function resolveTheme(theme) {
    var newTheme = _extends({}, theme, {
      typography: createTypography(theme.palette, theme.typography)
    });

    return newTheme;
  },
  shouldSkipGeneratingVar: function shouldSkipGeneratingVar(keys) {
    var _keys$;

    return !!keys[0].match(/(typography|mixins|breakpoints|direction|transitions)/) || keys[0] === 'palette' && !!((_keys$ = keys[1]) != null && _keys$.match(/(mode|contrastThreshold|tonalOffset)/));
  }
}),
    Experimental_CssVarsProvider = _createCssVarsProvide.CssVarsProvider,
    useColorScheme = _createCssVarsProvide.useColorScheme,
    getInitColorSchemeScript = _createCssVarsProvide.getInitColorSchemeScript;

export { useColorScheme, getInitColorSchemeScript, Experimental_CssVarsProvider };