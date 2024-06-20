import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addItem(action) {
    try {
       
const response = yield axios.post('/api/shelf', action.payload) // action.payload may need to be destructured with {} around action.payload
yield put({type: `ADD_ITEM_SUCCESS`, payload: response.data })
    } catch (error) {
        console.log('error with shelf POST request', error);
        yield put ({ type: `ADD_ITEM_FAILED`});
    }
}

function* addItemSaga() {
    yield takeLatest('ADD_ITEM_SUCCESS', addItem)
}


export default addItem