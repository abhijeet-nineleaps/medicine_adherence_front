/* eslint-disable prettier/prettier */
/* eslint-disable no-bitwise */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Image, Modal, ScrollView, TouchableOpacity, View} from 'react-native';
import { API_URL } from '../../repositories/var';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {Button, Text} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import Toast from 'react-native-toast-message';
import Share from 'react-native-share';
import {LogBox} from 'react-native';
import Fetchdata from '../../repositories/database/Querydata';
import globalDb from '../../repositories/database/Globaldb';
import styles from '../adherenceStyles/SenImageToCareTakerStyles';
import {showToast} from '../../components/atoms/Toast';

LogBox.ignoreLogs(['Require cycle:']);
interface Props {
  route: any;
  navigation: any;
}

const db = globalDb();
let medName = '';
let medId: Number = 0;
const SendImageToCaretaker: React.FC<Props> = ({route, navigation}: Props) => {
  const {image_uri} = route.params;
  const [mycaretakers, mycaretakerstate] = useState([]);
  const [send_to, send_to_state] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [medsArray, medsArrayState] = useState<any[]>([]);

  const Renderitem = ({item}) => {
    const [med1, setMed1] = useState(false);

    return (
      <View style={styles.cnConatiner}>
        <BouncyCheckbox
          size={22}
          fillColor="#3743ab"
          unfillColor="#FFFFFF"
          isChecked={med1}
          iconStyle={styles.cnChechBoxIcon}
          textStyle={styles.cnCheckBoxText}
          disableBuiltInState
          onPress={() => {
            setMed1(!med1);
            !med1 ? send_to_state(item.caretakerId) : send_to_state('');
          }}
        />
        <Text style={styles.cnText}>{item.caretakerUsername}</Text>
      </View>
    );
  };

  const RenderMeds = ({item}) => {
    const [clicked, clickedstate] = useState(false);
    const [borderColo, borderColorstate] = useState('white');
    const [tcolor, tcolorstate] = useState('black');

    return (
      <View
        style={{
          padding: 10,
          margin: 10,
          borderColor: 'black',
          borderWidth: 0.1,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: borderColo,
          borderRadius: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            medName = item.medicine_name;
            medId = item.user_id;
            clickedstate(!clicked);
            if (clicked) {
              borderColorstate('white');
            } else {
              borderColorstate('#4dd0e1');
              tcolorstate('white');
            }
          }}>
          <Text style={{fontWeight: '500', fontSize: 15, color: tcolor}}>
            {item.medicine_name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const fetchcaretakers = async () => {
    const user_id = await AsyncStorage.getItem('user_id');

    return new Promise(resl => {
      fetch(`${API_URL}/api/v1/caretakers?patientId=${user_id}`)
        .then(resp => resp.json())
        .then(res => {
          if (res.status === 'failed') {
            resl([]);
          }
          resl(res.userCaretakerList);
        })
        .catch(() => {
          setModalVisible(false);
        });
    });
  };

  const fetchMedicines = async () => {
    db.transaction(async txn => {
      let medsArr: any = await Fetchdata.getusermeds(txn);
      medsArrayState(medsArr);
    });
  };
  useFocusEffect(
    React.useCallback(() => {
      async function name() {
        await fetchMedicines();
        let value: any = await fetchcaretakers();
        mycaretakerstate(value);
      }
      name();
      return () => {
        true;
      };
    }, []),
  );

  async function SendImage() {
    setModalVisible(true);
    if (medName === '') {
      setModalVisible(false);
      showToast('Select medicine');
      return;
    }
    let todayDate = new Date();
    let setDate =
      todayDate.getDate() +
      '-' +
      (todayDate.getMonth() + 1) +
      '-' +
      todayDate.getFullYear();
    let imagesData = await AsyncStorage.getItem(setDate + ' ' + medName);
    if (imagesData !== null) {
      let parsedData = JSON.parse(imagesData);
      parsedData.push(image_uri);
      await AsyncStorage.setItem(
        setDate + ' ' + medName,
        JSON.stringify(parsedData),
      );
    } else {
      let parsedData = [];
      parsedData.push(image_uri);

      await AsyncStorage.setItem(
        setDate + ' ' + medName,
        JSON.stringify(parsedData),
      );
    }
    const formdata = new FormData();
    var dt = new Date().getTime();

    let patientName = await AsyncStorage.getItem('user_name');

    var file_name = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      },
    );
    formdata.append('image', {
      name: 'care',
      uri: image_uri,
      type: 'image/jpg',
    });
    formdata.append('name', file_name);
    formdata.append('id', send_to);
    formdata.append('medName', medName + ' taken by ' + patientName);
    formdata.append('medId', medId);
    const url = `${API_URL}`;
    fetch(url + '/api/v1/image', {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    })
      .then(() => {
        setModalVisible(false);

        setTimeout(() => {
          navigation.pop(1);
        }, 1000);
      })
      .catch(() => {
        setModalVisible(false);
      });
  }

  return (
    <View style={styles.container}>
      <Toast visibilityTime={1500}></Toast>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}>
        <View style={styles.modalOuterView}>
          <View style={styles.modalInnerView}>
            <Text>Please wait Uploading Image!</Text>
            <Progress.CircleSnail
              spinDuration={500}
              size={80}
              color={['red', 'green', 'yellow']}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.container1}>
        <Text style={styles.container1Text}>Image</Text>
        <Button
          title="Share"
          onPress={async () => {
            const shareOptions = {
              title: 'Share file',
              email: 'email@example.com',
              social: Share.Social.EMAIL,
              failOnCancel: false,
              urls: [image_uri],
            };
            await Share.open(shareOptions);
          }}></Button>
      </View>
      <Image source={{uri: image_uri}} style={styles.image}></Image>
      <ScrollView>
        <View style={styles.mnView}>
          <Text style={styles.mnText}>Select Medicine</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            {medsArray &&
              medsArray.map(medItem => {
                return <RenderMeds item={medItem}></RenderMeds>;
              })}
          </ScrollView>
        </View>
        <View style={styles.cnView}>
          {mycaretakers.map(item => {
            return <Renderitem item={item}></Renderitem>;
          })}

          <Button
            disabled={send_to === ''}
            onPress={SendImage}
            title="Send"
            buttonStyle={styles.button}
            containerStyle={styles.buttonConatiner}></Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default SendImageToCaretaker;
