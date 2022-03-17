import React, { useEffect } from 'react';
import { Image, Text } from 'react-native-elements';
import Pushnotification from '../alarm/Pushnotificationconfig';
import CareTaker from '../Caretaker';
import Caretakercomp from '../caretaker/Caretakercomp';
import Patientcomp from '../Patient';
import CustomHeader from './customheader';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../screens/Homescreen';
import Doctercomp from '../screens/Docterscomp';
import Pharmacies from '../screens/Pharmacies';
import Settings from '../screens/Settings';


const Drawer = createDrawerNavigator();



const DrawerNavigator = ({ navigation }) => {
    return (

        <Drawer.Navigator initialRouteName='Homescreen'
            drawerContent={(props) => <CustomHeader {...props}></CustomHeader>}>

            <Drawer.Screen name='Homescreen'
                options={{
                    drawerIcon: () => (<Image source={require('../../assests/home.jpg')}
                        style={{ width: 30, height: 30, borderRadius: 70 }}></Image>)
                }}
                component={HomeScreen}></Drawer.Screen>
            <Drawer.Screen name='Medicines' component={CareTaker}
                options={{
                    title: 'Medicines', headerShown: true, headerRight: () => {
                        return <Text onPress={() => navigation.navigate('Events')}
                            style={{ fontSize: 15, fontWeight: 'bold' }}>Saved Reminders</Text>

                    }
                    , drawerIcon: () => (<Image source={require('../../assests/caps.png')} style={{ width: 30, height: 30, borderRadius: 70 }}></Image>)
                }} />
            <Drawer.Screen name='Patient' component={Patientcomp}
                options={{ title: 'MyPatient', drawerIcon: () => ((<Image source={require('../../assests/patient.jpg')} 
                style={{ width: 30, height: 30, borderRadius: 70 }}></Image>)) }} />
            <Drawer.Screen options={{
                drawerIcon: () => ((<Image source={require('../../assests/caretaker.jpg')}
                    style={{ width: 30, height: 30, borderRadius: 70 }}></Image>))
            }} name='Caretaker'
                navig={this.navigation} component={Caretakercomp} />
            <Drawer.Screen name='Docters' component={Doctercomp} 
            options={{
                drawerIcon: () => ((<Image source={require('../../assests/docter.png')}
                    style={{ width: 30, height: 30, borderRadius: 70 }}></Image>))
            }}></Drawer.Screen>
            <Drawer.Screen name='Pharmacies' component={Pharmacies} 
            options={{
                drawerIcon: () => ((<Image source={require('../../assests/pharmacy.jpg')}
                    style={{ width: 30, height: 30, borderRadius: 70 }}></Image>))
            }}></Drawer.Screen>
            <Drawer.Screen name='Settings' component={Settings} 
            options={{
                drawerIcon: () => ((<Image source={require('../../assests/sett.jpg')}
                    style={{ width: 30, height: 30, borderRadius: 70 }}></Image>))
            }}></Drawer.Screen>
                        <Drawer.Screen name='Pushnotification' component={Pushnotification} options={{ title: "Notification" }}></Drawer.Screen>
         
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
