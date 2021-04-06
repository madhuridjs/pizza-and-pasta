import { combineReducers } from 'redux';
import { setRecipeReducer } from '../reducers/reducer'

const reducers = combineReducers ({
    allRecipes: setRecipeReducer,
});

export default reducers;