import { ThemeStyleType } from "@custonTypes/index";
import { useTheme } from "styled-components/native";

export function useThemeStyle(themeStyle: ThemeStyleType) {

    const theme = useTheme();

    const color = {
        dark: '',
        light: '',
    }

    if (themeStyle === 'primary') {
        color.light = theme.COLOR.PRIMARY_LIGHT;
        color.dark = theme.COLOR.PRIMARY_DARK;
    } else if (themeStyle === 'secondary') {
        color.light = theme.COLOR.SECONDARY_LIGHT;
        color.dark = theme.COLOR.SECONDARY_DARK;
    } else if (themeStyle === 'light') {
        color.light = theme.COLOR.GRAY_500;
        color.dark = theme.COLOR.GRAY_100;
    }

    return color;

}