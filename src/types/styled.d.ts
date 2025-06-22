import 'styled-components';
import type { themeTS } from '../themes/themeType';

declare module 'styled-components' {
    export interface DefaultTheme extends themeTS {}
}