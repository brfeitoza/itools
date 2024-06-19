import { DefaultTheme } from 'react-native-paper';
import { DefaultTheme as DefaultThemeType } from 'styled-components/native';

export type Colors = {
  primary: string;
  secondary: string;
  lightGray: string;
  lighterGray: string;
  gray: string;
  white: string;
  black: string;
};

export type Theme = DefaultThemeType & {
  colors: Colors;
};

export const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff0f00',
    secondary: 'yellow',
    lighterGray: '#f3f3f3',
    lightGray: '#d9d9d9',
    gray: '#909090',
    white: '#ffffff',
    black: '#000000',
  },
};
