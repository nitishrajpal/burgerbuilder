import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* purchaseBurgerSaga(action){
    yield put(actions.purchaseBurgerStart());
    try{
        var response = yield axios.post('/orders.json?auth=' + action.token, action.orderData)
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
    }
    catch(error){
        yield put(action.purchaseBurgerFail(error));
    }
            
}