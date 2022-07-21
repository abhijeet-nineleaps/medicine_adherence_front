import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import combineReducers from '../../../src/redux/reducers/RootReducer';
import downloadPdfReducer from '../../../src/redux/reducers/adherence/downloadPdfReducer';
import {initialState as syncMedState} from '../../../src/redux/reducers/adherence/syncMedReducers';
import {initialState as getMedHistoryState} from '../../../src/redux/reducers/adherence/getMedHistoryReducer';
import {initialState as syncHistoryState} from '../../../src/redux/reducers/adherence/syncHistoryReducer';
import {initialState as CareTakerState} from '../../../src/redux/reducers/caretaker/CareTakerReducer';
import {initialState as emailCaretakerState} from '../../../src/redux/reducers/caretaker/emailCaretakerReducer';
import {initialState as reqcaretakerState} from '../../../src/redux/reducers/caretaker/reqCaretakerReducer';
import {initialState as sendImageState} from '../../../src/redux/reducers/caretaker/sendImageReducers';
import {initialState as loginState} from '../../../src/redux/reducers/login/loginReducer';
import {initialState as notifyPatientState} from '../../../src/redux/reducers/patient/notifyPatientReducer';
import {initialState as PatientProfileState} from '../../../src/redux/reducers/patient/PatientProfileReducer';
import {initialState as patientReqAcceptState} from '../../../src/redux/reducers/patient/patientReqAcceptReducer';
import {initialState as patientReqDeleteState} from '../../../src/redux/reducers/patient/patientReqDeleteReducer';
import {initialState as patientReqState} from '../../../src/redux/reducers/patient/patientReqReducers';
import {initialState as ProfileState} from '../../../src/redux/reducers/profile/ProfileReducer';
import {initialState as signupState} from '../../../src/redux/reducers/signup/signupReducer';
import {initialState as PatientState} from '../../../src/redux/reducers/patient/PatientReducer';
import {initialState as medImagesState} from '../../../src/redux/reducers/adherence/medImagesReducer';
//import {initialState as pdfState} from '../../../src/redux/reducers/adherence/downloadPdfReducer';


describe('Root Reducer Suite', () => {
  let store = createStore(combineReducers);
  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().downloadPdf).toEqual(downloadPdfReducer(undefined, {}));
  });
//   it('downloadPdfReducer loaded correctly', () => {
//     expect(store.getState().downloadPdf).toEqual(pdfState);
//   });
  it('medImagesReducer loaded correctly', () => {
    expect(store.getState().medImages).toEqual(medImagesState);
  });
  it('syncMedReducer loaded correctly', () => {
    expect(store.getState().syncMed).toEqual(syncMedState);
  });
  it('getMedHistoryReducer loaded correctly', () => {
    expect(store.getState().getMedHistory).toEqual(getMedHistoryState);
  });
  it('caretakerReducer loaded correctly', () => {
    expect(store.getState().syncHistory).toEqual(syncHistoryState);
  });
  it('medImagesReducer loaded correctly', () => {
    expect(store.getState().caretaker).toEqual(CareTakerState);
  });
  it('emailCaretakerReducer loaded correctly', () => {
    expect(store.getState().emailCaretaker).toEqual(emailCaretakerState);
  });
  it('reqCaretakerReducer loaded correctly', () => {
    expect(store.getState().reqCaretaker).toEqual(reqcaretakerState);
  });
  it('sendImageReducer loaded correctly', () => {
    expect(store.getState().sendImage).toEqual(sendImageState);
  });
  it('loginReducer loaded correctly', () => {
    expect(store.getState().login).toEqual(loginState);
  });
  it('notifyPatientReducer loaded correctly', () => {
    expect(store.getState().notifyPatient).toEqual(notifyPatientState);
  });
  it('patientProfileReducer loaded correctly', () => {
    expect(store.getState().patientProfile).toEqual(PatientProfileState);
  });
  it('patientReqAcceptReducer loaded correctly', () => {
    expect(store.getState().patientReqAccept).toEqual(patientReqAcceptState);
  });
  it('patientReqDeleteReducer loaded correctly', () => {
    expect(store.getState().patientReqDelete).toEqual(patientReqDeleteState);
  });
  it('patientReqReducer loaded correctly', () => {
    expect(store.getState().patientReq).toEqual(patientReqState);
  });
  it('profileReducer loaded correctly', () => {
    expect(store.getState().profile).toEqual(ProfileState);
  });
  it('signupReducer loaded correctly', () => {
    expect(store.getState().signup).toEqual(signupState);
  });
  it('patientReducer loaded correctly', () => {
    expect(store.getState().patient).toEqual(PatientState);
  });
});
