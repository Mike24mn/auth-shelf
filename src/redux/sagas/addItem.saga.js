import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addItem(action) {
    try {
        const response = yield axios.post('/api/shelf', action.payload);
        yield put({ type: 'ADD_ITEM_SUCCESS', payload: response.data });
        console.log('addItem saga completed');
    } catch (error) {
        console.error('Error with shelf POST request', error);
        yield put({ type: 'ADD_ITEM_FAILED' });
    }
}

function* addItemSaga() {
    yield takeLatest('ADD_ITEM', addItem); 
}

export default addItemSaga;
