import sendImageReducers from '../../../../src/redux/reducers/caretaker/sendImageReducers';

describe('test requestsend image request', () => {
  const result = sendImageReducers(undefined, {});
  it('should check for send image request', () => {
    const action = {
      type: 'SEND_IMAGES',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = sendImageReducers(undefined, action);
  });
  it('should check for send image', () => {
    const action = {
      type: 'SUCCESS_SEND_IMAGES',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = sendImageReducers(undefined, action);
  });
  it('should check for send image', () => {
    const action = {
      type: 'FAILED_SEND_IMAGES',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = sendImageReducers(undefined, action);
  });
});
