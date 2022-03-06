import { Alert, Button,View } from "react-native"
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Settings from "./Settings";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
 const Patientcomp = () => {

    const clicked = () =>{
        Alert.alert("No patient found");
    }

 return (

    <Tab.Navigator>

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
 )


}

export default Patientcomp;