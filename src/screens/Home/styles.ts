import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: ${({theme}) => theme.STATUSBAR_HEIGHT}px 24px 0px 24px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 107px;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    border-width: 2px;
    border-color: ${({theme}) => theme.COLOR.GRAY_200};
`;

export const Label = styled.Text`
    margin: 44px 0px 13px 0px;
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
    `}
`;

export const SectionListHeaderItem = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.SM}px;
    `}
    margin-bottom: 5px;
    margin-top: 36px;
`;
