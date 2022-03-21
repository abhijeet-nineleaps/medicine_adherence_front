import * as React from 'react';
import {View, Text, Button, Alert, TouchableOpacity} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Divider} from 'react-native-elements';
import {faClock, faTrashCan,faBarsProgress,faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Reminder = ({navigation}) => {
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column', margin: 10}}>
          <Text style={{color: 'black', fontWeight: '600',marginBottom:7}}>
            Pcm suspension 450ml
          </Text>
          <Text style={{marginBottom:7}}>Medicine</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>Everyday</Text>
            <Text> | </Text>
            <Text>10 AM, 2 PM, 6 PM</Text>
          </View>
        </View>
        <View style={{padding: 30}}>
          <TouchableOpacity
            onPress={() => {}}>
<FontAwesomeIcon icon={faCircleCheck} color='#4dd0e1'></FontAwesomeIcon>
          </TouchableOpacity>
        </View>
      </View>
      <Divider style={{marginTop: 15}} />
    </>
  );
};

const Medicineadherence = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View style={{paddingTop: 15, paddingLeft: 15, marginLeft: 18}}>
              <ProgressCircle
                percent={0}
                radius={26}
                borderWidth={3}
                color="#4dd0e1"
                shadowColor="#999"
                bgColor="#fff">
                <Text style={{fontSize: 15, color: '#4dd0e1'}}>{'0%'}</Text>
              </ProgressCircle>
            </View>
            <View
              style={{
                flexDirection: 'column',
                paddingLeft: 30,
                paddingTop: 15,
              }}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>
                Performance for past 7 days
              </Text>
              <Text>You have some active reminders.</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', paddingBottom: 10}}>
            <Text style={{color: '#4dd0e1', fontWeight: '700'}}>
              CHECK PERFORMANCE
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          padding: 12,
          backgroundColor: 'lightgrey',
          marginBottom: 5,
        }}>
        <Text style={{fontWeight: '600'}}>Current</Text>
      </View>
      <Reminder navigation={navigation} />
      <Reminder navigation={navigation} />
      {/* <Divider width={1} style={{marginTop: 15}} /> */}
      <View style={{right: 10, left: 10, position: 'absolute', bottom: 10}}>
     
      </View>
    </View>
  );
};
export default Medicineadherence;
