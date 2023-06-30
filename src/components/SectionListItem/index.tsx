import { TouchableOpacityProps } from 'react-native';

import {
    SectionListItemContainer,
    SectionListItemHour,
    SectionListItemName,
    SectionListItemSeparator,
    SectionListItemIcon
} from './styles';

import { useTheme } from 'styled-components/native';

type SectionListItemType = TouchableOpacityProps & {
    hour: string,
    name: string,
    inDiet: boolean 
}

export function SectionListItem({ hour, name, inDiet, ...rest }: SectionListItemType) {

    const theme = useTheme();
    const bgColor = inDiet ? theme.COLOR.PRIMARY : theme.COLOR.SECONDARY;

    return(
        <SectionListItemContainer {...rest} >
            <SectionListItemHour>{ hour }</SectionListItemHour>
            <SectionListItemSeparator />
            <SectionListItemName>{ name }</SectionListItemName>
            <SectionListItemIcon style={{ backgroundColor: bgColor }}/>
        </SectionListItemContainer>
    )
}