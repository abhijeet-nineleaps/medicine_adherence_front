import medImagesReducer from '../../../../src/redux/reducers/adherence/medImagesReducer';

describe('test med images', () => {
  const result = medImagesReducer(undefined, {});
  it('should check for med images request', () => {
    const action = {
      type: 'GET_MED_IMAGES',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = medImagesReducer(undefined, action);
  });
  it('should check for med images', () => {
    const action = {
      type: 'SUCCESS_MED_IMAGES',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = medImagesReducer(undefined, action);
  });
  it('should check for med images', () => {
    const action = {
      type: 'FAILED_MED_IMAGES',
      payload: '[]',
    };
    const expectedState = {
      data: action.payload,
    };
    const result = medImagesReducer(undefined, action);
  });
});
