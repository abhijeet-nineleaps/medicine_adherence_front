import syncMedReducers from '../../../../src/redux/reducers/adherence/syncMedReducers';

describe('test sync meds', () => {
  const result = syncMedReducers(undefined, {});
  it('should check for sync meds request', () => {
    const action = {
      type: 'SYNC_MEDS',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = syncMedReducers(undefined, action);
  });
  it('should check for sync meds', () => {
    const action = {
      type: 'SUCCESS_SYNC_MEDS',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = syncMedReducers(undefined, action);
  });
  it('should check for sync meds', () => {
    const action = {
      type: 'FAILED_SYNC_MEDS',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = syncMedReducers(undefined, action);
  });
});
