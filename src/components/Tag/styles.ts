import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLOR.GRAY_600};
    height: 34px;
    border-radius: 50px;
    padding: 0px 24px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_100};
        font-size: ${theme.FONT_SIZE.BODY.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;

export const Dot = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 32px;
    margin-right: 8px;
`;
