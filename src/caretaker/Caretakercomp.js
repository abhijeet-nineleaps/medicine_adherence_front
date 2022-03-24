import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Addcaretaker from "./Addcaretaker";
import React, { useEffect } from "react";
import CaretakerReq from "./Caretakerreq";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../login/Googleoauth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Alert } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tab ,TabView} from "react-native-elements";
import Searchcaretaker from "./Searchcaretaker";
import { faHome ,faMedkit , faPerson, faUserNurse,faUserFriends ,faScrewdriver} from '@fortawesome/free-solid-svg-icons'



export default function Caretakercomp({ navigation }) {

  
  const [index, setIndex] = React.useState(0);

  const [login, loginstate] = React.useState(false);

  useFocusEffect(() => {

    async function checkforlog() {

      const islogged = await GoogleSignin.isSignedIn();
      if(!islogged){
        Alert.alert("Signup first",)
      }
      console.log(islogged)
      loginstate(islogged);
    }

    checkforlog()

  })
  
  const Firstlogin = () => {

    return (
      <View style={{ backgroundColor: 'white', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login first to Add caretaker</Text>
      </View>
    )

  }
  return (

<>
<Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      style={{backgroundColor:'#3743ab'}}
      variant="primary"
    >
      <Tab.Item
        title="Caretakers"
        containerStyle={{backgroundColor:'#3743ab'}}
        titleStyle={{ fontSize: 12 }}
        icon={()=><FontAwesomeIcon style={{marginBottom:6}} color="white" icon={faUserNurse}></FontAwesomeIcon>}
      />
      <Tab.Item
        title="Caretakerrequest"
        titleStyle={{ fontSize: 12 }}
        containerStyle={{backgroundColor:'#3743ab'}}

        icon={()=><FontAwesomeIcon style={{marginBottom:6}} color="white" icon={faUserFriends}></FontAwesomeIcon>}      />
      
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item  style={{ backgroundColor: 'white', width: '100%' }}>
        <Addcaretaker navigation={navigation}></Addcaretaker>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
      <CaretakerReq></CaretakerReq>
      </TabView.Item>
     
    </TabView>








    </>
  )



}