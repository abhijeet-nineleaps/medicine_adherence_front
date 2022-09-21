import React from 'react';
import renderer from 'react-test-renderer';
import enableHooks from "jest-react-hooks-shallow";
import ViewProfile from '../../../src/screens/patient/PatientProfile';
import { useDispatch, useSelector } from 'react-redux';
enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
}));

const props = {
  navigation: {
    addListener: jest.fn(),
    navigate: jest.fn(),
  },
};
const findNodeByTestId = (wrapper, testID) => {
  return wrapper.findWhere((node) => {
    return node.prop("testID") === testID;
  });
};
describe('Click send image', () => {
  beforeEach(()=>{
    useDispatchMock.mockImplementation(()=>()=>{})
    useSelectorMock.mockImplementation((selector)=>selector(mockStore))
})
afterEach(()=>{
    useDispatchMock.mockClear()
    useSelectorMock.mockClear()
})
const useSelectorMock=useSelector
const useDispatchMock=useDispatch
const mockStore={
    data:null,
    loading:false,
    error:null,
}
  it('renders correctly', () => {
    const tree = renderer
      .create(<ViewProfile route={undefined} navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});