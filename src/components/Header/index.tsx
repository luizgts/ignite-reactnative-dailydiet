import { Container, HeaderIcon } from './styles';
import { useTheme } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

import { useThemeStyle } from '@utils/themeStyle';
import { ThemeStyleType } from '@custonTypes/index';

type HeaderType = {
    children: JSX.Element | JSX.Element[];
    themeStyle?: ThemeStyleType;
    onBackPress: () => void
}

export function Header({children, themeStyle='light', onBackPress}: HeaderType) {

    const theme = useTheme();
    const { light, dark } = useThemeStyle(themeStyle);

    return (
        <Container style={{ backgroundColor: light}}>
            { children }
            <HeaderIcon onPress={onBackPress}>
                <ArrowLeft size={24} color={dark} />
            </HeaderIcon>
        </Container>
    )
}