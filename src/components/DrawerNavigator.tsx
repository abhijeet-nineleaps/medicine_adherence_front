import React from 'react';
import CareTaker from '../caretaker/Caretaker';
import Caretakercomp from '../caretaker/components/Caretakercomp';
import Patientcomp from '../patient/Patient';
import CustomHeader from './customheader';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/Homescreen';
import Settings from '../screens/Settings';
import {
  faHome,
  faMedkit,
  faPerson,
  faUserNurse,
  faGear,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import CameraScreen from '../adherence/components/ClickSendimage';
import {TouchableOpacity} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}: any) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerTitleStyle: {color: 'black'}}}
      drawerContent={props => <CustomHeader {...props} />}>
      <Drawer.Screen
        name="Home"
        options={{
          headerRightContainerStyle: {marginRight: 15},
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                <FontAwesomeIcon
                  size={30}
                  icon={faCamera as IconProp}
                  color="#3743ab"
                />
              </TouchableOpacity>
            );
          },
          drawerIcon: () => (
            <FontAwesomeIcon
              color="white"
              size={22}
              icon={faHome as IconProp}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Medicines"
        component={CareTaker}
        options={{
          title: 'Medicines',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          headerShown: true,
          drawerIcon: () => (
            <FontAwesomeIcon
              color="white"
              size={22}
              icon={faMedkit as IconProp}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Patient"
        component={Patientcomp}
        options={{
          title: 'My Patient',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: () => (
            <FontAwesomeIcon
              size={22}
              color="white"
              icon={faPerson as IconProp}
            />
          ),
        }}
      />
      <Drawer.Screen
        options={{
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: () => (
            <FontAwesomeIcon
              size={22}
              color="white"
              icon={faUserNurse as IconProp}
            />
          ),
        }}
        name="My Caretaker"
        navig={this.navigation}
        component={Caretakercomp}
      />

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: () => (
            <FontAwesomeIcon
              size={22}
              color="white"
              icon={faGear as IconProp}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Send Image"
        component={CameraScreen}
        options={{
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: () => (
            <FontAwesomeIcon
              size={22}
              color="white"
              icon={faCamera as IconProp}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
