import "styled-components";
import { lightTheme, darkTheme } from "./theme";

type Theme = typeof lightTheme & typeof darkTheme;

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
