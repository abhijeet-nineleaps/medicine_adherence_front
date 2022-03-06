import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Addcaretaker from "./Addcaretaker";
import React from "react";
import CaretakerReq from "./Caretakerreq";

const Tab = createBottomTabNavigator();

export default function Caretakercomp(){

  return (
      <Tab.Navigator>
      
          <Tab.Screen name="Caretakers" component={Addcaretaker}></Tab.Screen>
          <Tab.Screen name="CaretakerRequest" component={CaretakerReq}></Tab.Screen>

      </Tab.Navigator>
  )


}