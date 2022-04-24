/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  PermissionsAndroid,
  Modal,
  ToastAndroid,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Button, Divider} from 'react-native-elements';
import {Card} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import NetworkCalls from '../connectivity/Network';
import * as Animatable from 'react-native-animatable';
import Downloadpdf from '../adherence/Downloadpdf';
import LottieView from 'lottie-react-native';
import HistoryDetail from './components/HistoryDetail';
let detailData = {};

var weeks: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const Reminders = ({item, index}) => {
  const nottaken = item.nottaken.split(',');
  const taken = item.taken.split(',');
  let tl: number, nt: number;
  nottaken[0] === '' ? (nt = 0) : (nt = nottaken.length);
  taken[0] === '' ? (tl = 0) : (tl = taken.length);
  return (
    <Animatable.View animation="slideInLeft" duration={500} delay={index * 180}>
      <>
        <Card key={'2'} style={styles.dateday}>
          <View
            key={'3'}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 8,
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center', marginLeft: 12}}>
              <Text
                key={'7'}
                style={{fontSize: 16, fontWeight: '600', marginLeft: 19}}>
                Date - {item.date}
              </Text>
            </View>
            {
              <View style={{alignItems: 'center', marginRight: 60}}>
                <ProgressCircle
                  percent={Math.round((tl / (tl + nt)) * 100)}
                  radius={20}
                  borderWidth={3}
                  color="#4dd0e1"
                  shadowColor="#e3f2fd"
                  bgColor="#fff">
                  <Text style={{fontSize: 10, color: '#4dd0e1'}}>
                    {Math.round((tl / (tl + nt)) * 100) + '%'}
                  </Text>
                </ProgressCircle>
              </View>
            }
          </View>
          <Divider style={{marginBottom: 8}} />
          {nottaken.map(nti => {
            return (
              nti !== '' && (
                <View
                  key={'4'}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 12,
                    marginLeft: 7,
                  }}>
                  <Text key={'5'}>{nti}</Text>
                  <Text key={'6'} style={{color: 'red'}}>
                    {' '}
                    Not Taken
                  </Text>
                </View>
              )
            );
          })}
          {taken.map(tti => {
            return (
              tti !== '' && (
                <View
                  key={'12' + tti}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 12,
                  }}>
                  <Text key={'22'}>{tti}</Text>
                  <Text key={'23'} style={{color: '#66bb6a'}}>
                    {' '}
                    Taken
                  </Text>
                </View>
              )
            );
          })}
        </Card>
      </>
    </Animatable.View>
  );
};

