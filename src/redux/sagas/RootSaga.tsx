import {spawn} from 'redux-saga/effects';
import caretakerSaga from './caretaker/CaretakerSaga';
import emailCaretakerSaga from './caretaker/emailCaretakerSaga';
import medImagesSaga from './medImagesSaga';
import notifyPatientSaga from './patient/notifyPatientSaga';
import patientReqAcceptSaga from './patient/patientReqAcceptSaga';
import patientReqDeleteSaga from './patient/patientReqDeleteSaga';
import patientReqSaga from './patient/patientReqSaga';
import PatientSaga from './patient/PatientSaga';
import reqCaretakerSaga from './caretaker/reqCaretakerSaga';
import sendImageSaga from './caretaker/sendImageSaga';

function* rootsaga() {
  yield spawn(caretakerSaga);
  yield spawn(PatientSaga);
  yield spawn(patientReqSaga);
  yield spawn(patientReqAcceptSaga);
  yield spawn(patientReqDeleteSaga);
  yield spawn(notifyPatientSaga);
  yield spawn(medImagesSaga);
  yield spawn(emailCaretakerSaga);
  yield spawn(reqCaretakerSaga);
  yield spawn(sendImageSaga);


}

export default rootsaga;
