import styled, { css } from "styled-components/native";

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_100};
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
        text-align: center;
    `}
`;

export const Bold = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const Image = styled.Image`
    margin: 40px 0px 32px 0px;
`;
