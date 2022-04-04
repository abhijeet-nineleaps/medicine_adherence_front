import {StyleSheet, Alert, Linking,Share, View} from 'react-native';
import React from 'react';
import SettingsList from 'react-native-settings-list';

interface Props{
  navigation : any
}

const Settings:React.FC<Props> = ({navigation} : Props) => {
 
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
        headerText="General"
        headerStyle={{color: 'gray', fontSize: 16}}
      />
      <SettingsList.Item
        hasNavArrow={false}
        title="About Medstick"
        titleStyle={{color: 'black', fontSize: 18}}
        onPress={() => navigation.navigate('About')}
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
          
      
    } catch (error) {
      
    }
        }}
      />
    </SettingsList>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
