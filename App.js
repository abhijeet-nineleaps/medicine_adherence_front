/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import { NavigationContainer, useFocusEffect } from '@react-navigation/native';

import Profile from './src/profile/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import UserMed from './src/UserMed';
import Login from './src/login/Googleoauth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Reminder from './src/alarm/Reminder';
import Searchcaretaker from './src/caretaker/Searchcaretaker';
import ViewPatient from './src/patient/ViewPatientdata';
import Addevent from './src/alarm/Addevents';
import Pushnotification from './src/alarm/Pushnotificationconfig';
import Loginscreen from './src/login/Loginscreen';
import ProfileHeader from './src/ui/Header';
import DrawerNavigator from './src/ui/DrawerNavigator';
import HomeScreen from './src/screens/Homescreen';
import OnboardingScreen from './src/screens/Onboarding';
import Doctercomp from './src/screens/Docterscomp';
import { Button } from 'react-native-elements';
import ViewProfile from './src/screens/Patientprofile';
import { Title } from 'react-native-paper';
import TodayPerformance from './src/adherence/TodayPerformance';


const Stack = createStackNavigator();


const Gettoprofile = ({ navigation }) => {

  navigation.getParent().navigate('Profile')

  return (
    <></>
  )

}

const App = () => {


  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Welcome' options={{headerShown:false}} component={OnboardingScreen}></Stack.Screen>
        <Stack.Screen name='Drawer' options={{ headerShown: false }} component={DrawerNavigator}></Stack.Screen>
        <Stack.Screen name='UserMeds' options={{ headerShown: true }}
        options={{headerTintColor:'white',headerStyle:{backgroundColor:'#3743ab'},headerTitleStyle:{color:'white',fontSize:20}}}
         component={UserMed}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Profile' 
        options={{headerRight:()=>(<Title onPress={()=>{saveuserdetails()}} style={{color:'white',marginRight:10}}>Save</Title>),headerTintColor:'white',headerStyle:{backgroundColor:'#3743ab'},headerTitleStyle:{color:'white',fontSize:20}}}
         component={Profile}></Stack.Screen>
        <Stack.Screen name='Searchcaretaker'
        options={{headerTintColor:'white',headerStyle:{backgroundColor:'#3743ab'},headerTitleStyle:{color:'white',fontSize:20}}}
         component={Searchcaretaker}></Stack.Screen>
        <Stack.Screen name='Viewpatient'
        options={{headerTintColor:'white',headerStyle:{backgroundColor:'#3743ab'},headerTitleStyle:{color:'white',fontSize:20}}}
         component={ViewPatient}></Stack.Screen>
        <Stack.Screen name='Add Reminder'
        options={{headerTintColor:'white',headerStyle:{backgroundColor:'#3743ab'},headerTitleStyle:{color:'white',fontSize:20}}}
         component={Reminder} 
        options={{headerStyle:{backgroundColor:'#3743ab'},headerTitleStyle:{color:'white',fontSize:20}}}></Stack.Screen>
        <Stack.Screen name='Events'
        options={{headerStyle:{backgroundColor:'#3743ab'},headerTitleStyle:{color:'white',fontSize:20}}}
         component={Addevent}></Stack.Screen>
        <Stack.Screen name='Loginscreen' component={Loginscreen}></Stack.Screen>
        <Stack.Screen name='Docter' component={Doctercomp} options={({ navigation }) => ({
    title: 'Docter secion',
    headerRight: () => (
      <Button title="Add event" onPress={() => navigation.navigate('Events')} />
    ),
  })}></Stack.Screen>
      <Stack.Screen options={{headerTintColor:'white',headerStyle:{backgroundColor:'#3743ab'}}} name='Patientprofile' component={ViewProfile}></Stack.Screen>
      <Stack.Screen options={{headerTintColor:'white',headerStyle:{backgroundColor:'#3743ab'}}} name='Todayperformance' component={TodayPerformance}></Stack.Screen>
      </Stack.Navigator>
      {/* <DrawerNavigator></DrawerNavigator> */}
    </NavigationContainer>


  );
};


export default App;
