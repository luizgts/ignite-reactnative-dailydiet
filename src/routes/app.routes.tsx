import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home';
import { Statistic } from '@screens/Statistic';
import { NewMeal } from '@screens/NewMeal';
import { NewMealFeedback } from '@screens/NewMealFeedback';
import { EditMeal } from '@screens/EditMeal';
import { DetailMeal } from '@screens/DetailMeal';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Home" 
                component={Home} 
            />
            <Screen 
                name="Statistic"
                component={Statistic}
            />
            <Screen
                name="DetailMeal"
                component={DetailMeal}
            />
            <Screen
                name="NewMeal"
                component={NewMeal}
            />
            <Screen
                name="NewMealFeedback"
                component={NewMealFeedback}
            />
            <Screen
                name="EditMeal"
                component={EditMeal}
            />
        </Navigator>
    )
}