import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, Button, Divider, ListItem} from 'react-native-elements';
import SQLite from 'react-native-sqlite-2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Card} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faStopwatch,
  faRemove,
  faClock,
  faDeleteLeft,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const Addmedicine = ({navigation}) => {
  const [characters, characterstate] = useState([]);
  const [load, loadstate] = useState(false);
  const [logged, loggedstate] = useState(false);
  var meds_array = [];

  useEffect(() => {
    async function checkforlog() {
      if (await GoogleSignin.isSignedIn()) {
        loggedstate(true);
      } else {
        loggedstate(false);
      }
    }
    checkforlog();
  }, []);

  const checkformeds = async db => {
    return new Promise(function (resolve, reject) {
      db.transaction(async function (txn) {
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS User_meds(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name VARCHAR(230), medicine_des VARCHAR(200) , reminder INTEGER)',
          [],
        );
        txn.executeSql('SELECT * FROM `User_meds`', [], function (tx, res) {
          for (let i = 0; i < res.rows.length; ++i) {
            meds_array.push(res.rows.item(i));
          }

          resolve(meds_array);
        });
      });
    });
  };

  const fetch_meds = async () => {
    console.log('called');
    loadstate(true);
    const db = await SQLite.openDatabase('test.db', '1.0', '', 1);
    console.log(db);
    const meds_arr = await checkformeds(db);
    characterstate(meds_arr);
    console.log(meds_arr);

    loadstate(false);
    if (meds_array.length === 0) {
      console.log('info');
      loadstate(false);
    }
  };

  const deleteitem = async(id) => {
      console.log(id)
    console.log('del');
    const db = await SQLite.openDatabase('test.db', '1.0', '', 1);
    let med_del = [];
    db.transaction(function (txn) {
      txn.executeSql('DELETE FROM `User_meds`  where user_id = ' + id);
      txn.executeSql('SELECT * FROM `User_meds`', [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          med_del.push(res.rows.item(i));
        }

        console.log(med_del);
        characterstate(med_del);
      });
    });
  };

  const renderitem = ({item}) => {
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
                icon={faClock}
                color={item.reminder == 0 ? '#3743ab' : '#4caf50'}
                size={24}></FontAwesomeIcon>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteitem(item.user_id)}>
              <FontAwesomeIcon
                icon={faTrash}
                color="#3743ab"
                size={24}></FontAwesomeIcon>
            </TouchableOpacity>
          </ListItem>
        </View>
      </Card>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={characters}
        renderItem={renderitem}
        initialNumToRender={10}></FlatList>
      <View
        style={{width: '100%', alignItems: 'center', backgroundColor: 'white'}}>
        <TouchableOpacity
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() =>
            navigation.getParent().navigate('UserMeds', {
              id: '1234',
            })
          }>
          <LottieView
            source={require('../assests/animate/addicon.json')}
            autoPlay
            loop
            speed={2}
            style={{
              position: 'absolute',
              bottom: 10,
              width: 80,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 8,
            }}></LottieView>
        </TouchableOpacity>
      </View>

      <Button
        containerStyle={{
          bottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        loading={load}
        buttonStyle={{backgroundColor: '#3743ab', width: '70%'}}
        onPress={() => fetch_meds()}
        title="Fetch meds"></Button>
    </View>
  );
};

export default Addmedicine;
