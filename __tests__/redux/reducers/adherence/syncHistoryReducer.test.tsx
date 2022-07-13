import syncHistoryReducer from '../../../../src/redux/reducers/adherence/syncHistoryReducer';

describe('test sync history', () => {
  const result = syncHistoryReducer(undefined, {});
  it('should check for history syncing request', () => {
    const action = {
      type: 'SYNC_HISTORY',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = syncHistoryReducer(undefined, action);
  });
  it('should check for history syncing', () => {
    const action = {
      type: 'SUCCESS_SYNC_HISTORY',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = syncHistoryReducer(undefined, action);
  });
  it('should check for history syncing', () => {
    const action = {
      type: 'FAILED_SYNC_HISTORY',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = syncHistoryReducer(undefined, action);
  });
});
