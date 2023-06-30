import { ActionButtonContainer, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

type ActionButtonType = TouchableOpacityProps & {
    title: string,
    leftIcon?: JSX.Element,
    variant?: 'fill' | 'outline'
}

export function ActionButton({ title, leftIcon, variant='fill', ...rest }: ActionButtonType) {

    return (
        <ActionButtonContainer variant={variant} {...rest} >
            { leftIcon }
            <Title
                variant={variant}
                style={{ marginLeft: leftIcon ? 13 : 0 }}
            >
                { title }
            </Title>
        </ActionButtonContainer>
    );
}