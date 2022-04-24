/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, View} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-elements';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';
import LottieView from 'lottie-react-native';
import {TextInput} from 'react-native-paper';
import SQLite from 'react-native-sqlite-storage';
import {Formik} from 'formik';
import BottomSheet from 'reanimated-bottom-sheet';
import * as Animatable from 'react-native-animatable';
// SQLite.deleteDatabase(
//   {name: 'MedStickdb', location: 'default'},
//   () => {
//     console.log('second db deleted');
//   },
//   error => {
//     console.log('ERROR: ' + error);
//   },
// );
const db = SQLite.openDatabase(
  {
    name: 'MedStickdb',
    location: 'default',
  },
  () => {
    console.log('opened');
  },
  (error: any) => {
    console.log(error);
  },
);

const UserMed = ({route, navigation}) => {
  const {id} = route.params;
  console.log(id);
  const height = Dimensions.get('window').height;
  const sheetRef = React.useRef(null);

  const savemedicinetodb = async ({Name, Description}) => {
    await db.transaction(txn => {
      console.log(txn);
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER , total_med_reminders INTEGER , current_count INTEGER)',
        [],
      );
      var value = Math.floor(10000 + Math.random() * 90000);

      txn.executeSql(
        'INSERT INTO User_medicines (user_id,medicine_name,medicine_des,title,time,days,start_date,end_date,status,sync,total_med_reminders,current_count) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        [value, Name, Description, '', '', '', '', '', 0, 0, 0, 0],
      );

      txn.executeSql('SELECT * FROM `User_medicines`', [], function (tx, res) {
        console.log(res);
        for (let i = 0; i < res.rows.length; ++i) {
          console.log('item:', res.rows.item(i));
        }
      },(tx,err)=>{
        console.log(err);
      });
    });
    Toast.show({
      type: 'info',
      text1: 'Added successfully!',
      position: 'bottom',
    });
    setTimeout(() => {
      navigation.navigate('Drawer');
    }, 1000);
  };

  const schema = yup.object({
    Name: yup.string().required().min(4),
    Description: yup.string().required().min(10),
  });

  const renderContent = () => {
    return (
      <Animatable.View animation="slideInUp" duration={1000} delay={80}>
        <View
          style={{
            padding: 25,
            height: height / 1.2,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: '700',
              marginBottom: 40,
            }}>
            Add New Medicine
          </Text>
          <Formik
            initialValues={{Name: '', Description: ''}}
            validationSchema={schema}
            onSubmit={values => {
              console.log(values);
              savemedicinetodb(values);
            }}>
            {formikprops => (
              <>
                <TextInput
                  onChangeText={formikprops.handleChange('Name')}
                  value={formikprops.values.Name}
                  placeholder="Medicine name"
                  mode="outlined"
                  label="Medicine name"></TextInput>
                <Text style={{color: 'red'}}>
                  {formikprops.touched.Name && formikprops.errors.Name}
                </Text>
                <TextInput
                  style={{marginTop: 10}}
                  onChangeText={formikprops.handleChange('Description')}
                  value={formikprops.values.Description}
                  placeholder="Description"
                  mode="outlined"
                  label="Medicine description"></TextInput>
                <Text style={{color: 'red'}}>
                  {formikprops.touched.Description &&
                    formikprops.errors.Description}
                </Text>

                <Button
                  title="Add medicine"
                  buttonStyle={{
                    backgroundColor: '#3743ab',
                    width: '80%',
                    height: '30%',
                    borderRadius: 10,
                  }}
                  containerStyle={{
                    width: '100%',
                    position: 'relative',
                    marginTop: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  titleStyle={{color: 'white', marginHorizontal: 20}}
                  onPress={formikprops.handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
      </Animatable.View>
    );
  };

  return (
    <View style={{backgroundColor: '#3743ab', height: '100%', width: '100%'}}>
      <Toast></Toast>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <LottieView
          style={{width: 300, height: 300}}
          source={require('../assests/animate/med_des.json')}
          autoPlay
          loop
          speed={1}></LottieView>
      </View>
      <BottomSheet
        ref={sheetRef}
        enabledInnerScrolling={true}
        snapPoints={[500, 440, 50]}
        borderRadius={40}
        renderContent={renderContent}
      />
    </View>
  );
};

export default UserMed;
