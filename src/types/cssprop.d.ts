import { CSSProp } from "styled-components";

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}
