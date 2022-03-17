import { Button, View,Text } from "react-native";
import React from "react";
import Addmedicine from "./Addmedicine";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import UserMed from "./UserMed";
const Stack = createStackNavigator();


const CareTaker = ({ navigation }) => {


    return (

        <Stack.Navigator initialRouteName="Addmedicine">
            <Stack.Screen name="Addmedicine" component={Addmedicine}
             options={{headerShown:false,headerRight:()=>{
                 return (
                     <Text onPress={()=>navigation.getParent().navigate('Events')}>Click</Text>
                 )
             }}}></Stack.Screen>
            <Stack.Screen name="UserMed" component={UserMed} options={{headerShown:true}}></Stack.Screen>
        </Stack.Navigator>
  
    )

}

export default CareTaker;