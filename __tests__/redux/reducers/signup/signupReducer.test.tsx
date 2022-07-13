import signupReducer from '../../../../src/redux/reducers/signup/signupReducer';

describe('test signup', () => {
  const result = signupReducer(undefined, {});
  it('should check for signup request', () => {
    const action = {
      type: 'SIGNUP_REQUEST',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = signupReducer(undefined, action);
  });
  it('should check for signup success', () => {
    const action = {
      type: 'SUCCESS_SIGNUP',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = signupReducer(undefined, action);
  });
  it('should check for signup error', () => {
    const action = {
      type: 'ERROR_SIGNUP',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = signupReducer(undefined, action);
  });
});
