import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* initIngredientsSaga(action){
    try{
        var response = yield axios.get('https://react-my-burger-710a8-default-rtdb.firebaseio.com/ingredients.json') 
        yield put(actions.setIngredients(response.data));
    }
    catch(error){
        yield put(actions.fetchIngredientsFailed());
    }
}