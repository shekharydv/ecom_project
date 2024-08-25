import { all } from 'redux-saga/effects';
import cartSaga from './cartSaga';
import wishlistSaga from './wishlistSaga';


export default function* rootSaga() {
  yield all([
    cartSaga(),
    wishlistSaga(),
    
  ]);
}
