import styled from "styled-components/native";

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
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