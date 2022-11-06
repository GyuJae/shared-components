import React, { AllHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import { colors } from '@/theme';
import { FC } from 'react';

type TSize = keyof typeof $size;
type TTypography = keyof typeof $typography;
type TFontWeights = keyof typeof $fontWeight;

interface IProps {
  text?: string;
  typography?: TTypography;
  weight?: TFontWeights;
  size?: TSize;
  style?: CSSProperties;
  spanAttributes?: AllHTMLAttributes<any>;
}

const Text: FC<PropsWithChildren<IProps>> = (props) => {
  const { weight, size, children, text, style: $styleOverride, spanAttributes } = props;

  const content = text || children;
  const typography: TTypography = $typography[props.typography] ? props.typography : 'default';

  const $styles = [$typography[typography], $fontWeight[weight], $size[size]];

  return (
    <span css={$styles} style={$styleOverride} {...spanAttributes}>
      {content}
    </span>
  );
};

const $size = {
  xxl: { fontSize: 36 },
  xl: { fontSize: 24 },
  lg: { fontSize: 20 },
  md: { fontSize: 18 },
  sm: { fontSize: 16 },
  xs: { fontSize: 14 },
  xxs: { fontSize: 12 },
};

const $fontWeight = {
  light: { fontWeight: 400 },
  normal: { fontWeight: 500 },
  medium: { fontWeight: 600 },
  semiBold: { fontWeight: 700 },
  bold: { fontWeight: 800 },
};

const $baseStyle = [
  $size.sm,
  $fontWeight.normal,
  {
    color: colors.text,
  },
];

const $typography = {
  default: $baseStyle,
  bold: [$baseStyle, $fontWeight.bold],
  heading: [$baseStyle, $size.xxl, $fontWeight.bold],
  subheading: [$baseStyle, $size.lg, $fontWeight.medium],
  formLabel: [$baseStyle, $fontWeight.medium],
  formHelper: [$baseStyle, $size.sm, $fontWeight.normal, { color: colors.error }],
};

export default Text;
