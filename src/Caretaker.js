import { Button, View } from "react-native";
import React from "react";
import Addmedicine from "./Addmedicine";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import UserMed from "./UserMed";
const Stack = createStackNavigator();


const CareTaker = ({navigation}) =>{
    return (
         
        <Stack.Navigator >
<Stack.Screen name="Addmedicine" component={Addmedicine}></Stack.Screen>
<Stack.Screen name="UserMed" component={UserMed}></Stack.Screen>
</Stack.Navigator>



    )
}

export default CareTaker;