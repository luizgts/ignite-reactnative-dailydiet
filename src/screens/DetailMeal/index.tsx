import { useState, useCallback } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import { sectionDateToStringDate } from '@utils/date';
import { useTheme } from 'styled-components/native';

import { Header } from '@components/Header';
import { Tag } from "@components/Tag";
import { Container, RoundedContainer, Divider } from '@components/Styled';
import { ActionButton } from '@components/ActionButton';
import { HeaderTitle, Title, Label, TextBody, TagContainer } from './styles';

import { PencilSimpleLine, Trash } from 'phosphor-react-native';

import { getMeal, deleteMeal } from '@storage/diet';
import { mealType, paramsType } from '@custonTypes/index';

export function DetailMeal() {

    const navigation = useNavigation();
    const params = useRoute().params as paramsType;

    const theme = useTheme();

    const [mealData, setMealData] = useState<mealType>();

    useFocusEffect(useCallback(() => {

        (async() => {
            const data = await getMeal(params.date, params.mealID);
            setMealData(data);
        })()

    }, []));

    function handleEdit() {
        navigation.navigate('EditMeal', params);
    }

    function handleDelete() {
        Alert.alert("", "Deseja realmente excluir o registro da refeição?", [
            {text: 'Cancelar'},
            {
                text: 'Sim, excluir',
                onPress: () => {
                    deleteMeal(params.date, params.mealID).then(_ => navigation.navigate('Home'));
                }
            }
        ])
        
    }

    return (
        <Container
            style={{ backgroundColor:  mealData?.inDiet ? theme.COLOR.PRIMARY_LIGHT : theme.COLOR.SECONDARY_LIGHT}}
        >
            <Header
                onBackPress={() => navigation.navigate('Home')}
                themeStyle={mealData?.inDiet ? 'primary' : 'secondary'}
            >
                <HeaderTitle>Refeição</HeaderTitle>
            </Header>
            <RoundedContainer>

                <Title>{ mealData?.name }</Title>
                <TextBody>{ mealData?.desc }</TextBody>

                <Label>Data e hora</Label>
                <TextBody>
                    {`${sectionDateToStringDate(params.date)} às ${mealData?.hour}`}
                </TextBody>

                <TagContainer>
                    {mealData?.inDiet ? 
                        <Tag 
                            themeStyle="primary"
                            title="dentro da dieta"
                        />
                    :
                        <Tag 
                            themeStyle="secondary"
                            title="fora da dieta"
                        />
                    }
                </TagContainer>

                <Divider />

                <ActionButton 
                    title="Editar refeição"
                    leftIcon={<PencilSimpleLine size={20} color={theme.COLOR.WHITE} />}
                    onPress={() => handleEdit()}
                    style={{ marginBottom: 9 }}
                />

                <ActionButton 
                    title="Excluir refeição"
                    leftIcon={<Trash size={20} color={theme.COLOR.GRAY_100} />}
                    variant="outline"
                    onPress={() => handleDelete()}
                />
            </RoundedContainer>
        </Container>
    )
}