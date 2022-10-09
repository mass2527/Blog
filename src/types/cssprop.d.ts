import { CSSProp } from "styled-components";

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
declare module "react" {
  // eslint-disable-next-line no-unused-vars
  interface Attributes {
    css?: CSSProp;
  }
}
