import {spawn} from 'redux-saga/effects';
import caretakerSaga from './Caretakersaga';

function* rootsaga() {
  yield spawn(caretakerSaga);
}

export default rootsaga;
