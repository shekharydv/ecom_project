import { takeEvery, put } from 'redux-saga/effects';


const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
const ADD_TO_WISHLIST_SUCCESS = 'ADD_TO_WISHLIST_SUCCESS';

function* addToWishlistSaga(action) {
  try {
    
    yield put({ type: ADD_TO_WISHLIST_SUCCESS, payload: action.payload });
  } catch (error) {
    
  }
}

function* wishlistSaga() {
  yield takeEvery(ADD_TO_WISHLIST, addToWishlistSaga);
}

export default wishlistSaga;
