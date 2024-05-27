import 'styled-components/native';
import { Colors } from './config/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: Colors;
  }
}
