import 'styled-components'
import { defaultTheme } from "../styles/theme/default";

type ThemeType = typeof defaultTheme

declare module 'sytled-components' {
    export interface DefaultTheme extends ThemeType { }
}