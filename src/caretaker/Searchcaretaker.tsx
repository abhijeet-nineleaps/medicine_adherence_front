/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View, Image, Text} from 'react-native';
import {Avatar, Button, ListItem, SearchBar} from 'react-native-elements';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {Formik} from 'formik';
import * as yup from 'yup';

const Searchcaretaker = ({navigation}) => {
  const [data, datastate] = React.useState([]);
  const [load, loadstate] = React.useState(false);
  const [searchload, searchloadstate] = React.useState(false);

  const sendmailtouser = (email: any) => {
    searchloadstate(true);
    fetch(`${API_URL}/api/v1/email?email=${email}&sender=Nikunj bisht`)
      .then(res => res.json())
      .then(resp => {
        console.log(resp);
        searchloadstate(false);

        datastate([resp]);
      })
      .catch(err => {
        console.log(err);
        searchloadstate(false);
        Toast.show({
          type: 'success',
          text1: 'Invitation mail has been sent successfully!',
          position: 'bottom',
        });
        datastate([]);
      });
  };

  const sendreqtocaretaker = async (
    caret_id: String,
    caret_username: String,
  ) => {
    const pnt_id = await AsyncStorage.getItem('user_id');
    const pt_name = await AsyncStorage.getItem('user_name');
    console.log(caret_id, pnt_id, pt_name);

    fetch(`${API_URL}/api/v1/request`, {
      method: 'POST',
      body: JSON.stringify({
        caretakerId: caret_id,
        caretakerUsername: caret_username,
        patientId: pnt_id,
        patientName: pt_name,
        reqStatus: false,
        sentBy: 'P',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => {
        console.log(res.json());
        navigation.pop(1);
      })
      .catch(err => console.log(err));
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
  });

  const renderitem = ({item}) => {
    return (
      <ListItem
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        hasTVPreferredFocus={undefined}
        tvParallaxProperties={undefined}>
        <ListItem.Content>
          <Avatar
            rounded
            source={{uri: 'https://i.stack.imgur.com/l60Hf.png'}}></Avatar>
          <ListItem.Title>{item.userName}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
        <Button
          loading={load}
          title="Send request"
          buttonStyle={{backgroundColor: '#3743ab'}}
          onPress={() => {
            sendreqtocaretaker(item.userId, item.userName);
          }}></Button>
      </ListItem>
    );
  };

  return (
    <View style={{padding: 10, backgroundColor: 'white', height: '100%'}}>
      <Toast></Toast>

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: ''}}
        onSubmit={values => sendmailtouser(values.email)}>
        {({handleChange, handleSubmit, values, errors, touched, isValid}) => (
          <>
            <SearchBar
              style={{}}
              placeholder="Search Caretaker.."
              value={values.email}
              onChangeText={handleChange('email')}></SearchBar>
            <Text style={{color: 'red'}}>{touched.email && errors.email}</Text>

            <Button
              loading={searchload}
              buttonStyle={{backgroundColor: '#3743ab'}}
              title="Search"
              onPress={() => handleSubmit()}
              containerStyle={{marginTop: 10}}></Button>
          </>
        )}
      </Formik>
      {data.length === 0 && (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assests/searchcaretaker.png')}
            style={{width: 300, height: 300, marginTop: 70}}
            resizeMode="stretch"></Image>
        </View>
      )}
      <FlatList data={data} renderItem={renderitem}></FlatList>
    </View>
  );
};
export default Searchcaretaker;
