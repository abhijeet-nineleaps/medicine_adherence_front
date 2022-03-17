import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Addcaretaker from "./Addcaretaker";
import React, { useEffect } from "react";
import CaretakerReq from "./Caretakerreq";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../login/Googleoauth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function Caretakercomp({ navigation }) {

  const [login, loginstate] = React.useState(false);

  useFocusEffect(() => {

    async function checkforlog() {

      const islogged = await GoogleSignin.isSignedIn();
      console.log(islogged)
      loginstate(islogged);
    }

    checkforlog()

  })
  const Firstlogin = () => {

    return (
      <View style={{ backgroundColor: 'white', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login first to Add caretaker</Text>
      </View>
    )

  }
  return (

    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#f5610a",
      tabBarInactiveTintColor: "#555",
      tabBarLabelStyle: {
        fontSize: 16,
      },
    })}>

      {login
        &&
        <>
          <Tab.Screen  name="Caretakers" st component={Addcaretaker}></Tab.Screen>
          <Tab.Screen name="CaretakerRequest" component={CaretakerReq}></Tab.Screen>
        </>
      }
      {
        !login && <Tab.Screen name="Login" options={{ headerShown: false }} component={Firstlogin}></Tab.Screen>
      }

    </Tab.Navigator>
  )



}