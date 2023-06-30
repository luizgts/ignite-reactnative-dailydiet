import styled, { css } from "styled-components/native";
import { MaskedTextInput } from "react-native-mask-text";

export const Container = styled.View`
    flex: 1;
    padding-top: ${({theme}) => theme.STATUSBAR_HEIGHT}px;
`;

export const RoundedContainer = styled.View`
    background-color: ${({ theme }) => theme.COLOR.GRAY_700};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    flex: 1;
    padding: 37px 24px 16px 24px;
`;

export const Row = styled.View`
    flex-direction: column;
`;

export const Column = styled.View`
    flex-direction: row;
`;

export const Divider = styled.View`
    flex: 1;
`;

export const Input = styled.TextInput.attrs(({theme}) => ({
    cursorColor: theme.COLOR.GRAY_300,
}))`
    height: 48px;
    border: 1px solid ${({ theme }) => theme.COLOR.GRAY_500};
    border-radius: 6px;
    padding: 0px 14px;
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY.MD}px;
    color: ${({ theme }) => theme.COLOR.GRAY_100};
`;

export const InputMultiline = styled.TextInput.attrs(({theme}) => ({
    cursorColor: theme.COLOR.GRAY_300,
    multiline: true,
}))`
    height: 120px;
    border: 1px solid ${({ theme }) => theme.COLOR.GRAY_500};
    border-radius: 6px;
    padding: 14px;
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY.MD}px;
    color: ${({ theme }) => theme.COLOR.GRAY_100};
    vertical-align: top;
`;

export const InputMask = styled(MaskedTextInput).attrs(({theme}) => ({
    cursorColor: theme.COLOR.GRAY_300,
}))`
    height: 48px;
    border: 1px solid ${({ theme }) => theme.COLOR.GRAY_500};
    border-radius: 6px;
    padding: 0px 14px;
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY.MD}px;
    color: ${({ theme }) => theme.COLOR.GRAY_100};
`;
