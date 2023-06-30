import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 6px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    `}
`;

export const Dot = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 32px;
    margin-right: 8px;
`;