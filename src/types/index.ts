import { SectionListData } from 'react-native';

export type ThemeStyleType = 'primary' | 'secondary' | 'light';

export type mealType = {
    id?: string, 
    hour: string, 
    name: string,
    desc: string,
    inDiet: boolean | null
}

export type recordType = {
    title: string,
    data: mealType[]
}

export type SectionType = SectionListData<
    mealType,
    { title: string }
>

export type paramsType = {
    date: string,
    mealID: string
}

export type percentageCalcType = {
    type: string,
    percentage: number,
    count: number,
    inDiet: number,
    outDiet: number,
    betterSequenceInDiet: number
}