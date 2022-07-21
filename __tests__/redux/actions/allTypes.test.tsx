import Types from '../../../src/redux/actions/allTypes';

describe('Action types test', () => {
    describe('Caretaker types', () => {  it('should check for caretaker types ', () => {
        expect(Types.GET_CARETAKERS).toEqual('SEND_REQUEST_TO_GET_CARETAKERS_REQUEST');
    });
    it('should check for caretaker types success', () => {
        expect(Types.Success_CareTAKER_REQUEST).toEqual('SEND_REQUEST_TO_GET_CARETAKERS_REQUEST_SUCCESS');
    });
    it('should check for caretaker types failed', () => {
        expect(Types.Failed_CareTAKER_REQUEST).toEqual('SEND_REQUEST_TO_GET_CARETAKERS_REQUEST_FAILED');
    }); 
});
    describe('Profile types', () => { 
        it('should check for profile types', () => {
            expect(Types.SAVE_PROFILE).toEqual('SEND_REQUEST_TO_SAVE_PROFILE_DETAILS');
        });
        it('should check for profile types success', () => {
            expect(Types.SUCCESS_PROFILE).toEqual('SEND_REQUEST_TO_SAVE_PROFILE_SUCCESS');
        });
        it('should check for profile types failed', () => {
            expect(Types.FAILED_PROFILE).toEqual('SEND_REQUEST_TO_SAVE_PROFILE_FAILED');
        });
    });
     describe('Patient request types', () => { 
        it('should check for patient request types', () => {
            expect(Types.GET_PATIENT_REQUEST).toEqual('SEND_REQUEST_TO_GET_PATIENT_REQUEST');
        });
        it('should check for patient request types success', () => {
            expect(Types.SUCCES_PATIENT_REQUEST).toEqual('SEND_REQUEST_TO_GET_PATIENT_REQUEST_SUCCESS');
        });
        it('should check for patient request types failed', () => {
            expect(Types.FAILED_PATIENT_REQUEST).toEqual('SEND_REQUEST_TO_GET_PATIENT_REQUEST_FAILED');
        });
        
    });
   
 });