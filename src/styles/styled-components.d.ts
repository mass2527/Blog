import { darkTheme, lightTheme } from './theme';

import 'styled-components';

type Theme = typeof lightTheme & typeof darkTheme;

declare module 'styled-components' {
  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme extends Theme {}
}
