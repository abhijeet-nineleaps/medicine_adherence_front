/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
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
import globalDb from '../repositories/database/globalDb';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./screenStyles/UserMedStyles";
import { useRoute } from '@react-navigation/native';
const UserMed = ({navigation}) => {
  const route = useRoute();
  const id = route.params;
  console.log(id);
  const sheetRef = React.useRef(null);
  const savemedicinetodb = async ({Name, Description}) => {
    const db = await globalDb();

    await db.transaction(txn => {
      console.log(txn);
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER , total_med_reminders INTEGER , current_count INTEGER)',
        [],
      );
      let value = Math.floor(10000 + Math.random() * 90000);

      txn.executeSql(
        'INSERT INTO User_medicines (user_id,medicine_name,medicine_des,title,time,days,start_date,end_date,status,sync,total_med_reminders,current_count) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        [value, Name, Description, '', '', '', '', '', 0, 0, 0, 0],
      );
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
          style={styles.container1}>
          <Text
            style={styles.addMedText}>
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
                <Text style={styles.error}>
                  {formikprops.touched.Name && formikprops.errors.Name}
                </Text>
                <TextInput
                  style={styles.description}
                  onChangeText={formikprops.handleChange('Description')}
                  value={formikprops.values.Description}
                  placeholder="Description"
                  mode="outlined"
                  label="Medicine description"></TextInput>
                <Text style={styles.error}>
                  {formikprops.touched.Description &&
                    formikprops.errors.Description}
                </Text>

                <Button
                  title="Add medicine"
                  buttonStyle={styles.button}
                  containerStyle={styles.buttonContainer}
                  titleStyle={styles.buttonTitle}
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
    <View style={styles.container}>
      <Toast></Toast>
      <View style={styles.lottieView}>
        <LottieView
          style={styles.lottie}
          source={require('../../src/assets/animate/med_des.json')}
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