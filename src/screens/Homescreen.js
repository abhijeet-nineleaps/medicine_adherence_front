import React, { useState } from "react"
import SearchBar from "react-native-dynamic-search-bar";
import LottieView from 'lottie-react-native';

import {StatusBar, View, 
     
    } from 'react-native'
    import {
        faHome,
        faKitMedical,
        faReceipt,faPercentage,faArrowRight
      } from '@fortawesome/free-solid-svg-icons';
      import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
      import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
      import BubbleTabBar, {
        IBubbleTabConfig,
        IIconRenderer,
      } from 'react-native-bubble-tabbar';
import Medicineadherence from "./Medicineadherence";
import Addmedicine from "../Addmedicine";
import Doctercomp from "./Docterscomp";
import Profile from "../profile/Profile";
import { Button } from "react-native-elements";
import { useFocusEffect } from "@react-navigation/native";

      const tabs = [
        {
          activeColor: 'white',
          activeBackgroundColor: '#3743ab',
          activeIcon: faHome,
          inactiveColor:'black',

        },
        {
          activeColor: 'white',
          activeBackgroundColor: '#3743ab',
          activeIcon: faKitMedical,
          inactiveColor:'black',
        },
       
      ];

      const Tab = createBottomTabNavigator();

      const CustomTabBar = ({
        state, descriptors, navigation,
      }) => {
        return (
          <BubbleTabBar
            state={state}
            descriptors={descriptors}
            navigation={navigation}
            tabs={tabs}
            allowFontScaling={true}
            style={{width:'100%',justifyContent:'space-between',padding:7}}
            iconRenderer={fontAwesomeIconRenderer}
          />
        );
      };
      const fontAwesomeIconRenderer = ({ icon, color }) =>
      <FontAwesomeIcon
        icon={icon}
        color={color}
        size={25}
        
      />;
const  HomeScreen = ({navigation})=>{

  const [badge , badge_state] = React.useState(0);
   
return(
    <View style={{backgroundColor:'white',height:'100%'}}>
     <StatusBar backgroundColor='#3743ab' style={{}}/>

 <Tab.Navigator 

      
       screenOptions={({ route }) => ({
         tabBarStyle:{height:60},
      tabBarInactiveTintColor: "#555",
      tabBarInactiveBackgroundColor:'white',
      tabBarActiveBackgroundColor:'#e3f2fd',
      
      tabBarActiveTintColor:'#bbdefb',
      tabBarLabelStyle: {
        fontSize: 16,
        color:'black',
        
      }
      
    })}  
      
    >
      <Tab.Screen name="Medicine"  key={2}
      options={{headerShown:false,
      tabBarIcon:()=>(<LottieView style={{width:40,height:40}} source={require('../../assests/animate/med2.json')} autoPlay loop />)}}
       component={Addmedicine} />
   {/* <Tab.Screen name="Events" component={Doctercomp} options={{headerRight:()=>(<Button style={{width:120}} iconRight={()=><FontAwesomeIcon color="white" size={10} icon={faArrowRight}></FontAwesomeIcon>} buttonStyle={{backgroundColor:'#3743ab'}}
      onPress={()=>navigation.navigate('Events')} title="Add event"></Button>),tabBarIcon:()=>(<LottieView style={{width:40,height:40}}
     source={require('../../assests/animate/calen.json')} autoPlay loop>
    
   </LottieView>)}}></Tab.Screen> */}
   <Tab.Screen name="Report" key={1}     options={{headerShown:false,
      tabBarIcon:()=>(<LottieView style={{width:60,height:60}}  speed={0.8} source={require('../../assests/animate/heart.json')} autoPlay loop />)}}
       component={Medicineadherence} />
      <Tab.Screen  name="Profile"  key={2}
      options={{headerShown:false,
      tabBarIcon:()=>(<LottieView style={{width:50,height:50}} source={require('../../assests/animate/profile.json')} autoPlay loop />)}}
       component={Profile} />
       
    </Tab.Navigator>

    </View>
)
}

export default HomeScreen;
