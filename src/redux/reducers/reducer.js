import {allTypes} from '../constants/constants';

const initialState = {
    recipes: []
};
export const setRecipeReducer = (state= initialState,{type,payload}) => {

    switch(type) {
        case allTypes.SET_RECIPES:
            return{
                ...state, recipes: payload
            };
        default:
           return state;
        }
    };

