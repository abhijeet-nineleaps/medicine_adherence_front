import {createStore, applyMiddleware} from 'redux';
import RootReducer from './redux/reducers/RootReducer';
import createSagaMiddleware from 'redux-saga';
import rootsaga from './redux/sagas/Rootsaga';

const sagamiddleware = createSagaMiddleware();

const store = createStore(RootReducer, {}, applyMiddleware(sagamiddleware));

sagamiddleware.run(rootsaga);

export default store;
