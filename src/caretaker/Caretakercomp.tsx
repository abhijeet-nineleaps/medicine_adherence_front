import Addcaretaker from './Addcaretaker';
import React from 'react';
import CaretakerReq from './Caretakerreq';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useFocusEffect} from '@react-navigation/native';
import {Alert} from 'react-native';
import {Tab, TabView} from 'react-native-elements';
import {Caretaker_nurse , Userfriend} from './AllIcons';

export default function Caretakercomp({navigation}) {
  const [index, setIndex] = React.useState(0);

  const [login, loginstate] = React.useState(false);

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
          title="Caretakers"
          containerStyle={{backgroundColor: '#3743ab'}}
          titleStyle={{fontSize: 12}}
          icon={Caretaker_nurse()}
        />
        <Tab.Item
          title="Caretaker request"
          titleStyle={{fontSize: 12}}
          containerStyle={{backgroundColor: '#3743ab'}}
          icon={Userfriend()}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Addcaretaker navigation={navigation}></Addcaretaker>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <CaretakerReq></CaretakerReq>
        </TabView.Item>
      </TabView>
    </>
  );
}
