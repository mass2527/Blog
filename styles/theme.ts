import {
  blue,
  blueDark,
  crimson,
  crimsonDark,
  gray,
  grayDark,
  red,
  redDark,
  teal,
  tealDark,
  yellow,
  yellowDark,
} from "@radix-ui/colors";

const black = {
  black1: "#fff",
  black12: "#000",
};

const blackDark = {
  black1: "#000",
  black12: "#fff",
};

const commonTheme = {
  spacers: {
    5: "5px",
    10: "10px",
    15: "15px",
    20: "20px",
    25: "25px",
    35: "35px",
  },
  radiuses: {
    4: "4px",
    6: "6px",
    8: "8px",
    12: "12px",
    "50%": "50%",
  },
  fontWeights: {
    400: 400,
    500: 500,
    700: 700,
  },
  fontSizes: {
    14: "14px",
    16: "16px",
    20: "20px",
    24: "24px",
    32: "32px",
  },
} as const;

export const lightTheme = {
  ...commonTheme,
  colors: {
    ...crimson,
    ...gray,
    ...red,
    ...teal,
    ...yellow,
    ...blue,
    ...black,
  },
} as const;

export const darkTheme = {
  ...commonTheme,
  colors: {
    ...crimsonDark,
    ...grayDark,
    ...redDark,
    ...tealDark,
    ...yellowDark,
    ...blueDark,
    ...blackDark,
  },
} as const;
