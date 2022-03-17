import ProfileHeader from "./Header";

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button ,Divider , Image , Text} from "react-native-elements";


const CustomHeader = (props) => {
    const [loggedin, loggedinstate] = React.useState(true);
    async function getuser() {
      try {
        if (!await GoogleSignin.isSignedIn()) {
          loggedinstate(true)
          return;
        }
  
        loggedin(false)
      } catch (err) {
  
      }
  
    }
    useEffect(() => {
  
      const unsubscribe = props.navigation.addListener('focus', () => {
        
        getuser()
  
      });
      return unsubscribe;
  
    }, [props.navigation])
  
  
    return (
        <>
      <DrawerContentScrollView style={{height:'100%'}}>
        <TouchableOpacity style={{marginBottom:8}} onPress={() => props.navigation.getParent().navigate('Profile')}>
  
          {
            <ProfileHeader></ProfileHeader>
          }
  
        </TouchableOpacity>
        <Divider style={{marginBottom:6}}></Divider>
        <DrawerItemList {...props}></DrawerItemList>
        {
          loggedin &&
          <Button
            title="Sign up"
            loading={false}
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
            onPress={() => props.navigation.navigate('Login')}
          />
        }
        <Divider subHeader='OR' subHeaderStyle={{ textAlign: 'center' }}></Divider>
        <Button
          title="Log in"
          loading={false}
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
        />
        
      </DrawerContentScrollView>
     
      </>
    )
  
  }
  
  export default CustomHeader;