export default function PatientReport({route}) {
  const {medId, adherenceRate, medName, medDays, mstartDate, mendDate} =
    route.params;
  const [historyData, setHistoryData] = useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [allDates, setallDates] = useState([]);
  const [showDetail, showDetailState] = useState(false);

  async function fetchHistory() {
    const response: any = await NetworkCalls.getmedicineHistory(medId);
    console.log(response);
    response.status === 'OK'
      ? setHistoryData(response.userMedicinesList)
      : setHistoryData([]);
  }
  function showalldates() {
    let alldates = [];
    let msd = new Date(mstartDate),
      mld = new Date(mendDate);
    let daysSet = new Set(medDays.split(':'));
    let todayDate = new Date();
    while (msd <= mld) {
      if (daysSet.has(weeks[msd.getDay()])) {
        let currentDate = new Date(msd);
        const dateObj = {day: '', date: '', month: 0, color: '', year: 0};
        dateObj.day = weeks[currentDate.getDay()];
        dateObj.date = currentDate.getDate().toString();
        dateObj.month = currentDate.getMonth();
        dateObj.color = currentDate < todayDate ? '#e3f2fd' : '#4dd0e1';
        dateObj.year = currentDate.getFullYear();
        alldates.push(dateObj);
      }
      msd.setDate(msd.getDate() + 1);
    }
    console.log(alldates);
    setallDates(alldates);
  }

  const showDetailfun = sDate => {
    console.log(sDate);
    detailData = historyData.find(el => el.date === sDate);
    console.log(detailData);
    if (detailData === undefined) {
      ToastAndroid.show('Not available', ToastAndroid.LONG);
      return;
    }
    showDetailState(true);
    setModalVisible(true);
  };

  function modalVisibilityfun() {
    setModalVisible(false);
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchHistory().then(() => {
        showalldates();
      });
      return () => {
        let isActive = true;
        isActive = false;
      };
    }, []),
  );
  useFocusEffect(() => {});

  return (
    <View style={{height: '100%', backgroundColor: '#3743ab'}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={{alignItems: 'center', backgroundColor: 'red'}}>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
          }}>
          {showDetail ? (
            <HistoryDetail
              data={detailData}
              modalVisibility={modalVisibilityfun}
            />
          ) : (
            <LottieView
              style={{width: 70, height: 70}}
              speed={0.8}
              source={require('../../assests/animate/generatepdf.json')}
              autoPlay
              loop
            />
          )}
        </View>
      </Modal>
      <View style={{}}>
        <View style={{backgroundColor: '#3743ab'}}>
          <View style={{alignItems: 'center', marginTop: 28}}>
            <ProgressCircle
              percent={adherenceRate}
              radius={60}
              borderWidth={13}
              color="#4dd0e1"
              shadowColor="#e3f2fd"
              bgColor="#fff">
              <Text style={{fontSize: 18, color: '#4dd0e1'}}>
                {adherenceRate + '%'}
              </Text>
            </ProgressCircle>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 12,
                marginTop: 15,
                padding: 5,
                borderRadius: 20,
              }}>
              <Text style={{fontSize: 25, fontWeight: '500', color: 'white'}}>
                {medName}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <View style={{height: 130, alignItems: 'center', marginTop: 18}}>
          <Text style={{fontWeight: '500', marginBottom: 8}}>
            Scheduled Dates for {medName}
          </Text>
          <ScrollView horizontal={true}>
            {allDates.map(mcurrenntDate => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Text style={{color: 'black', fontSize: 18}}>
                    {mcurrenntDate.day}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      showDetailfun(
                        mcurrenntDate.date +
                          '-' +
                          (mcurrenntDate.month + 1) +
                          '-' +
                          mcurrenntDate.year,
                      )
                    }>
                    <View
                      style={{
                        flexDirection: 'column',
                        marginRight: 10,
                        marginLeft: 10,
                        padding: 13,
                        width: 70,
                        alignItems: 'center',
                        borderRadius: 60,
                        justifyContent: 'center',
                        backgroundColor: mcurrenntDate.color,
                      }}>
                      <Text
                        style={{
                          backgroundColor: 'white',
                          padding: 8,
                          borderRadius: 30,
                          color: 'black',
                        }}>
                        {mcurrenntDate.date}
                      </Text>
                      <Text style={{color: 'white'}}>
                        {months[mcurrenntDate.month]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 8,
            fontWeight: '600',
            textAlign: 'center',
            fontSize: 18,
          }}>
          Medicine History
        </Text>
        <FlatList data={historyData} renderItem={Reminders} />
        <Button
          title={'Download PDF'}
          titleStyle={{fontSize: 18}}
          onPress={async () => {
            await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            );
            await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            );
            setModalVisible(true);
            const downloadResp = await Downloadpdf(medId);
            setModalVisible(false);
            if (downloadResp !== 'err') {
              ToastAndroid.show('Downloaded successfully', ToastAndroid.LONG);
            } else {
              ToastAndroid.show('Error while downloading', ToastAndroid.LONG);
            }
          }}
          buttonStyle={{backgroundColor: '#3743ab', height: 40}}>
          Download PDF
        </Button>
      </View>
    </View>
  );
}

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
    borderRadius: 11,
    elevation: 6,
    padding: 10,
    paddingLeft: 20,
    borderTopWidth: 5,
    borderColor: '#3743ab',
    width: '95%',
    alignSelf: 'center',
    margin: 20,
  },
  description: {
    borderRadius: 25,
    elevation: 2,
    padding: 10,
    height: 250,
    margin: 12,
    backgroundColor: 'white',
  },
});
