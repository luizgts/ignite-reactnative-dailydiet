import styled, { css } from "styled-components/native";

export const Title = styled.Text`
    text-align: center;
    margin-top: 32px;
    margin-bottom: 30px;
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_100};
        font-size: ${theme.FONT_SIZE.TITLE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const Label = styled.Text`
    margin-bottom: 8px;
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_200};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const FormContainer = styled.View`
    flex: 1;
`;

export const Divider = styled.View`
    flex: 1;
`;