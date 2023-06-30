import { SectionType, recordType } from '@custonTypes/index';
import { percentageCalcType } from '@custonTypes/index';

export function percentageCalc(data: SectionType): percentageCalcType {
        
    let count = 0;
    let percentage = 0;
    let inDiet = 0;
    let outDiet = 0;
    let type = '';
    let betterSequenceInDiet = 0;

    const rawData = data as unknown as recordType[];

    rawData.forEach(section => {
        count += section.data.length;
        const mealsInDiet = [...section.data.filter(meal => meal.inDiet === true)].length;

        inDiet += mealsInDiet;

        betterSequenceInDiet = betterSequenceInDiet > mealsInDiet
        ? betterSequenceInDiet
        : mealsInDiet
    });

    outDiet = count - inDiet;

    if (inDiet >= outDiet) {
        type = 'in';
        percentage = inDiet*100/count;
    } else {
        type = 'out';
        percentage = outDiet*100/count;
    }

    return {
        type,
        percentage: Math.round(percentage),
        count,
        inDiet,
        outDiet,
        betterSequenceInDiet
    }
}
