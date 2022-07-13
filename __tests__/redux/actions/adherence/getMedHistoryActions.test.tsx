import {getMedHistoryActions} from '../../../../src/redux/actions/adherence/getMedHistoryActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test medImageActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'globalmedId';
  it('test syncMeds', () => {
    expect(getMedHistoryActions.getMedHistory(string)).toEqual({
      type: Types.GET_MED_HISTORY,
      payload: string,
    });
  });
  it('test syncMedSuccess', () => {
    expect(getMedHistoryActions.medHistorySuccess(data)).toEqual({
      type: Types.GET_MED_HISTORY_SUCCESS,
      payload: data,
    });
  });
  it('test syncMedsError', () => {
    expect(getMedHistoryActions.medHistoryError(err)).toEqual({
      type: Types.GET_MED_HISTORY_FAILED,
      payload: err,
    });
  });
});
