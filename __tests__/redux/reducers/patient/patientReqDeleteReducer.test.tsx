import patientReqDeleteReducer from '../../../../src/redux/reducers/patient/patientReqDeleteReducer';

describe('test patient req delete', () => {
  const result = patientReqDeleteReducer(undefined, {});
  it('should check for patient req delete request', () => {
    const action = {
      type: 'DELETE_PATIENT_REQUEST',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = patientReqDeleteReducer(undefined, action);
  });
  it('should check for patient req delete success', () => {
    const action = {
      type: 'SUCCES_DELETE_PATIENT_REQUEST',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = patientReqDeleteReducer(undefined, action);
  });
  it('should check for patient req delete error', () => {
    const action = {
      type: 'FAILED_DELETE_PATIENT_REQUEST',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = patientReqDeleteReducer(undefined, action);
  });
});
