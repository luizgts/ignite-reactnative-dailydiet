import { Container, Text, Dot } from './styles';

import { ThemeStyleType } from '@custonTypes/index';

import { useThemeStyle } from '@utils/themeStyle';

type TagType = {
    themeStyle: ThemeStyleType,
    title: string
}

export function Tag({themeStyle, title}: TagType) {

    const {dark} = useThemeStyle(themeStyle);

    return (
        <Container>
            <Dot style={{ backgroundColor: dark }} />
            <Text>{ title }</Text>
        </Container>
    )
}