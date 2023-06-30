import { CardContainer, CardText, CardTitle, CardIcon } from './styles'
import { useTheme } from 'styled-components/native';
import { ViewProps } from 'react-native';

import { ThemeStyleType } from '@custonTypes/index';

import { useThemeStyle } from '@utils/themeStyle';

type CardType = ViewProps & {
    title: string,
    text: string,
    themeStyle?: ThemeStyleType,
    showIcon?: boolean
}

export function Card({ title, text, themeStyle = 'light', showIcon = false, ...rest}: CardType) {

    const theme = useTheme();
    const { dark, light } = useThemeStyle(themeStyle);
    const { style } = rest;

    return (
        <CardContainer style={[{ backgroundColor: light}, style]}>
            <CardTitle>{ title }</CardTitle>
            <CardText>{ text }</CardText>
            {showIcon && <CardIcon size={24} color={dark} />}
        </CardContainer>
    )
}