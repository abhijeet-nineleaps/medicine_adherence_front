import {spawn} from 'redux-saga/effects';
import caretakerSaga from './caretakerSaga';

function* rootsaga() {
  yield spawn(caretakerSaga);
  yield spawn();
}

export default rootsaga;
