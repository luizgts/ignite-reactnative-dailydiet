import { Header, Avatar, Logo } from './styles';
import { ArrowLeft } from 'phosphor-react-native';
import { Container } from '@components/StyledComponents';

export function Home() {
    return (
        <Container>
            <Header>
                <Logo source={require('@assets/logo.png')} />
                <Avatar source={require('@assets/avatar.png')} />
            </Header>
        </Container>        
    )
}