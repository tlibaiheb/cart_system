import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {}
}

declare module '@styled-system/theme-get' {
  export function themeGet(path: string, fallback?: any): any;
}
