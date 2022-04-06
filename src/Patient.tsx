import React from 'react';
import Mypatient from './patient/Mypatients';
import Patientrequest from './patient/Patientrequest';
import {Tab, TabView} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUserFriends,
  faScrewdriver,
  faHospitalUser,
} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import { useFocusEffect } from '@react-navigation/native';
import { Alert } from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Patientcomp = ({navigation}) => {
  const [login, loginstate] = React.useState(false);

  const [index, setIndex] = React.useState(0);
  const Iconcomp1 = () =>  {
    return ( <FontAwesomeIcon
        style={{marginBottom: 6}}
        color="white"
        icon={faHospitalUser as IconProp}></FontAwesomeIcon>
    )
    }

useFocusEffect(() => {
    async function checkforlog() {
      const islogged = await GoogleSignin.isSignedIn();
      if (!islogged) {
        Alert.alert("Sign in first to use this feature","Click ok to proceed",[
          {
            text:"Ok",
            onPress:()=>{navigation.navigate('Login')},
          },
          {
            text:"Cancel",
            onPress:()=>{navigation.navigate('Home')},
          }
        ]);
      }
      console.log(islogged);
      loginstate(islogged);
    }

    checkforlog();
  });


    const Iconcomp2 = () =>  {
      return ( 
        <FontAwesomeIcon
          style={{marginBottom: 6}}
          color="white"
          icon={faUserFriends as IconProp}></FontAwesomeIcon>
      )
      
      }
  
  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        style={{backgroundColor: '#3743ab'}}
        variant="primary">
        <Tab.Item
          title="My Patients"
          containerStyle={{backgroundColor: '#3743ab'}}
          titleStyle={{fontSize: 12}}
          icon={Iconcomp1}
        />
        <Tab.Item
          title="Patient Request"
          titleStyle={{fontSize: 12}}
          containerStyle={{backgroundColor: '#3743ab'}}
          icon={Iconcomp2}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Mypatient navigation={navigation}></Mypatient>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Patientrequest></Patientrequest>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default Patientcomp;
