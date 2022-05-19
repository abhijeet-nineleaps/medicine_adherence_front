/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/self-closing-comp */
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import MyComponent from '../adherence/components/Adherencehistory';
import CameraScreen from '../adherence/components/ClickSendimage';
import SendImageToCaretaker from '../adherence/components/SendImagetocaretaker';
import TodayPerformance from '../adherence/components/TodayPerformance';
import Addevent from '../alarm/components/Addevents';
import Reminder from '../alarm/components/Reminder';
import Searchcaretaker from '../caretaker/components/Searchcaretaker';
import Login from '../login/components/Googleoauth';
import Loginscreen from '../login/components/Loginscreen';
import Profile from '../profile/Profile';
import About from '../screens/Aboutapp';
import MedicineImages from '../patient/components/MedicineImages';
import OnboardingScreen from '../screens/Onboarding';
import ViewProfile from '../patient/components/Patientprofile';
import PatientReport from '../patient/components/PatientReport';
import DrawerNavigator from '../components/DrawerNavigator';
import UserMed from '../screens/UserMed';

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
        options={() => ({
          title: 'Send Image',
        })}></Stack.Screen>
      <Stack.Screen name="Loginscreen" component={Loginscreen}></Stack.Screen>
      <Stack.Screen
        name="Sentocaretaker"
        component={SendImageToCaretaker}
        options={() => ({
          title: 'Send Image',
        })}></Stack.Screen>
      <Stack.Screen
        name="About"
        component={About}
        options={() => ({
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
      <Stack.Screen
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#3743ab'},
        }}
        name="Images"
        component={MedicineImages}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Stackscreen;
