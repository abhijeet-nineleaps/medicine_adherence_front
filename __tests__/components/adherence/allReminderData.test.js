import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import axios from '../../../src/repositories/apis/axios';
import toJson from 'enzyme-to-json';
import Allreminderdata from '../../../src/components/adherence/allReminderData';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn(),
}));

jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));

describe('Search Caretaker', () => {
  it('renders correctly', () => {
    let med_name="Paracetamol";
    const tree = shallow(<Allreminderdata {...med_name} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  describe("test querydata",()=>{
    it("test getusermeds",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            Allreminderdata(payload)
    })
  })
});