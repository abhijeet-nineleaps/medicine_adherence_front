/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Picker} from '@react-native-picker/picker';
import {Button, Divider} from 'react-native-elements';
import {Card} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import SQLite from 'react-native-sqlite-storage';
import Allreminderdata from './Allreminderdata';
import {LogBox} from 'react-native';
import Fetchdata from '../database/Querydata';
import RNFetchBlob from 'rn-fetch-blob';
import {API_URL} from '@env';

const {config, fs} = RNFetchBlob;

LogBox.ignoreLogs(['Require cycle:']);
LogBox.ignoreAllLogs();
var db: any;
interface singledate {
  not_taken: [];
  taken: [];
}

const Reminders: React.FC = ({item}: any) => {
  return (
    <>
      <View
        key={item.medicine_name + '1'}
        style={{
          padding: 4,
          marginBottom: 15,
        }}>
        <Card key={item.medicine_name + '2'} style={styles.dateday}>
          <View
            key={item.medicine_name + '3'}
            style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text key={item.medicine_name + '7'}>Date - {item.date}</Text>
          </View>
        </Card>
      </View>
      {item.key.not_taken.map((nti: any) => {
        return (
          <View
            key={item.medicine_name + '4'}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 12,
              marginLeft: 7,
            }}>
            <Text key={item.medicine_name + '5'}>{nti}</Text>
            <Text key={item.medicine_name + '6'} style={{color: 'red'}}>
              {' '}
              Not Taken
            </Text>
          </View>
        );
      })}
      {item.key.taken.map((tti: any) => {
        return (
          <View
            key={item.medicine_name + '12'}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 12,
            }}>
            <Text key={item.medicine_name + '22'}>{tti}</Text>
            <Text key={item.medicine_name + '23'} style={{color: 'green'}}>
              {' '}
              Taken
            </Text>
          </View>
        );
      })}
    </>
  );
};

const MyComponent: React.FC = () => {
  const [pickerValue, setPickerValue] = React.useState<String>('');
  const [allreminders, reminders_state] = React.useState<[]>([]);
  const [reminder_map_fetched_data, reminder_map_fetched_data_state] =
    React.useState<[]>([]);
  const [med_detail, med_detail_state] = React.useState<any>();
  const sheetRef = React.useRef(null);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: '#2c2c2fAA',
        padding: 16,
        height: 450,
      }}>
      <Text style={{color: 'white'}}>Swipe down to close</Text>
    </View>
  );

  const fetchreminders = async (db: any) => {
    let reminder_array: any = [];

    await db.transaction(async function (txn: any) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)',
        [],
      );
      reminder_array = await Fetchdata.getusermeds(txn);
      reminders_state(reminder_array);
    });
  };

  const remindersofparticular_medicine = async (med_name: any) => {
    console.log(med_name);
    const histoy_obj: any = await Allreminderdata(med_name);
    const output_map: any = histoy_obj.mapper;
    const {meds_id} = histoy_obj;
    let f_array: any = [];
    for (let [key, value] of output_map.entries()) {
      let arr = {date: key, key: {taken: [], not_taken: [],remId:''}};
      arr.key.taken = value.taken;
      arr.key.not_taken = value.not_taken;
      arr.key.remId = value.remId;
      f_array.push(arr);
    }
    reminder_map_fetched_data_state(f_array);
    let syncData = [];
     f_array.map(mdata => {
        let mobj = {date:'',taken:[],not_taken:[],remId:''};
        mobj.date = mdata.date;
        mobj.taken = mdata.key.taken;
        mobj.not_taken = mdata.key.not_taken;
        mobj.remId = mdata.key.remId;
        syncData.push(mobj);
    })
    console.log(syncData);
    fetch(`${API_URL}/api/v1/medicinehistory/sync?medId=${meds_id}`, {
      method: 'POST',
      body:JSON.stringify(syncData),
      headers: {
        'Content-type': 'application/json',
      }
    }).then(res => {});
  };

  const getmed_details = async (med_name: any) => {
    await db.transaction(async function (txn: any) {
      txn.executeSql(
        'SELECT * FROM `User_medicines` WHERE medicine_name = ?',
        [med_name],
        function (tx: any, res: any) {
          med_detail_state(res.rows.item(0));
        },
      );
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      db = SQLite.openDatabase(
        {
          name: 'MedRemdb',
          location: 'default',
        },
        () => {
          console.log('opened');
        },
        (error: any) => {
          console.log(error);
        },
      );
      let isActive = true;
      fetchreminders(db);
      return () => {
        isActive = false;
      };
    }, []),
  );

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{width: '100%', borderColor: 'lightgrey', borderEndWidth: 1}}>
          <Picker
            mode="dropdown"
            style={{
              backgroundColor: 'white',
              borderColor: 'lightgrey',
              borderWidth: 3,
              color: 'black',
              elevation: 3,
            }}
            selectedValue={pickerValue}
            onValueChange={itemValue => {
              setPickerValue(itemValue);
              remindersofparticular_medicine(itemValue);
              getmed_details(itemValue);
            }}>
            {allreminders.map((it: any) => {
              return (
                <Picker.Item
                  key={it.medicine_name}
                  label={it.medicine_name}
                  value={it.medicine_name}
                />
              );
            })}
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 7,
        }}>
        <View style={{left: 10}}>
          <Text style={{color: 'black', fontSize: 18, marginTop: 30}}>
            Overall Performance{' '}
          </Text>
        </View>
        <View style={{alignItems: 'center', paddingRight: 20, margin: 10}}>
          <ProgressCircle
            percent={
              med_detail &&
              Math.round(
                (med_detail.current_count / med_detail.total_med_reminders) *
                  100,
              )
            }
            radius={35}
            borderWidth={3}
            color="#4dd0e1"
            bgColor="#fff">
            <Text style={{fontSize: 18, color: '#4dd0e1'}}>
              {med_detail &&
                Math.round(
                  (med_detail.current_count / med_detail.total_med_reminders) *
                    100,
                ) + '%'}
            </Text>
          </ProgressCircle>
        </View>
      </View>
      <Divider />
      <View
        style={{
          padding: 15,
          backgroundColor: 'lightgrey',
          marginBottom: 5,
        }}>
        <Text style={{fontWeight: '600'}}> Detailed Report</Text>
      </View>
      {
        <FlatList
          data={reminder_map_fetched_data}
          renderItem={Reminders}></FlatList>
      }
      <Button
        title="Download as Pdf"
        onPress={async () => {
          const date = new Date();
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          );
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          );
          let downloaddir = RNFetchBlob.fs.dirs.DownloadDir;
          let downloadPath = `${downloaddir}/report_${Math.floor(
            date.getTime() + date.getSeconds() / 2,
          )}.pdf`;
          const options = {
            fileCache: true,
            addAndroidDownloads: {
              useDownloadManager: true, // true will use native manager and be shown on notification bar.
              notification: true,
              path: downloadPath,
              description: 'Downloading your report',
            },
          };
          await config(options).fetch(
            'GET',
            'https://7224-103-225-204-61.ngrok.io/upload/static/pdf/sample.pdf',
          );
          console.log('complete');
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  timeright: {
    flexDirection: 'column',
    width: '46%',
    padding: 10,
    paddingLeft: 15,
    marginRight: 10,
  },
  timeleft: {
    flexDirection: 'column',
    width: '46%',
    padding: 10,
    paddingLeft: 25,
  },
  dateday: {
    borderRadius: 6,
    elevation: 2,
    padding: 10,
    paddingLeft: 20,
    marginTop: 8,
  },
});

export default MyComponent;
