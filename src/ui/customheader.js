import ProfileHeader from "./Header";

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Divider, Image, Text } from "react-native-elements";
import { useFocusEffect } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSignIn,
  faSignOut,
  faRightToBracket,
  faArrowRightToBracket,
  
} from '@fortawesome/free-solid-svg-icons';
import { View } from "react-native";



const CustomHeader = (props) => {
  
  React.useEffect(() => {
    GoogleSignin.configure({
        webClientId: '526586885579-90t54t6rmkquqjct1819getnkstse41j.apps.googleusercontent.com'
    })
})
  const [loggedin, loggedinstate] = React.useState(true);
  async function getuser() {
    try {
      const  isllooged = await GoogleSignin.isSignedIn(); 
      console.log(isllooged)

      if (isllooged === true) {
        console.log(isllooged)
        loggedinstate(true)
        return;
      }

      loggedinstate(false)
    } catch (err) {

    }

  }
  useEffect(() => {

    const unsubscribe = props.navigation.addListener('focus', () => {

      getuser()

    });
    return unsubscribe;

  }, [props.navigation])
useFocusEffect(()=>{
  console.log('f')
  getuser()
})
  return (
    <>
      <DrawerContentScrollView style={{ height: '100%' }}>
        <TouchableOpacity style={{ marginBottom: 8 }} onPress={() => props.navigation.getParent().navigate('Profile')}>

          {
            <ProfileHeader></ProfileHeader>
          }

        </TouchableOpacity>
        <Divider style={{ marginBottom: 6 }}></Divider>
        <DrawerItemList {...props}></DrawerItemList>
       <Divider></Divider>
       <View style={{marginTop:60}}>
        {
          !loggedin ?
          <Button
          iconPosition='right'
          
          icon = {()=><FontAwesomeIcon color="white" icon={faRightToBracket}></FontAwesomeIcon>}
            title="Sign up"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
              backgroundColor: '#0d47a1',
              borderRadius: 5,
              justifyContent:'space-around'
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            containerStyle={{
              marginHorizontal: 50,
              height: 50,
              width: 200,
              marginVertical: 10,
            }}
            onPress={() => props.navigation.navigate('Login')}
          /> : <Button title="Logout"
          iconPosition='right'
          type='outline'
          icon={()=><FontAwesomeIcon color="black" icon={faSignOut}></FontAwesomeIcon>}
          buttonStyle={{
              borderRadius: 5,
              justifyContent:'space-around'
            }}
            titleStyle={{ fontWeight: '500', fontSize: 16 }}
            containerStyle={{
              marginHorizontal: 50,
              height: 50,
              width: 200,
              marginVertical: 10,
            }}
           onPress={async()=>{
                 await GoogleSignin.signOut();
                 loggedinstate(false)
          }}></Button>
        }
        {
          !loggedin ? <Button
          title="Log in"
          loading={false}
          iconPosition='left'
          
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: '#0d47a1',
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 50,
            height: 50,
            width: 200,
            marginVertical: 10,
          }}
          onPress={() => props.navigation.navigate('Loginscreen')}
        /> : <></>
        }
        </View>
      </DrawerContentScrollView>

    </>
  )

}

export default CustomHeader;