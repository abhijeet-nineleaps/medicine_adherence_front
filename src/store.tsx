import {createStore, applyMiddleware} from 'redux';
import RootReducer from './redux/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootsaga from './redux/sagas/rootSaga';

const sagamiddleware = createSagaMiddleware();

const store = createStore(RootReducer, {}, applyMiddleware(sagamiddleware));

sagamiddleware.run(rootsaga);

export default store;
