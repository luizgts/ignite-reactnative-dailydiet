import styled, { css } from 'styled-components/native';

type ActionButtonType = {
    variant: 'fill' | 'outline'
}

export const ActionButtonContainer = styled.TouchableOpacity<ActionButtonType>`
    padding-left: 27px;
    padding-right: 27px;
    ${({theme, variant}) => 
        variant === 'fill' ? css`
            background-color: ${theme.COLOR.GRAY_200}
        `
        : css`
            border: 1px solid ${theme.COLOR.GRAY_100}
        `
    }

    height: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 6px;
`;

export const Title = styled.Text<ActionButtonType>`
    ${({ theme, variant }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        color: ${variant === 'fill' ? theme.COLOR.WHITE : theme.COLOR.GRAY_100};
    `}
`;
