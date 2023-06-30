import { ThemeStyleType } from '@custonTypes/index';
import { useThemeStyle } from '@utils/themeStyle';
import { useTheme } from 'styled-components/native';
import { ViewProps } from 'react-native';
import { Container, Title, Dot } from './styles';

type OptionButtonType = ViewProps & {
    themeStyle: ThemeStyleType,
    title: string,
    active?: boolean,
    onSelect: () => void
}

export function OptionButton(
    { themeStyle, title, active=false, onSelect, ...rest }: OptionButtonType) {

    const theme = useTheme();
    const { light, dark } = useThemeStyle(themeStyle);

    return (
        <Container 
            style={[
                rest.style, 
                { backgroundColor: active ? light : theme.COLOR.GRAY_600 },
                ( active && {
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: dark
                })
            ]}
            onPress={onSelect}
        >
            <Dot style={{ backgroundColor: dark }} />
            <Title>{title}</Title>
        </Container>
    );
}
