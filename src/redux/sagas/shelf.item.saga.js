import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';


function* fetchItem(){
    try{
        const shelfItem = yield axios.get(`/api/shelf`)
        yield put ({type: "SET_SHELF_ITEM", payload: shelfItem.data})
    } catch(error){
        console.log('error with the shelf get request', error)
    }
}

function* addItem(action) {
    try {
      yield call(axios.post, '/api/shelf', action.payload);
      yield put({ type: 'FETCH_ITEM' })
    } catch (error) {
      console.log('Error with the shelf post request', error);
    }
  }
  
  function* shelfSaga() {
    yield takeLatest('FETCH_ITEM', fetchItem);
    yield takeLatest('ADD_ITEM', addItem);
  }

export default shelfSaga