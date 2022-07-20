import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import MedicinehistoryList from "../../src/components/organisms/medicineHistoryList";
import ProfileHeader from "../../src/components/ProfileHeader";
import CustomHeader from "../../src/components/customHeader";

Enzyme.configure({adapter: new Adapter()});

it("test Personas Component", () => {
  expect.assertions(1);
  expect(toJson(shallow(<CustomHeader />))).toMatchSnapshot();
});