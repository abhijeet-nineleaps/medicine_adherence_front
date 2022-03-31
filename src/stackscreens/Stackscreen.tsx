import { createStackNavigator } from "@react-navigation/stack";

import React from "react"
import { Button } from "react-native-elements";
import { Title } from "react-native-paper";
import MyComponent from "../adherence/Adherencehistory";
import TodayPerformance from "../adherence/TodayPerformance";
import Addevent from "../alarm/Addevents";
import Reminder from "../alarm/Reminder";
import Searchcaretaker from "../caretaker/Searchcaretaker";
import Login from "../login/Googleoauth";
import Loginscreen from "../login/Loginscreen";
import Profile from "../profile/Profile";
import Doctercomp from "../screens/Docterscomp";
import OnboardingScreen from "../screens/Onboarding";
import ViewProfile from "../screens/Patientprofile";
import DrawerNavigator from "../ui/DrawerNavigator";
import UserMed from "../UserMed";



const Stack = createStackNavigator();


const Stackscreen:React.FC = () => {

     return(

        <Stack.Navigator>
      <Stack.Screen name='Welcome' options={{headerShown:false}} component={OnboardingScreen}></Stack.Screen>
        <Stack.Screen name='Drawer' options={{ headerShown: false }} component={DrawerNavigator}></Stack.Screen>
        <Stack.Screen name='UserMeds' options={{ headerShown: true }}
        options={{headerTintColor:'black',headerTitleStyle:{color:'black',fontSize:20}}}
         component={UserMed}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Profile' 
        options={{headerRight:()=>(<Title onPress={()=>{}} style={{color:'white',marginRight:10}}>Save</Title>),headerTintColor:'white',headerStyle:{backgroundColor:'#3743ab'},headerTitleStyle:{color:'white',fontSize:20}}}
         component={Profile}></Stack.Screen>
        <Stack.Screen name='Searchcaretaker'
        options={{headerTintColor:'white',headerTitleStyle:{color:'white',fontSize:20}}}
         component={Searchcaretaker}></Stack.Screen>
       
        <Stack.Screen name='Add Reminder'
        options={{headerTintColor:'black',headerTitleStyle:{color:'black',fontSize:20}}}
         component={Reminder} 
         options={{headerTitleStyle:{color:'black',fontSize:20}}}></Stack.Screen>
        <Stack.Screen name='Events'
        options={{headerTitleStyle:{color:'white',fontSize:20}}}
         component={Addevent}></Stack.Screen>
        <Stack.Screen name='Loginscreen' component={Loginscreen}></Stack.Screen>
        <Stack.Screen name='Docter' component={Doctercomp} options={({ navigation }) => ({
    title: 'Docter secion',
    headerRight: () => (
        <Button title="Add event" onPress={() => navigation.navigate('Events')} />
    ),
  })}></Stack.Screen>
      <Stack.Screen options={{headerTintColor:'black'}} name='Patientprofile' component={ViewProfile}></Stack.Screen>
      <Stack.Screen options={{headerTintColor:'black'}} name='Todayperformance' component={TodayPerformance}></Stack.Screen>
      <Stack.Screen options={{headerTintColor:'black'}} name='adherencehistory' component={MyComponent}></Stack.Screen>
      </Stack.Navigator>


     )


} 

export default Stackscreen;