import { Container } from '@components/Styled';
import { useTheme } from 'styled-components/native';
import { Title, SubTitle, Bold, Image } from './styles';
import { ActionButton } from '@components/ActionButton';
import { useNavigation, useRoute } from '@react-navigation/native';

type paramsType = { inDiet: boolean };

export function NewMealFeedback() {

    const theme = useTheme();
    const navigation = useNavigation();
    const params = useRoute().params as paramsType;

    const data = {
        title: '',
        message: (<></>),
        color: ''
    };

    console.log('NewMealFeedback:', params.inDiet);

    if(params.inDiet) {
        data.title = 'Continue assim!';
        data.message = <SubTitle>Você continua <Bold>dentro da dieta.</Bold>. Muito bem!</SubTitle>;
        data.color = theme.COLOR.PRIMARY_DARK;
    } else {
        data.title = 'Que pena!';
        data.message = <SubTitle>Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando e não desista!</SubTitle>;
        data.color = theme.COLOR.SECONDARY_DARK;
    }

    return (
        <Container 
            style={{ 
                backgroundColor: theme.COLOR.GRAY_700,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Title
                style={{ color: data.color }}
            >{ data.title }</Title>
            { data.message }

            <Image source={require('@assets/illustration-a.png')} />

            <ActionButton 
                title="Ir para a página inicial"
                onPress={() => navigation.navigate('Home')}
            />
        </Container>        
    )
}