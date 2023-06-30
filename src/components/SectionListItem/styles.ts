import styled, { css } from "styled-components/native";

export const SectionListItemContainer = styled.TouchableOpacity`
    height: 49px;
    padding: 0px 16px 0px 12px;
    border: 1px solid ${({theme}) => theme.COLOR.GRAY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`;

export const SectionListItemHour = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.BODY.XS}px;
    `}
`;

export const SectionListItemName = styled.Text`
    flex: 1;
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
    `}
`;

export const SectionListItemSeparator = styled.View`
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: ${({theme}) => theme.COLOR.GRAY_400};
    height: 14px;
    margin: 0px 12px;
`;

export const SectionListItemIcon = styled.View`
    height: 14px;
    width: 14px;
    border-radius: 50px;
`;