import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchItem(action){
    try{
        const shelfItem = yield axios.get(`/api/shelf`)
        yield put ({type: "SET_ITEM", payload: shelfItem.data})
    } catch(error){
        console.log('error with the shelf get request', error)
    }
}

export default fetchItem 