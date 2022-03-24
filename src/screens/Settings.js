import {StyleSheet, Alert, Linking,Share, View} from 'react-native';
import React from 'react';
import SettingsList from 'react-native-settings-list';


const Settings = ({navigation}) => {
 
  return (
    <View style={{height:'100%',backgroundColor:'white'}}>
    <SettingsList borderColor="white" backgroundColor='white'>
      <SettingsList.Header
        headerText="Settings"
        headerStyle={{color: 'gray', fontSize: 16}}
      />
      <SettingsList.Item
        hasNavArrow={true}
        title="Notification settings"
        titleStyle={{color: 'black', fontSize: 18}}
        onPress={() => Linking.openSettings()}
      />
      <SettingsList.Header
        headerText="Reminder Settings"
        headerStyle={{color: 'gray', fontSize: 16}}
      />
      <SettingsList.Item
        hasNavArrow={false}
        hasSwitch={true}
        title="Reminder volume"
        titleStyle={{color: 'black', fontSize: 18}}
      />
      <SettingsList.Item
        hasNavArrow={false}
        hasSwitch={true}
        title="Vibrate"
        titleStyle={{color: 'black', fontSize: 18}}
      />
      <SettingsList.Item
        hasNavArrow={true}
        title="Snooze duration"
        titleStyle={{color: 'black', fontSize: 18}}
        onPress={() => Alert.alert('Coming soon')}
      />
      <SettingsList.Item
        hasNavArrow={true}
        title="Popup notification"
        titleStyle={{color: 'black', fontSize: 18}}
        onPress={() => Alert.alert('Coming soon')}
      />
      <SettingsList.Header
        headerText="General"
        headerStyle={{color: 'gray', fontSize: 16}}
      />
      <SettingsList.Item
        hasNavArrow={false}
        title="About Medstick"
        titleStyle={{color: 'black', fontSize: 18}}
        onPress={() => Alert.alert('Coming soon')}
      />
      <SettingsList.Item
        hasNavArrow={false}
        title="Share with friends and family"
        titleStyle={{color: 'black', fontSize: 18}}
        onPress={async() => {
            try{
           await Share.share({
               title:"Medstick",
               message:'Hello Nikunj invited to use Medstick '+'https://play.google.com/store/apps/details?id=com.animesafar.dinterviewkit',
               url:'https://cdn.discordapp.com/attachments/941592669933682699/955175698568462437/vinaylogo.png'
           })
           if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
        }}
      />
    </SettingsList>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
