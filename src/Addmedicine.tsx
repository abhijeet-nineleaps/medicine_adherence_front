import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Avatar, ListItem} from 'react-native-elements';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Card} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

import {faClock, faTrash} from '@fortawesome/free-solid-svg-icons';

import SQLite from 'react-native-sqlite-storage';
import {useFocusEffect} from '@react-navigation/native';

const db = SQLite.openDatabase(
  {
    name: 'MedRemdb',
    location: 'default',
  },
  () => {
    console.log('opened');
  },
  error => {
    console.log(error);
  },
);

interface Props{
  navigation:any
}

const Addmedicine  = ({navigation}:Props) => {
  
  const [refresh, refeereshstate] = React.useState(false);

  const [characters, characterstate] = useState<any[]>([]);
  const [load, loadstate] = useState(false);
  const [logged, loggedstate] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      async function checkforlog() {
        if (await GoogleSignin.isSignedIn()) {
          loggedstate(true);
        } else {
          loggedstate(false);
        }
      }
      checkforlog();
      fetch_meds();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const checkformeds = async () => {
    return new Promise(function (resolve, reject) {
      var meds_array: any[] = [];

      db.transaction(async function (txn) {
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER, total_med_reminders INTEGER , current_count INTEGER)',
          [],
        );

        txn.executeSql(
          'SELECT * FROM `User_medicines`',
          [],
          function (tx, res) {
            for (let i = 0; i < res.rows.length; ++i) {
              meds_array.push(res.rows.item(i));
            }

            resolve(meds_array);
          },
        );
      });
    });
  };

  const fetch_meds = async () => {
    console.log('called');
    const meds_arr: any = await checkformeds();
    characterstate(meds_arr);

    loadstate(false);
  };

  const deleteitem = async (id: number) => {
    console.log(id);
    console.log('del');
    let med_del: any[] = [];
    db.transaction(function (txn: any) {
      txn.executeSql('DELETE FROM `User_medicines`  where user_id = ' + id);
      txn.executeSql('SELECT * FROM `User_medicines`', [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          med_del.push(res.rows.item(i));
        }

        console.log(med_del);
        characterstate(med_del);
      });
    });
  };

  const renderitem: React.FC = ({item}: any) => {
    return (
      <Card
        style={{
          borderRadius: 30,
          margin: 3,
          borderColor: 'lightgrey',
          elevation: 1,
          shadowColor: '#3743ab',
        }}>
        <View style={{marginBottom: 7}}>
          <ListItem style={{backgroundColor: 'white', height: 80}}>
            <ListItem.Content>
              <View style={{flexDirection: 'row'}}>
                <Avatar
                  rounded
                  size={50}
                  source={require('../assests/meddis.png')}></Avatar>
                <View style={{flexDirection: 'column', margin: 3}}>
                  <ListItem.Title style={{fontWeight: '600'}}>
                    {item.medicine_name}
                  </ListItem.Title>
                  <ListItem.Subtitle>{item.medicine_des}</ListItem.Subtitle>
                </View>
              </View>
            </ListItem.Content>

            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() =>
                navigation.navigate('Add Reminder', {id: item.user_id})
              }>
                
              <FontAwesomeIcon
                icon={faClock as IconProp}
                color={item.status === 0 ? '#3743ab' : '#4dd0e1'}
                size={24}></FontAwesomeIcon>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Delete it!', 'Sure you want delete it', [
                  {
                    text: 'Delete',
                    onPress: () => deleteitem(item.user_id),
                  },
                  {
                    text: 'Cancel',
                  },
                ]);
              }}>
              <FontAwesomeIcon
                icon={faTrash as IconProp}
                color="#3743ab"
                size={24}></FontAwesomeIcon>
            </TouchableOpacity>
          </ListItem>
        </View>
      </Card>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', height: '100%'}}>
      {characters.length === 0 ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../assests/nomeds.png')}
            resizeMode="center"></Image>
        </View>
      ) : (
        <FlatList
          data={characters}
          renderItem={renderitem}
          initialNumToRender={10}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={fetch_meds}></RefreshControl>
          }></FlatList>
      )}

      <View
        style={{
          width: '100%',
          position: 'absolute',
          alignItems: 'center',
          bottom: 10,
        
}}>
        <TouchableOpacity
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() =>
            navigation.getParent().navigate('Add Medicine', {
              id: '1234',
            })
          }>
          <LottieView
            source={require('../assests/animate/addicon.json')}
            autoPlay
            loop
            speed={2}
            style={{
              bottom: 3,
              width: 80,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 8,
            }}></LottieView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Addmedicine;
