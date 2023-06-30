export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined,
            Statistic: undefined,
            NewMeal: undefined,
            NewMealFeedback: { inDiet: boolean | null } | undefined,
            EditMeal: { date: string, mealID: string } | undefined,
            DetailMeal: { date: string, mealID: string } | undefined,
        }
    }
}