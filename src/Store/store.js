import {createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootreducer from './Reducer'
import rootsaga from './sagas'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootsaga);

export default store;
