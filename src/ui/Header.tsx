/* eslint-disable react-native/no-inline-styles */
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileHeader: React.FC = () => {
  const [umg, imgstate] = React.useState('https://i.stack.imgur.com/l60Hf.png');
  const [name, namestate] = React.useState('');

  useFocusEffect(() => {
    async function getuser() {
      try {
        if (!(await GoogleSignin.isSignedIn())) {
          imgstate('https://i.stack.imgur.com/l60Hf.png');
          await AsyncStorage.getItem('user_id');
          let username = await AsyncStorage.getItem('user_name');
          if (username !== null) {
            username = '';
          }
          namestate(username);
          return;
        }
        const user = await GoogleSignin.getCurrentUser();

        // console.log(user);
        imgstate(user.user.photo);
        namestate(user.user.name);
      } catch (err) {}
    }
    getuser();
  });

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        marginBottom: 20,
      }}>
      <Image
        source={{
          uri: umg,
        }}
        style={{width: 100, height: 100, borderRadius: 70, marginBottom: 9}}
      />
      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
          {name}
        </Text>
        <Text style={{fontWeight: 'bold', color: '#2196f3'}}>
          {'View and edit profile'}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
