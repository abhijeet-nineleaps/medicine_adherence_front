import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useRef, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {
  faAngleDown,
  faAngleUp,
  faCaretDown,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Picker as Picks} from '@react-native-picker/picker';
import {TextInput} from 'react-native-paper';
import ValuePicker from 'react-native-picker-horizontal';
import Toast from 'react-native-toast-message';
import {API_URL} from '@env';
import { Button } from 'react-native-elements';

const Profile = () => {
  const [index, setIndex] = React.useState(0);
  const [name, namestate] = React.useState({
    user: {name: 'Not logged in!', photo: '',email:''},
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
  const [editenabled , editstate] = React.useState(false);

  const Items = Array.from(Array(150).keys());


  const [selected, setSelected] = React.useState(0);

  const sheetRef = React.useRef(null);

  async function storeuserdetails() {
if(user_bio.length !== 0 || user_contact.isNaN() || user_age.isNaN() ||
  pickerValue.length !== 0 || marriedpicker.length !== 0 || user_gender.length !== 0){

  await fetch(
    `${API_URL}/api/userdetails/updateuserdetails/1d3b1114-ae2a-4cb7-a235-89f1cf442b67`,
    {
      method: 'PUT',
      body: JSON.stringify({
        bio:user_bio,
        age:user_age,
        usercontact:user_contact,
        gender:user_gender,
        martial_status:marriedpicker,
        blood_group:pickerValue,
        weight:Items[selected]
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
}else{
  Toast.show({
    type: 'info',
    text1: 'Please fill details properly',
  });
}
    
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
  const styles = StyleSheet.create({
    avatar: {
      width: 170,
      height: 170,
      borderRadius: 83,
      borderWidth: 4,
      borderColor: 'white',
      marginBottom: 10,
      alignSelf: 'center',
      marginTop: 50,
      marginBottom: 40,
    },
    name: {
      fontSize: 22,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    body: {
      marginTop: 40,
      height: '100%',
      justifyContent: 'space-between',
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding: 30,
      justifyContent: 'space-between',
    },
    name: {
      fontSize: 28,
      color: '#696969',
      fontWeight: '600',
    },
    info: {
      fontSize: 16,
      color: '#00BFFF',
      marginTop: 10,
    },
    description: {
      fontSize: 16,
      color: '#696969',
      marginTop: 10,
      textAlign: 'center',
    },
    buttonContainer: {
      marginTop: 10,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: '#00BFFF',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    container: {
      flex: 1,
      padding: 24,
      height: '100%',
      backgroundColor: 'white',
    },
    pickercontainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
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
          <View style={{backgroundColor: '#3743ab', marginBottom: 12,justifyContent:'center',alignItems:'center'
                       ,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
            <Image source={{uri: img}} style={styles.avatar}></Image>
            <View style={{alignItems:'center',marginBottom:8}}>
  <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>{name.user.name}</Text>
  <Text style={{color:'white',fontWeight:'bold'}}>{name.user.email}</Text>
  </View>
          </View>
{
  editenabled ? <View style={{}}>

  <TextInput
            nam="Bio"
            label="Bio"
            mode="outlined"
            onChangeText={val => biostate(val)}
            style={{margin: 10, backgroundColor: 'white'}}
          />

          <TextInput
            name="Contact"
            label="Contact"
            keyboardType="numeric"
            minLength={10}
            maxLength={10}
            mode="outlined"
            onChangeText={val => contactstate(val)}
            style={{margin: 10, backgroundColor: 'white'}}
          />

          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <TextInput
                  name="Age"
                  type="number"
                  onChangeText={val => agestate(val)}
                  keyboardType="numeric"
                  maxLength={3}
                  label="Age(in years)"
                  mode="outlined"
                  style={{
                    justifyContent: 'flex-end',
                    margin: 10,
                    backgroundColor: 'white',
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{height: 120, width: '100%'}}>
            <Text style={{marginLeft: 9, fontWeight: '700'}}>
              How much do you weigh?
            </Text>
            <ValuePicker
              style={styles.pickercontainer}
              data={Items}
              renderItem={renderItem}
              itemWidth={50}
              initialIndex={1}
              onChange={index => setSelected(index)}></ValuePicker>
            <Text
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 190,
              }}>
              kg
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.4,
              borderColor: 'black',
              borderRadius: 4,
              margin: 10,
            }}>
            
            <Picks
              name="BloodGroup"
              mode="dropdown"
              style={{backgroundColor: 'white', borderColor: '#3743ab'}}
              selectedValue={marriedpicker}
              onValueChange={itemValue => setmarriedpicker(itemValue)}>
              <Picks.Item label="Married" value="Married" />
              <Picks.Item label="Unmarried" value="Unmarried" />
            </Picks>
          </View>
          <View
            style={{
              borderWidth: 0.4,
              borderColor: 'black',
              borderRadius: 4,
              margin: 10,
            }}>
            <Picks
              name="Gender"
              mode="dialog"
              style={{backgroundColor: 'white', borderColor: '#3743ab'}}
              selectedValue={marriedpicker}
              onValueChange={itemValue => setmarriedpicker(itemValue)}>
              <Picks.Item
                label="Gender"
                value="Gender"
                style={{backgroundColor: '#3743ab'}}
              />

              <Picks.Item label="Male" value="Male" />
              <Picks.Item label="Female" value="Female" />
            </Picks>
          </View>

          <View
            style={{
              borderWidth: 0.4,
              borderColor: 'black',
              borderRadius: 4,
              margin: 10,
            }}>
            <Picks
              name="BloodGroup"
              mode="dropdown"
              style={{backgroundColor: 'white', borderColor: '#3743ab'}}
              selectedValue={pickerValue}
              onValueChange={itemValue => setPickerValue(itemValue)}>
              <Picks.Item label="A+" value="A+" />
              <Picks.Item label="A-" value="A-" />
              <Picks.Item label="B+" value="B+" />
              <Picks.Item label="B-" value="B-" />
              <Picks.Item label="AB+" value="AB+" />
              <Picks.Item label="AB-" value="AB-" />
              <Picks.Item label="O+" value="O+" />
              <Picks.Item label="O-" value="O-" />
            </Picks>
          </View>

  </View> : <Button title="Edit profile" 
                    buttonStyle={{backgroundColor:'#3743ab',width:300,marginTop:86,borderRadius:30}}
                    containerStyle={{alignItems:'center'}}
                    onPress={()=>editstate(true)}></Button>
}
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
