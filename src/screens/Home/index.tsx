import { SectionList, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import { 
    Header, 
    Avatar, 
    Logo, 
    Label, 
    SectionListHeaderItem,
} from './styles';

import { Container } from '@components/Styled'
import { SectionListItem } from '@components/SectionListItem';
import { Card } from '@components/Card';
import { ActionButton } from '@components/ActionButton';

import { Plus } from 'phosphor-react-native';

import { getAllMealForSectionlist } from '@storage/diet';
import { SectionType } from '@custonTypes/index';
import { percentageCalc } from '@utils/percentage';

export function Home() {

    const [sectionListData, setSectionListData] = useState<SectionType>();
    const [percentageData, setPercentageData] = useState({
        type: 'in',
        percentage: 0
    })

    const theme = useTheme();
    const navigation = useNavigation();

    

    useFocusEffect(useCallback(() => {

        (async() => {

            const data = await getAllMealForSectionlist();
            setSectionListData(data);
            setPercentageData(percentageCalc(data));

        })()

    }, []));

    return (
        <Container
            style={{ paddingHorizontal: 24 }}
        >
            <Header>
                <Logo source={require('@assets/logo.png')} />
                <Avatar source={require('@assets/avatar.png')} />
            </Header>

            <TouchableOpacity
                onPress={() => navigation.navigate('Statistic')}
            >
                <Card 
                    title={`${percentageData.percentage}%`}
                    text={
                        percentageData.type === 'in'
                        ? "das refeições dentro da dieta"
                        : "dar refeições fora da dieta"
                    } 
                    themeStyle={
                        percentageData.type === 'in'
                        ? "primary"
                        : "secondary"
                    }
                    showIcon
                />
            </TouchableOpacity>

            <Label>Refeições</Label>

            <ActionButton 
                title="Nova refeição"
                leftIcon={<Plus size={18} color={theme.COLOR.WHITE} />}
                variant='fill'
                onPress={() => navigation.navigate('NewMeal')}
            />

            <SectionList 
                sections={sectionListData ? sectionListData as any: []}
                keyExtractor={ (item) =>  String(item.id)}
                renderItem={ ({ item, section }) => (
                    <SectionListItem
                        hour={item.hour}
                        name={item.name}
                        inDiet={item.inDiet}
                        onPress={() => {
                            navigation.navigate('DetailMeal', {
                                date: section.title,
                                mealID: item.id
                            });
                        }}
                    />
                )}
                renderSectionHeader={ ({ section }) => (
                    <SectionListHeaderItem>
                        { section.title }
                    </SectionListHeaderItem>    
                )}
                showsVerticalScrollIndicator={false}
            />

        </Container>        
    )
}