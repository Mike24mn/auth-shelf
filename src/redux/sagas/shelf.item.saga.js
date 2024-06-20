import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchItem(){
    try{
        const shelfItem = yield axios.get(`/api/shelf`)
        yield put ({type: "SET_SHELF_ITEM", payload: shelfItem.data})
    } catch(error){
        console.log('error with the shelf get request', error)
    }
}


function* shelfSaga(){
    yield takeLatest('FETCH_ITEM',fetchItem)
}

export default shelfSaga 

