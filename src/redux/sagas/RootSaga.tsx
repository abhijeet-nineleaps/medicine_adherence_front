import {spawn} from 'redux-saga/effects';
import syncMedSaga from './adherence/syncMedSaga';
import caretakerSaga from './caretaker/CaretakerSaga';
import emailCaretakerSaga from './caretaker/emailCaretakerSaga';
import reqCaretakerSaga from './caretaker/reqCaretakerSaga';
import sendImageSaga from './caretaker/sendImageSaga';
import notifyPatientSaga from './patient/notifyPatientSaga';
import patientReqAcceptSaga from './patient/patientReqAcceptSaga';
import patientReqDeleteSaga from './patient/patientReqDeleteSaga';
import patientReqSaga from './patient/patientReqSaga';
import PatientSaga from './patient/PatientSaga';
import ProfileSaga from './profile/ProfileSaga';


function* rootsaga() {
  yield spawn(syncMedSaga);
  yield spawn(caretakerSaga);
  yield spawn(emailCaretakerSaga);
  yield spawn(reqCaretakerSaga);
  yield spawn(sendImageSaga);
  yield spawn(notifyPatientSaga);
  yield spawn(patientReqAcceptSaga);
  yield spawn(patientReqDeleteSaga);
  yield spawn(patientReqSaga);
  yield spawn(PatientSaga);
  yield spawn(ProfileSaga);
  
}

export default rootsaga;
