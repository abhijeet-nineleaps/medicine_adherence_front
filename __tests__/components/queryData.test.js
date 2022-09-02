import React from "react";
import enableHooks from "jest-react-hooks-shallow";
import Enzyme, { shallow } from 'enzyme';
import queryData from "../../src/repositories/database/queryData";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";
import axios from "../../src/redux/apis/axios";
Enzyme.configure({ adapter: new Adapter() });
// enableHooks(jest);
// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// })); jest.mock("@react-native-google-signin/google-signin", () => ({
//   default: jest.fn(),
//   GoogleSignin: {
//     Configure: () => ({}),
//   }
// }));
// jest.mock("@react-navigation/native", () => ({
//   ...jest.requireActual("@react-navigation/native"),
//   useFocusEffect: jest.fn(),
//   useEffect: jest.fn(),
// }));
describe('queryData', () => {
  it("render component", () => {
    const wrapper = shallow(<queryData/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it("test Touchable Opacity", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<queryData function={mockFn} />);
   // wrapper.find("#touch").props().onPress();
    expect(mockFn).toHaveBeenCalled;
  })
describe("test querydata",()=>{
    it("test getusermeds",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            queryData.getusermeds(payload)
    })
})
});