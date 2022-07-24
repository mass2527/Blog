// https://styled-components.com/docs/api#transient-props
export type TransientProps<T extends Record<string, unknown>> = {
  [key in keyof T as `$${key & string}`]: T[keyof T];
};
