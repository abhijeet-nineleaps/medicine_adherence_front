import getMedHistoryReducer from '../../../../src/redux/reducers/adherence/getMedHistoryReducer';

describe('test med history', () => {
  const result = getMedHistoryReducer(undefined, {});
  it('should check for med history request', () => {
    const action = {
      type: 'GET_MED_HISTORY',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = getMedHistoryReducer(undefined, action);
  });
  it('should check for med history', () => {
    const action = {
      type: 'GET_MED_HISTORY_SUCCESS',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = getMedHistoryReducer(undefined, action);
  });
  it('should check for med hidtory', () => {
    const action = {
      type: 'GET_MED_HISTORY_FAILED',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = getMedHistoryReducer(undefined, action);
  });
});
