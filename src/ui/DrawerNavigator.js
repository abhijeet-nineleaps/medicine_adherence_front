import React, {useEffect} from 'react';
import {Button, Image, Text} from 'react-native-elements';
import Pushnotification from '../alarm/Pushnotificationconfig';
import CareTaker from '../Caretaker';
import Caretakercomp from '../caretaker/Caretakercomp';
import Patientcomp from '../Patient';
import CustomHeader from './customheader';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/Homescreen';
import Doctercomp from '../screens/Docterscomp';
import Pharmacies from '../screens/Pharmacies';
import Settings from '../screens/Settings';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  faHome,
  faMedkit,
  faPerson,
  faUserNurse,
  faScrewdriver,
  faGear,faBell
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
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
              icon={faHome}></FontAwesomeIcon>
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
            <FontAwesomeIcon size={22} icon={faMedkit}></FontAwesomeIcon>
          ),
        }}
      />
      <Drawer.Screen
        name="Patient"
        component={Patientcomp}
        options={{
          title: 'MyPatient',
          drawerIcon: () => (
            <FontAwesomeIcon size={22} icon={faPerson}></FontAwesomeIcon>
          ),
        }}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <FontAwesomeIcon size={22} icon={faUserNurse}></FontAwesomeIcon>
          ),
        }}
        name="Caretaker"
        navig={this.navigation}
        component={Caretakercomp}
      />

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: () => (
            <FontAwesomeIcon size={22} icon={faGear}></FontAwesomeIcon>
          ),
        }}></Drawer.Screen>
      <Drawer.Screen
        name="Pushnotification"
        component={Pushnotification}

        options={{title: 'Notification',drawerIcon: () => (
            <FontAwesomeIcon size={22} icon={faBell}></FontAwesomeIcon>
          ),}}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
