import {
  css,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  FlattenInterpolation,
  StyledProps,
} from "styled-components";

type Style =
  | InterpolationFunction<ThemedStyledProps<any, any>>
  | TemplateStringsArray
  | CSSObject
  | string;

export interface StyleDefinition<P> {
  (...styles: Style[]): (
    props: Partial<P>
  ) => FlattenInterpolation<StyledProps<P>>;
  valid: (props: Partial<P>) => boolean;
}

export const match = <P, U>(
  name: keyof P | StyleDefinition<U>,
  condition: any
) => {
  const isValid = (props: any) => {
    const prop = Object.keys(props).find((s) => s === name);

    if (prop) {
      return props[prop] === condition;
    }
    return false;
  };

  const getCss =
    (...styles: Style[]) =>
    (props: Partial<P & U>) => {
      const [style, ...rest] = styles;

      return isValid(props) ? css(style as any, ...rest) : css``;
    };

  getCss.valid = isValid;

  return getCss;
};
