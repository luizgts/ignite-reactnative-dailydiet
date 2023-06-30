import { useState } from "react";
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { useThemeStyle } from "@utils/themeStyle";

import { Header } from "@components/Header";
import { ActionButton } from "@components/ActionButton";
import { OptionButton } from "@components/OptionButton";

import { 
    Container, 
    RoundedContainer, 
    Row, Column, 
    Input, InputMask, InputMultiline 
} from '@components/Styled';

import { 
    Title, 
    FormContainer, 
    Label,
    Divider
} from './styles';

import { createMeal } from '@storage/diet';
import { mealType } from '@custonTypes/index';

type fieldsType = mealType & {
    date: string,
}

export function NewMeal() {

    const navigation = useNavigation();

    const theme = useTheme();
    const { light } = useThemeStyle('light');

    const [option, setOption] = useState<boolean | null>(null);

    const [formFields, setFormFields] = useState<fieldsType>({
        date: '',
        desc: '',
        hour: '',
        name: '',
        inDiet: false
    });

    async function saveMeal() {

        if (
            formFields.date == "" || 
            formFields.desc == "" ||
            formFields.name == "" ||
            formFields.hour == "" ||
            formFields.inDiet == null
        ) {
            Alert.alert("Atenção", "Preencha todos os campos")
            return
        }

        const meal: mealType = {
            desc: formFields.desc,
            name: formFields.name,
            hour: formFields.hour,
            inDiet: option
        };

        try {
            await createMeal(formFields.date, meal);
            navigation.navigate('NewMealFeedback', { inDiet: meal.inDiet });
        }catch (error) {
            console.log(error);
        }
    }

    function handleInputText(field: {name: string, value: any}) {
        setFormFields({...formFields, [field.name]: field.value});
    }

    return (
        <Container style={{ backgroundColor: light }}>

            <Header
                themeStyle="light"
                onBackPress={() => navigation.navigate('Home')}
            >
                <Title>Nova refeição</Title>
            </Header>

            <RoundedContainer
                style={{ paddingBottom: 24 }}
            >

                <Row style={{ marginBottom: 28}}>
                    <Label>Nome</Label>
                    <Input 
                        value={formFields.name}
                        onChangeText={value => handleInputText({name: "name", value})}
                    />
                </Row>

                <Row style={{ marginBottom: 28}}>
                    <Label>Descrição</Label>
                    <InputMultiline 
                        value={formFields.desc}
                        onChangeText={value => handleInputText({name: "desc", value})}
                    />
                </Row>

                <Row style={{ marginBottom: 28}}>
                    <Column style={{ gap: 20}}>
                        <FormContainer>
                            <Label>Data</Label>
                            <InputMask
                                mask="99/99/9999"
                                onChangeText={value => handleInputText({name: "date", value})}
                                keyboardType="numeric"
                                value={formFields.date}
                            />
                        </FormContainer>

                        <FormContainer>
                            <Label>Hora</Label>
                            <InputMask
                                mask="99:99"
                                onChangeText={value => handleInputText({name: "hour", value})}
                                keyboardType="numeric"
                                value={formFields.hour}
                            />
                        </FormContainer>
                    </Column>
                </Row>

                <Row>
                    <Label>Está dentro da dieta?</Label>
                    <Column style={{ gap: 8}}>
                        <OptionButton
                            style={{ flex: 1 }}
                            title="Sim"
                            themeStyle="primary"
                            onSelect={() => setOption(true)}
                            active={option === true}
                        />
                        <OptionButton
                            style={{ flex: 1 }} 
                            title="Não"
                            themeStyle="secondary"
                            onSelect={() => setOption(false)}
                            active={option === false}
                        />
                    </Column>
                </Row>

                <Divider />

                <ActionButton 
                    title="Cadastrar refeição"
                    onPress={saveMeal}
                />

            </RoundedContainer>

        </Container>
    )
}