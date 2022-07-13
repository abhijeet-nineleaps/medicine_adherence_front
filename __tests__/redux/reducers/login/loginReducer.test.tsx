import loginReducer from '../../../../src/redux/reducers/login/loginReducer';

describe('test login', () => {
  const result = loginReducer(undefined, {});
  it('should check for login request', () => {
    const action = {
      type: 'LOGIN_REQUEST',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = loginReducer(undefined, action);
  });
  it('should check for login success', () => {
    const action = {
      type: 'SUCCESS_LOGIN',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = loginReducer(undefined, action);
  });
  it('should check for login error', () => {
    const action = {
      type: 'ERROR_LOGIN',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = loginReducer(undefined, action);
  });
});
