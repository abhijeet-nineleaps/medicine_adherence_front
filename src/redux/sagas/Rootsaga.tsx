import {spawn} from 'redux-saga/effects';
import caretakerSaga from './Caretakersaga';

function* rootsaga() {
  yield spawn(caretakerSaga);
  yield spawn();
}

export default rootsaga;
