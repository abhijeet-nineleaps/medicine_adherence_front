/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-bitwise */
/* eslint-disable handle-callback-err */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Image, Modal, ScrollView, View} from 'react-native';
import {API_URL} from '@env';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {Button, Text} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import Toast from 'react-native-toast-message';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(["Require cycle:"])
interface Props {
  route: any;
  navigation: any;
}

const SendImageToCaretaker: React.FC<Props> = ({route, navigation}: Props) => {

  const {image_uri} = route.params;
  const [mycaretakers, mycaretakerstate] = useState([]);
  const [send_to, send_to_state] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const Renderitem = ({item}) => {
    const [med1, setMed1] = useState(false);

    return (
      <View style={{flexDirection: 'row'}}>
        <BouncyCheckbox
          size={22}
          fillColor="#3743ab"
          unfillColor="#FFFFFF"
          isChecked={med1}
          iconStyle={{borderColor: '#3743ab', borderWidth: 1.3}}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            fontSize: 17,
            color: 'black',
          }}
          disableBuiltInState
          onPress={() => {
            setMed1(!med1);
            !med1 ? send_to_state(item.caretakerId) : send_to_state('');
          }}
        />
        <Text style={{fontWeight: '600', fontSize: 18}}>
          {item.caretakerUsername}
        </Text>
      </View>
    );
  };

  const fetchcaretakers = async () => {
    const user_id = await AsyncStorage.getItem('user_id');

    return new Promise((resl, rej) => {
      fetch(
        `${API_URL}/api/caretaker/myCareTakers(Patient)?patientId=${user_id}`,
      )
        .then(resp => resp.json())
        .then(res => {
          console.log(res);
          resl(res);
        })
        .catch(err => {
          setModalVisible(false);
        });
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      async function name() {
        let value: any = await fetchcaretakers();
        mycaretakerstate(value);
      }
      name();
      return () => {
        isActive = false;
      };
    }, []),
  );

  function SendImage() {
    setModalVisible(true);
    const formdata = new FormData();
    var dt = new Date().getTime();
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
    console.log(formdata);
    const url = `${API_URL}`;
    fetch(url + '/api/caretaker/sendimage', {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    })
      .then(response => {
        setModalVisible(false);
        console.log('image uploaded');

        setTimeout(() => {
          navigation.pop(1);
        }, 1000);
      })
      .catch(err => {
        console.log(err);
        setModalVisible(false);
      });
  }

  return (
    <View style={{height: '100%', padding: 20, backgroundColor: 'white'}}>
      <Toast visibilityTime={1500}></Toast>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={{alignItems: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 200,
          }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'white',
              width: '70%',
              height: '50%',
            }}>
            <Text style={{}}>Please wait Uploading Image!</Text>
            <Progress.CircleSnail
              spinDuration={500}
              size={80}
              color={['red', 'green', 'yellow']}
            />
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 10,
        }}>
        <Text style={{fontWeight: '900'}}>Image</Text>
        <Button
          title="Retake"
          onPress={() => {
            navigation.pop(1);
          }}></Button>
      </View>
      <Image
        source={{uri: image_uri}}
        style={{height: '70%', width: '100%'}}></Image>
      <View style={{padding: 50}}>
        <ScrollView>
          {mycaretakers.map(item => {
            return <Renderitem item={item}></Renderitem>;
          })}

          <Button
            disabled={send_to === ''}
            onPress={SendImage}
            title="Send"
            buttonStyle={{backgroundColor: '#3743ab'}}
            containerStyle={{marginTop: 25}}></Button>
        </ScrollView>
      </View>
    </View>
  );
};

export default SendImageToCaretaker;
