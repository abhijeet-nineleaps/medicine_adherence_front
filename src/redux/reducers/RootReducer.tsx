import {combineReducers} from 'redux';
import downloadPdfReducer from './adherence/downloadPdfReducer';
import getMedHistoryReducer from './adherence/getMedHistoryReducer';
import medImagesReducer from './adherence/medImagesReducer';
import syncHistoryReducer from './adherence/syncHistoryReducer';
import syncMedReducer from './adherence/syncMedReducers';
import CareTakerReducer from './caretaker/CareTakerReducer';
import emailCaretakerReducer from './caretaker/emailCaretakerReducer';
import reqcaretakerReducer from './caretaker/reqCaretakerReducer';
import sendImageReducers from './caretaker/sendImageReducers';
import loginReducer from './login/loginReducer';
import notifyPatientReducer from './patient/notifyPatientReducer';
import PatientProfileReducer from './patient/PatientProfileReducer';
import PatientReducer from './patient/PatientReducer';
import patientReqReducer from './patient/patientReqReducers';
import patientReqAcceptReducer from './patient/patientReqAcceptReducer';
import patientReqDeleteReducer from './patient/patientReqDeleteReducer';
import ProfileReducer from './profile/ProfileReducer';
import signupReducer from './signup/signupReducer';

export default combineReducers({
  downloadPdfReducer,
  medImagesReducer,
  syncMedReducer,
  getMedHistoryReducer,
  syncHistoryReducer,
  CareTakerReducer,
  emailCaretakerReducer,
  reqcaretakerReducer,
  sendImageReducers,
  loginReducer,
  notifyPatientReducer,
  PatientProfileReducer,
  PatientReducer,
  patientReqReducer,
  patientReqAcceptReducer,
  patientReqDeleteReducer,
  ProfileReducer,
  signupReducer,
});
