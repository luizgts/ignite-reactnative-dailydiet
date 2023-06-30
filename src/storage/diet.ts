import AsyncStorage from '@react-native-async-storage/async-storage';
import * as dt from '@utils/date';
import { DIET_COLLECTION } from './constants';
import { mealType, recordType, SectionType } from '@custonTypes/index';
import { dateStringToSectionTitle } from '@utils/date';

function sort(result: recordType[]) {
    
    return result.sort((a, b) => {

        const aDt = dt.sectionTitleToDate(a.title);
        const bDt = dt.sectionTitleToDate(b.title);
    
        if (aDt < bDt) return -1; // sort [a, b]
        if (aDt > bDt) return 1; // sort [b, a]
        return 0;
    })
}

export async function clearDB() {
    try {
        console.log('Start clear');
        await AsyncStorage.clear();
        console.log('Clear complete');
    } catch (error) {
        console.log(`Clear error: ${error}`);
    }
}

export async function getAllMealForSectionlist() {
    try {
        const jsonData = await AsyncStorage.getItem(DIET_COLLECTION);
        const data = jsonData ? JSON.parse(jsonData) : [];
        return data as SectionType;
    } catch (error) {
        throw error
    }
}

export async function getAllMeal() {
    try {
        const jsonData = await AsyncStorage.getItem(DIET_COLLECTION);
        const data: recordType[] = jsonData ? JSON.parse(jsonData) : [];
        return data;
    } catch (error) {
        throw error
    }
}

export async function getMeal(date: string, id: string) {
    try {
        const sections = await getAllMeal();
        const filteredSection = sections.filter(record => record.title === date);
        const filteredMeal = filteredSection[0].data.filter(record => record.id === id);
        return filteredMeal[0];
    } catch (error) {
        throw error
    }
}

export async function deleteMeal(date: string, id: string) {
    try {
        const sections = await getAllMeal();
        
        for (let section of sections) {
            // Finding Section
            if (section.title === date) {
                // Remove Meal
                section.data = section.data.filter(meal => meal.id !== id);
                break;
            }
        }

        await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(sections));

    } catch (error) {
        throw error
    }
}

/**
 * Save a new meal
 * @param date - date in format "dd.mm.yy"
 * @param meal 
 */
export async function createMeal(date: string, meal: mealType) {

    try {
        date = dateStringToSectionTitle(date);
        meal = {...meal, id: String(Date.now())};

        const sections = await getAllMeal();
        const filteredSection = sections.filter(record => record.title === date);
    
        let dataToSave: recordType[];
        
        // Create a new Section with meal
        if(filteredSection.length <= 0){

            sections.push({
                title: date,
                data: [meal]
            })
    
        } else {
            // Create new meal in Section
            for (let section of sections) {
                if (section.title === date) {
                    section.data = [...section.data, meal];
                    break;
                }
            }
        
        }
    
        const data = sort(sections);
        data.reverse();
        AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(data));
        
    } catch (error) {
        throw error;
    }

}

export async function updateMeal(date: string, data: mealType) {

    try {
        const sections = await getAllMeal();
        
        for (let section of sections) {
            // Finding Section
            if (section.title === date) {
                
                section.data = section.data.map(meal => {
                    
                    // Finding Meal
                    if (meal.id === data.id) {
                        return data;
                    }

                    return meal;

                });
                break;
            }
        }

        await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(sections));

    } catch (error) {
        throw error
    }

}
