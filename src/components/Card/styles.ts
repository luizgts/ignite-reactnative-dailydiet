import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';

export const CardContainer = styled.View`
    position: relative;
    padding: 20px;
    border-radius: 8px;
`;

export const CardTitle = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.LG}px;
        color: ${theme.COLOR.GRAY_100};
    `};
`;

export const CardText = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.SM}px;
        color: ${theme.COLOR.GRAY_200};
    `};
`;

export const CardIcon = styled(ArrowUpRight)`
    position: absolute;
    right: 13px;
    top: 13px;
`;