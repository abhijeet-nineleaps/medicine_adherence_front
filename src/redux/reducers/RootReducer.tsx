import {combineReducers} from 'redux';
import CareTakerReducer from './caretaker/CareTakerReducer';
import PatientReducer from './patient/PatientReducer';
import ProfileReducer from './profile/ProfileReducer';
import patientReqReducer from './patient/patientReqReducers';
import patientReqAcceptReducer from './patient/patientReqAcceptReducer';
import patientReqDeleteReducer from './patient/patientReqDeleteReducer';
import notifyPatientReducer from './patient/notifyPatientReducer';
import medImagesReducer from './medImagesReducers';
import emailCaretakerReducer from './caretaker/emailCaretakerReducer';
import reqCaretakerReducer from './caretaker/reqCaretakerReducer';
import sendImagesReducer from './caretaker/sendImageReducers';
import syncMedReducer from './adherence/syncMedReducers';

export default combineReducers({
    CareTakerReducer, 
    PatientReducer,
    ProfileReducer,
    patientReqReducer,
    patientReqAcceptReducer,
    patientReqDeleteReducer,
    notifyPatientReducer,
    medImagesReducer,
    emailCaretakerReducer,
    reqCaretakerReducer,
    sendImagesReducer,
    syncMedReducer,
    
 });
