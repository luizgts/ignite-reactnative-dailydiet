import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

import { Header } from '@components/Header';
import { Card } from '@components/Card';
import { Container, RoundedContainer, Column } from '@components/Styled';
import {   
    Title, 
    SubTitle, 
    Label
} from './styles'

import { useThemeStyle } from "@utils/themeStyle";
import { percentageCalc } from '@utils/percentage';
import { getAllMealForSectionlist } from "@storage/diet";
import { percentageCalcType } from '@custonTypes/index';

export function Statistic() {

    const navigation = useNavigation();
    const { light, dark } = useThemeStyle('primary');

    const [percentageData, setPercentageData] = useState<percentageCalcType>({} as percentageCalcType);

    useFocusEffect(useCallback(() => {

        (async() => {

            const data = await getAllMealForSectionlist();
            setPercentageData(percentageCalc(data));

        })()

    }, []));

    return (
        <Container style={{ backgroundColor: light }}>
            <Header 
                themeStyle={
                    percentageData.type === 'in'
                    ? 'primary'
                    : 'secondary'
                } 
                onBackPress={() => navigation.navigate('Home')}
            >
                <Title>{`${percentageData.percentage}%`}</Title>
                <SubTitle>
                {
                    percentageData.type === 'in'
                    ? "das refeições dentro da dieta"
                    : "dar refeições fora da dieta"
                }
                </SubTitle>
            </Header>

            <RoundedContainer>
                <Label>Estatísticas gerais</Label>

                <Card
                    title={String(percentageData.betterSequenceInDiet)}
                    text="melhor sequência de pratos dentro da dieta"
                    style={{ marginBottom: 12}}
                />

                <Card
                    title={String(percentageData.count)}
                    text="refeições registradas"
                    style={{ marginBottom: 12}}
                />

                <Column style={{ gap: 12 }}>
                    <Card
                        themeStyle="primary"
                        title={String(percentageData.inDiet)}
                        text="refeições dentro da dieta"
                        style={{ flex: 1}}
                    />

                    <Card
                        themeStyle="secondary"
                        title={String(percentageData.outDiet)}
                        text="refeições fora da dieta"
                        style={{ flex: 1}}
                    />
                </Column>

            </RoundedContainer>        
        </Container>
    )
}