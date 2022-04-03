import React, {useEffect} from 'react';
import {Button, Image, Text} from 'react-native-elements';
import Pushnotification from '../alarm/Pushnotificationconfig';
import CareTaker from '../Caretaker';
import Caretakercomp from '../caretaker/Caretakercomp';
import Patientcomp from '../Patient';
import CustomHeader from './customheader';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/Homescreen';
import Settings from '../screens/Settings';
import {
  faHome,
  faMedkit,
  faPerson,
  faUserNurse,
  faScrewdriver,
  faGear,faBell, faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import CameraScreen from '../adherence/ClickSendimage';


const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation} : any) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerTitleStyle:{color:'black'}}}
      drawerContent={props => <CustomHeader {...props}></CustomHeader>}>
      <Drawer.Screen
        name="Home"
        options={{
          
          drawerIcon: () => (
            <FontAwesomeIcon
              color="black"
              size={22}
              icon={faHome as IconProp}></FontAwesomeIcon>
          ),
        }}
        component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen
        name="Medicines"
        component={CareTaker}
        options={{
          title: 'Medicines',
          headerShown: true,
          headerRight: () => {
            return (
              <Button
                titleStyle={{fontWeight: '400', fontSize: 13}}
                title="Saved Reminders"
                buttonStyle={{
                  backgroundColor: '#3743ab',
                  marginRight: 10,
                  borderRadius: 30,
                }}
                onPress={() => navigation.navigate('Events')}
                style={{fontSize: 10}}></Button>
            );
          },
          drawerIcon: () => (
            <FontAwesomeIcon size={22} icon={faMedkit as IconProp}></FontAwesomeIcon>
          ),
        }}
      />
      <Drawer.Screen
        name="Patient"
        component={Patientcomp}
        options={{
          title: 'My Patient',
          drawerIcon: () => (
            <FontAwesomeIcon size={22} icon={faPerson as IconProp}></FontAwesomeIcon>
          ),
        }}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <FontAwesomeIcon size={22} icon={faUserNurse as IconProp}></FontAwesomeIcon>
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
          drawerIcon: () => (
            <FontAwesomeIcon size={22} icon={faGear as IconProp}></FontAwesomeIcon>
          ),
        }}></Drawer.Screen>
       <Drawer.Screen
        name="Send Image"
        component={CameraScreen}
        options={{
          drawerIcon: () => (
            <FontAwesomeIcon size={22} icon={faGear as IconProp}></FontAwesomeIcon>
          ),
        }}></Drawer.Screen>
     
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
