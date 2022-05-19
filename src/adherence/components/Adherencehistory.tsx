/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  PermissionsAndroid,
  ToastAndroid,
  Image,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Picker} from '@react-native-picker/picker';
import {Button, Divider} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import Allreminderdata from '../common/Allreminderdata';
import {LogBox, Modal} from 'react-native';
import Fetchdata from '../../repositories/database/Querydata';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import Downloadpdf from '../common/Downloadpdf';
import MedicinehistoryList from '../organisms/MedicineHistoryList';
import globalDb from '../../repositories/database/Globaldb';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from '../adherenceStyles/AdherenceHistoryStyles';
import Adherence from '../../repositories/adherence/Adherence';

let globalmedId;
LogBox.ignoreLogs(['Require cycle:']);
LogBox.ignoreAllLogs();
var db: any;
interface singledate {
  not_taken: [];
  taken: [];
}

const MyComponent: React.FC = () => {
  const [pickerValue, setPickerValue] = React.useState<String>('');
  const [allreminders, reminders_state] = React.useState<[]>([]);
  const [reminder_map_fetched_data, reminder_map_fetched_data_state] =
    React.useState<[]>([]);
  const [med_detail, med_detail_state] = React.useState<any>();
  const [sync, syncstate] = React.useState(false);
  const [disableDownload, downloadState] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [showDetail, showDetailState] = React.useState(false);
  const [imagearray, setimagearray] = React.useState([]);
  const [index, setindex] = React.useState(0);
  const fetchreminders = async (dbs: any) => {
    let reminder_array: any = [];

    await dbs.transaction(async function (txn: any) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)',
        [],
      );
      reminder_array = await Fetchdata.getusermeds(txn);
      reminders_state(reminder_array);
    });
  };

  const remindersofparticular_medicine = async (med_name: any) => {
    const histoy_obj: any = await Allreminderdata(med_name);
    const output_map: any = histoy_obj.mapper;
    const {meds_id} = histoy_obj;
    globalmedId = meds_id;
    let f_array: any = [];
    for (let [key, value] of output_map.entries()) {
      let arr = {date: key, key: {taken: [], not_taken: [], remId: ''}};
      arr.key.taken = value.taken;
      arr.key.not_taken = value.not_taken;
      arr.key.remId = value.remId;
      f_array.push(arr);
    }
    reminder_map_fetched_data_state(f_array);
    let syncData = [];
    f_array.map(mdata => {
      let mobj = {date: '', taken: [], not_taken: [], remId: ''};
      mobj.date = mdata.date;
      mobj.taken = mdata.key.taken;
      mobj.not_taken = mdata.key.not_taken;
      mobj.remId = mdata.key.remId;
      syncData.push(mobj);
    });
    downloadState(true);
    syncstate(true);
    await Adherence.syncmedicineHistory({meds_id, syncData});
    syncstate(false);

    downloadState(false);
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
      db = globalDb();
      fetchreminders(db);
      return () => {
        true;
      };
    }, []),
  );
  const showDetailfun = sDate => {
    if (sDate.length === 0) {
      return;
    }
    setimagearray(sDate);
    showDetailState(true);
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <Modal
        onRequestClose={() => setModalVisible(false)}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}>
        <View style={styles.carousalView}>
          {showDetail ? (
            <>
              <Carousel
                onSnapToItem={inde => setindex(inde)}
                layout={'stack'}
                data={imagearray}
                renderItem={({item}) => {
                  console.log(item, 'image');
                  return (
                    <View style={styles.carousalImageView}>
                      <Image
                        source={{uri: `${item}`}}
                        resizeMode="contain"
                        style={styles.carousalImage}></Image>
                    </View>
                  );
                }}
                sliderWidth={660}
                itemWidth={600}></Carousel>
              <Pagination
                dotsLength={imagearray.length}
                activeDotIndex={index}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.paginationDot}
                inactiveDotStyle={styles.paginationInactiveDot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            </>
          ) : (
            <LottieView
              style={{width: 70, height: 70}}
              speed={0.8}
              source={require('../../../assests/animate/generatepdf.json')}
              autoPlay
              loop
            />
          )}
        </View>
      </Modal>
      {sync ? (
        <View style={styles.syncView}>
          <Text style={styles.syncText}>Syncing Data</Text>
          <Progress.CircleSnail
            spinDuration={400}
            size={30}
            color={['white']}
          />
        </View>
      ) : (
        <></>
      )}
      <View style={styles.conatiner1}>
        <View style={styles.medNameView}>
          <Picker
            mode="dropdown"
            style={styles.medNamePicker}
            selectedValue={pickerValue}
            onValueChange={itemValue => {
              setPickerValue(itemValue);
              remindersofparticular_medicine(itemValue);
              getmed_details(itemValue);
            }}>
            {allreminders
              .filter((it: any) => it.status === 1)
              .map((it: any) => {
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
      <View style={styles.container2}>
        <View style={styles.container2Left}>
          <Text style={styles.container2LeftText}>Overall Performance </Text>
        </View>
        <View style={styles.container2Right}>
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
            <Text style={styles.container2RightText}>
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
      <View style={styles.conatiner3}>
        <Text style={styles.conatiner3Text}> Detailed Report</Text>
      </View>
      {
        <FlatList
          data={reminder_map_fetched_data}
          renderItem={({item}) => {
            return (
              <MedicinehistoryList
                item={item}
                medName={pickerValue}
                showimgfun={showDetailfun}></MedicinehistoryList>
            );
          }}></FlatList>
      }
      <Button
        disabled={disableDownload}
        title="Download PDF"
        buttonStyle={styles.button}
        onPress={async () => {
          showDetailState(false);
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          );
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          );
          setModalVisible(true);
          const downloadResp = await Downloadpdf(globalmedId);
          setModalVisible(false);
          if (downloadResp !== 'err') {
            ToastAndroid.show('Downloaded successfully', ToastAndroid.LONG);
          } else {
            ToastAndroid.show('Error while downloading', ToastAndroid.LONG);
          }
        }}></Button>
    </View>
  );
};

export default MyComponent;
