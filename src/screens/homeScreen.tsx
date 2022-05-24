/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';

import {Animated, StatusBar, View} from 'react-native';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

import Medicineadherence from '../adherence/components/medicineAdherence';
import Addmedicine from './addMedicine';
import Profile from '../profile/profile';
import styles from './screenStyles/homeScreenStyles';


const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3743ab" />

      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {height: 60},
          tabBarInactiveTintColor: '#555',
          tabBarInactiveBackgroundColor: 'white',
          tabBarActiveBackgroundColor: '#e3f2fd',

          headerRight: () => (
            <FontAwesomeIcon
              color="black"
              size={40}
              icon={faCamera as IconProp}></FontAwesomeIcon>
          ),
          tabBarActiveTintColor: '#bbdefb',
          tabBarLabelStyle: {
            fontSize: 16,
            color: 'black',
          },
        })}>
        <Tab.Screen
          name="Report"
          key={1}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <LottieView
                style={styles.report}
                speed={0.8}
                source={require('../../assests/animate/heart.json')}
                progress={progress}
              />
            ),
          }}
          component={Medicineadherence}
        />
        <Tab.Screen
          name="Medicine"
          key={2}
          options={{
            headerShown: false,
            headerRight: () => (
              <FontAwesomeIcon
                color="black"
                size={40}
                icon={faCamera as IconProp}></FontAwesomeIcon>
            ),
            tabBarIcon: () => (
              <LottieView
                style={styles.medicine}
                source={require('../../assests/animate/med2.json')}
                progress={progress}
              />
            ),
          }}
          component={Addmedicine}
        />
        <Tab.Screen
          name="Profile"
          key={2}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <LottieView
                style={styles.profile}
                source={require('../../assests/animate/profile.json')}
                progress={progress}
              />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;
