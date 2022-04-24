/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/self-closing-comp */
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import MyComponent from '../adherence/Adherencehistory';
import CameraScreen from '../adherence/ClickSendimage';
import SendImageToCaretaker from '../adherence/SendImagetocaretaker';
import TodayPerformance from '../adherence/TodayPerformance';
import Addevent from '../alarm/Addevents';
import Reminder from '../alarm/Reminder';
import Searchcaretaker from '../caretaker/Searchcaretaker';
import Login from '../login/Googleoauth';
import Loginscreen from '../login/Loginscreen';
import Profile from '../profile/Profile';
import About from '../screens/Aboutapp';
import OnboardingScreen from '../screens/Onboarding';
import ViewProfile from '../screens/Patientprofile';
import PatientReport from '../screens/PatientReport';
import DrawerNavigator from '../ui/DrawerNavigator';
import UserMed from '../UserMed';

const Stack = createStackNavigator();

const Stackscreen: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={{headerShown: false}}
        component={OnboardingScreen}></Stack.Screen>
      <Stack.Screen
        name="Drawer"
        options={{headerShown: false}}
        component={DrawerNavigator}></Stack.Screen>
      <Stack.Screen
        name="Add Medicine"
        options={{
          headerTintColor: 'white',
          headerTitleStyle: {color: 'white', fontSize: 20},
          headerStyle: {backgroundColor: '#3743ab'},
        }}
        component={UserMed}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen
        name="Profile"
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#3743ab'},
          headerTitleStyle: {color: 'white', fontSize: 20},
        }}
        component={Profile}></Stack.Screen>
      <Stack.Screen
        name="Search Caretaker"
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {color: 'black', fontSize: 20},
        }}
        component={Searchcaretaker}></Stack.Screen>

      <Stack.Screen
        name="Add Reminder"
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {color: 'black', fontSize: 20},
        }}
        component={Reminder}
        options={{
          headerTitleStyle: {color: 'black', fontSize: 20},
        }}></Stack.Screen>
      <Stack.Screen
        name="Events"
        options={{headerTitleStyle: {color: 'white', fontSize: 20}}}
        component={Addevent}></Stack.Screen>
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={({navigation}) => ({
          title: 'Send Image',
        })}></Stack.Screen>
      <Stack.Screen name="Loginscreen" component={Loginscreen}></Stack.Screen>
      <Stack.Screen
        name="Sentocaretaker"
        component={SendImageToCaretaker}
        options={({navigation}) => ({
          title: 'Send Image',
        })}></Stack.Screen>
      <Stack.Screen
        name="About"
        component={About}
        options={({navigation}) => ({
          title: 'About',
        })}></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor: 'black'}}
        name="Patient Profile"
        component={ViewProfile}></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor: 'black'}}
        name="Today Performance"
        component={TodayPerformance}></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor: 'black'}}
        name="Adherence History"
        component={MyComponent}></Stack.Screen>
      <Stack.Screen
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#3743ab'},
        }}
        name="Patient report"
        component={PatientReport}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Stackscreen;
