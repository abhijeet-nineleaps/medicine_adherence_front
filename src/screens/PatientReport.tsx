/* eslint-disable no-dupe-keys */
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
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Button} from 'react-native-elements';
import {Card} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import NetworkCalls from '../connectivity/Network';
import * as Animatable from 'react-native-animatable';
import Downloadpdf from '../adherence/Downloadpdf';
import LottieView from 'lottie-react-native';

const Reminders = ({item, index}) => {
  return (
    <Animatable.View animation="slideInLeft" duration={500} delay={index * 180}>
      <>
        <View
          key={'1'}
          style={{
            padding: 4,
            marginBottom: 15,
          }}>
          <Card key={'2'} style={styles.dateday}>
            <View
              key={'3'}
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text key={'7'} style={{fontSize: 16, fontWeight: '600'}}>
                Date - {item.date}
              </Text>
            </View>
          </Card>
        </View>
        {item.nottaken.split(',').map(nti => {
          return (
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
          );
        })}
        {item.taken.split(',').map(tti => {
          return (
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
          );
        })}
      </>
    </Animatable.View>
  );
};

export default function PatientReport({route}) {
  const {medId, adherenceRate} = route.params;
  const [historyData, setHistoryData] = useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);

  async function fetchHistory() {
    const response: any = await NetworkCalls.getmedicineHistory(medId);
    console.log(response);
    response.status === 'OK'
      ? setHistoryData(response.userMedicinesList)
      : setHistoryData([]);
  }
  useFocusEffect(
    React.useCallback(() => {
      fetchHistory();
      return () => {
        let isActive = true;
        isActive = false;
      };
    }, []),
  );
  useFocusEffect(() => {});

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
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
          <LottieView
            style={{width: 70, height: 70}}
            speed={0.8}
            source={require('../../assests/animate/generatepdf.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>
      <View style={{height: 100}}>
        <View style={{height: 70, backgroundColor: '#3743ab'}}>
          <View style={{top: 30, alignSelf: 'center'}}>
            <ProgressCircle
              percent={adherenceRate}
              radius={40}
              borderWidth={5}
              color="#4dd0e1"
              bgColor="#fff">
              <Text style={{fontSize: 18, color: '#4dd0e1'}}>
                {adherenceRate + '%'}
              </Text>
            </ProgressCircle>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', marginBottom: 12, marginTop: 15}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>PCM</Text>
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: 'lightgrey',
          marginBottom: 5,
        }}>
        <Text style={{fontWeight: '600'}}> Detailed Report</Text>
      </View>
      <FlatList data={historyData} renderItem={Reminders}></FlatList>
      <View>
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
    borderRadius: 15,
    elevation: 2,
    padding: 10,
    paddingLeft: 20,
    width: '95%',
    alignSelf: 'center',
  },
});
