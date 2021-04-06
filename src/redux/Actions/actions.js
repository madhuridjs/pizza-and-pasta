import { allTypes } from "../constants/constants";

export const setRecipes = (recipes) => {
    return{
        type: allTypes.SET_RECIPES,
        payload: recipes,
    };
};

export const selectedRecipes = (recipe) => {
    return{
        type: allTypes.SELECTED_RECIPES,
        payload: recipe,
    };
};