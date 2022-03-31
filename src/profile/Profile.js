import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useRef, useCallback} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  faContactBook,
  faDroplet,
  faGenderless,
  faMarsAndVenus,
  faPerson,
  faRing,
  faSortNumericUp,
  faUser,
  faWeight,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Picker} from '@react-native-picker/picker';
import {TextInput} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {API_URL} from '@env';
import {Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './ProfileStyles';


const loginValidationSchema = yup.object().shape({
  Bio: yup.string().required('Bio is Required'),
  Contact: yup
    .string()
    .min(10, ({min}) => `Contact number must be ${min} characters`)
    .max(10, ({max}) => `Contact number can be only ${max} characters`)
    .required('Contact is Required'),
  Age: yup.string().min(2, ({min}) => `Age number must be ${min} characters`),
  Weight: yup
    .string()
    .min(2, ({min}) => `Weight must be at least ${min} characters`),
  Gender: yup
    .string()
    .min(3, ({min}) => `Gender must be at least ${min} characters`)
    .required(),
  MaritalStatus: yup
    .string()
    .min(3, ({min}) => `MaritalStatus must be at least ${min} characters`)
    .required(),
  BloodGroup: yup.string().required(),
});

const Profile = () => {
  const [index, setIndex] = React.useState(0);
  const [name, namestate] = React.useState({
    user: {name: 'Not logged in!', photo: '', email: ''},
  });
  const [img, imgstate] = React.useState('https://i.stack.imgur.com/l60Hf.png');
  const [snap, snapstate] = React.useState(0);

  const [user_bio, biostate] = React.useState('');
  const [user_contact, contactstate] = React.useState();
  const [user_weight, weightstate] = React.useState('');
  const [user_age, agestate] = React.useState();
  const [pickerValue, setPickerValue] = React.useState('');
  const [marriedpicker, setmarriedpicker] = React.useState('');
  const [user_gender, setgenderpicker] = React.useState('');
  const [editenabled, editstate] = React.useState(false);

  const Items = Array.from(Array(150).keys());

  const [selected, setSelected] = React.useState(0);

  const sheetRef = React.useRef(null);

  async function storeuserdetails(values) {
    await AsyncStorage.setItem('bio', values.Bio);
    await AsyncStorage.setItem('contact', values.Contact);
    await AsyncStorage.setItem('age', values.Age);
    await AsyncStorage.setItem('weight', values.Weight);
    await AsyncStorage.setItem('gender', values.Gender);
    await AsyncStorage.setItem('maritalstatus', values.MaritalStatus);
    await AsyncStorage.setItem('bloodgroup', values.BloodGroup);

    await AsyncStorage.getItem('bio');
    await AsyncStorage.getItem('contact');
    await AsyncStorage.getItem('age');
    await AsyncStorage.getItem('weight');
    await AsyncStorage.getItem('gender');
    await AsyncStorage.getItem('maritalstatus');
    await AsyncStorage.getItem('bloodgroup');

    await fetch(
      `${API_URL}/api/userdetails/updateuserdetails/1d3b1114-ae2a-4cb7-a235-89f1cf442b67`,
      {
        method: 'PUT',
        body: JSON.stringify({
          Bio: user_bio,
          Age: user_age,
          Contact: user_contact,
          Gender: user_gender,
          martial_status: marriedpicker,
          blood_group: pickerValue,
          weight: Items[selected],
        }),
      },
    )
      .then(resp => {
        if (resp.status == 200) return resp.json();
      })
      .then(res => {
        Toast.show({
          type: 'success',
          text1: 'Details saved',
        });
      });

    Toast.show({
      type: 'info',
      text1: 'Please fill details properly',
    });
  }

  useEffect(() => {
    async function getuser() {
      try {
        if (!(await GoogleSignin.isSignedIn())) {
          return;
        }
        const user = await GoogleSignin.getCurrentUser();
        console.log(user);

        namestate(user);
        imgstate(user.user.photo);
      } catch (err) {}
    }
    getuser();
  }, []);
  const renderItem = item => (
    <Text
      style={{
        width: 50,

        color: '#3743ab',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {item}
    </Text>
  );

  const itemWidth = 50;
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <ScrollView>
        <Toast visibilityTime={1500}></Toast>
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
            flexDirection: 'column',
            width: '100%',
          }}>
          <View style={styles.top}>
            <Image source={{uri: img}} style={styles.avatar}></Image>
            <View style={{alignItems: 'center', marginBottom: 8}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                {name.user.name}
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {name.user.email}
              </Text>
            </View>
          </View>
          {editenabled ? (
            <>
              <View style={{}}>
                <Formik
                  validationSchema={loginValidationSchema}
                  initialValues={{
                    Bio: '',
                    Contact: '',
                    Age: '',
                    Weight: '',
                    Gender: '',
                    MaritalStatus: '',
                    BloodGroup: '',
                  }}
                  onSubmit={values => storeuserdetails(values)}>
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                    touched,
                    setFieldValue,
                  }) => (
                    <View style={{backgroundColor: 'white', width: '99%'}}>
                      <TextInput
                        name="Bio"
                        label=" Bio"
                        mode="flat"
                        style={styles.textInput}
                        onChangeText={handleChange('Bio')}
                        onBlur={handleBlur('Bio')}
                        value={values.Bio}
                        left={
                          <TextInput.Icon
                            name={() => (
                              <FontAwesomeIcon
                                size={18}
                                icon={faUser}
                                color="#3743ab"></FontAwesomeIcon>
                            )}
                          />
                        }
                      />
                      {errors.Bio && touched.Bio && (
                        <Text style={styles.errorText}>{errors.Bio}</Text>
                      )}
                      <TextInput
                        name="Contact"
                        label=" Contact"
                        mode="flat"
                        keyboardType="numeric"
                        style={styles.textInput}
                        onChangeText={handleChange('Contact')}
                        onBlur={handleBlur('Contact')}
                        value={values.Contact}
                        left={
                          <TextInput.Icon
                            name={() => (
                              <FontAwesomeIcon
                                size={18}
                                icon={faContactBook}
                                color="#3743ab"></FontAwesomeIcon>
                            )}
                          />
                        }
                      />
                      {errors.Contact && touched.Contact && (
                        <Text style={styles.errorText}>{errors.Contact}</Text>
                      )}
                      <TextInput
                        name="Age"
                        label=" Age(in years)"
                        mode="flat"
                        keyboardType="numeric"
                        style={styles.textInput}
                        onChangeText={handleChange('Age')}
                        onBlur={handleBlur('Age')}
                        value={values.Age}
                        left={
                          <TextInput.Icon
                            name={() => (
                              <FontAwesomeIcon
                                size={18}
                                icon={faSortNumericUp}
                                color="#3743ab"></FontAwesomeIcon>
                            )}
                          />
                        }
                      />
                      {errors.Age && (
                        <Text style={styles.errorText}>{errors.Age}</Text>
                      )}
                      <TextInput
                        name="Weight"
                        label=" Weight(in kg)"
                        mode="flat"
                        keyboardType="numeric"
                        style={styles.textInput}
                        onChangeText={handleChange('Weight')}
                        onBlur={handleBlur('Weight')}
                        value={values.Weight}
                        left={
                          <TextInput.Icon
                            name={() => (
                              <FontAwesomeIcon
                                size={18}
                                icon={faWeight}
                                color="#3743ab"></FontAwesomeIcon>
                            )}
                          />
                        }
                      />
                      {errors.Weight && (
                        <Text style={styles.errorText}>{errors.Weight}</Text>
                      )}
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          marginLeft: 7,
                          borderBottomWidth: 1,
                          borderColor: 'lightgrey',
                          marginBottom: 8,
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            paddingLeft: 15,
                          }}>
                          <FontAwesomeIcon
                            size={18}
                            icon={faMarsAndVenus}
                            color="#3743ab"></FontAwesomeIcon>
                        </View>
                        <View style={styles.picker}>
                          <Picker
                            name="Gender"
                            mode="dropdown"
                            selectedValue={values.Gender}
                            onValueChange={itemchange =>
                              setFieldValue('Gender', itemchange)
                            }>
                            <Picker.Item
                              mode="outlined"
                              label="Gender"
                              value="Gender"
                              style={{color: 'grey'}}
                            />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Other" value="Other" />
                          </Picker>
                        </View>
                        <Text style={{color: 'red', alignSelf: 'center'}}>
                          {touched.Gender && errors.Gender}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          marginLeft: 7,
                          borderBottomWidth: 1,
                          borderColor: 'lightgrey',
                          marginBottom: 8,
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            paddingLeft: 15,
                          }}>
                          <FontAwesomeIcon
                            size={18}
                            icon={faRing}
                            color="#3743ab"></FontAwesomeIcon>
                        </View>
                        <View style={styles.picker}>
                          <Picker
                            name="MaritalStatus"
                            mode="dropdown"
                            selectedValue={values.MaritalStatus}
                            onValueChange={itemchange =>
                              setFieldValue('MaritalStatus', itemchange)
                            }>
                            <Picker.Item
                              mode="outlined"
                              label="MaritalStatus"
                              value="MaritalStatus"
                              style={{
                                color: 'grey',
                              }}
                            />

                            <Picker.Item label="Married" value="Married" />
                            <Picker.Item label="Unmarried" value="Unmarried" />
                          </Picker>
                        </View>
                        <Text style={{color: 'red', alignSelf: 'center'}}>
                          {touched.MaritalStatus && errors.MaritalStatus}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          marginLeft: 7,
                          borderBottomWidth: 1,
                          borderColor: 'lightgrey',
                          marginBottom: 8,
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            paddingLeft: 15,
                          }}>
                          <FontAwesomeIcon
                            size={18}
                            icon={faDroplet}
                            color="#3743ab"></FontAwesomeIcon>
                        </View>
                        <View style={styles.bgpicker}>
                          <Picker
                            name="BloodGroup"
                            mode="dropdown"
                            style={{
                              backgroundColor: 'white',
                              width: '100%',
                            }}
                            selectedValue={values.BloodGroup}
                            onValueChange={itemchange =>
                              setFieldValue('BloodGroup', itemchange)
                            }>
                            <Picker.Item
                              label="BloodGroup"
                              value="BloodGroup"
                              mode="outlined"
                              style={{color: 'grey'}}
                            />

                            <Picker.Item label="A+" value="A+" />
                            <Picker.Item label="A-" value="A" />
                            <Picker.Item label="B+" value="B+" />
                            <Picker.Item label="B-" value="B-" />
                            <Picker.Item label="O+" value="O+" />
                            <Picker.Item label="O-" value="O-" />
                            <Picker.Item label="AB+" value="AB+" />
                            <Picker.Item label="AB-" value="AB-" />
                          </Picker>
                        </View>
                        <Text style={{color: 'red', alignSelf: 'center'}}>
                          {touched.BloodGroup && errors.BloodGroup}
                        </Text>
                      </View>
                      <View style={{paddingBottom: 20}}>
                        <Button
                          onPress={handleSubmit}
                          title="SAVE"
                          buttonStyle={{
                            backgroundColor: '#3743ab',
                            width: 300,
                            marginTop: 8,
                            borderRadius: 30,
                          }}
                          containerStyle={{alignItems: 'center'}}
                          disabled={!isValid}
                        />
                      </View>
                    </View>
                  )}
                </Formik>
              </View>
            </>
          ) : (
            <Button
              title="Edit profile"
              buttonStyle={{
                backgroundColor: '#3743ab',
                width: 300,
                marginTop: 86,
                borderRadius: 30,
              }}
              containerStyle={{alignItems: 'center'}}
              onPress={() => editstate(true)}></Button>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;