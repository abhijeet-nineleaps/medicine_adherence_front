import { Alert, Button,View } from "react-native"
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Settings from "./Settings";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Mypatient from "./patient/Mypatients";
import Patientrequest from "./patient/Patientrequest";


const Tab = createBottomTabNavigator();
 const Patientcomp = () => {

    const clicked = () =>{
        Alert.alert("No patient found");
    }

 return (

    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#f5610a",
      tabBarInactiveTintColor: "#555",
      tabBarLabelStyle: {
        fontSize: 16,
      }})}
    >

      <Tab.Screen name="MyPatients"  component={Mypatient} options={{headerShown:false}}/>
      <Tab.Screen name="Patients requests" component={Patientrequest} options={{headerShown:false}}/>

    </Tab.Navigator>
 )


}

export default Patientcomp;