import {
  blue,
  blueDark,
  crimson,
  crimsonDark,
  cyan,
  cyanDark,
  indigo,
  indigoDark,
  mauve,
  mauveDark,
  mint,
  mintDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  plum,
  plumDark,
  red,
  redDark,
  violet,
  violetDark,
  yellow,
  yellowDark,
} from "@radix-ui/colors";

const sizes = {
  maxWidth: "776px",
  headerHeight: "64px",
};

const spacers = {
  4: "4px",
  8: "8px",
  16: "16px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
} as const;

const radiuses = {
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  12: "12px",
  "50%": "50%",
} as const;

export const fontWeights = {
  400: 400,
  500: 500,
  700: 700,
} as const;

export const fontSizes = {
  14: "14px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
  64: "64px",
} as const;

const commonTheme = {
  spacers,
  radiuses,
  fontWeights,
  fontSizes,
  sizes,
} as const;

export const lightTheme = {
  ...commonTheme,
  colors: {
    ...crimson,
    ...red,
    ...yellow,
    ...blue,
    ...pink,
    ...violet,
    ...cyan,
    ...mauve,
    ...mint,
    ...indigo,
    ...orange,
    ...plum,
  },
} as const;

export const darkTheme = {
  ...commonTheme,
  colors: {
    ...crimsonDark,
    ...redDark,
    ...yellowDark,
    ...blueDark,
    ...pinkDark,
    ...violetDark,
    ...cyanDark,
    ...mauveDark,
    ...mintDark,
    ...indigoDark,
    ...orangeDark,
    ...plumDark,
  },
} as const;

export type Color =
  | keyof typeof lightTheme.colors
  | keyof typeof darkTheme.colors;
