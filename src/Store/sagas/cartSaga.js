import { takeEvery, put, call } from 'redux-saga/effects';


const ADD_TO_CART = 'ADD_TO_CART';
const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';


function* addToCartSaga(action) {
  try {
    
    yield put({ type: ADD_TO_CART_SUCCESS, payload: action.payload });
  } catch (error) {
    
  }
}


function* cartSaga() {
  yield takeEvery(ADD_TO_CART, addToCartSaga);
}

export default cartSaga;
