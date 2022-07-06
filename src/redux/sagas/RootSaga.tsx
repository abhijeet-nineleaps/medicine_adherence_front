import {spawn} from 'redux-saga/effects';
import caretakerSaga from './CaretakerSaga';
import getimagesagawatcher from './GetImagesSaga';
import PatientSaga from './PatientSaga';

function* rootsaga() {
  yield spawn(caretakerSaga);
  yield spawn(getimagesagawatcher);
  yield spawn(PatientSaga);
}

export default rootsaga;
