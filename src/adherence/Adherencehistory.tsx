import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Picker} from '@react-native-picker/picker';
import {Divider} from 'react-native-elements';
import {Card} from 'react-native-paper';

const data = [{}];

const Reminders = () => {
  return (
    <>
      <View
        style={{
          padding: 4,
          marginBottom:15
        }}>
        <Card style={styles.dateday}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>Date - 27-03-2022 </Text>
            <Text>Day - Sunday</Text>
          </View>
        </Card>
      </View>
      {/* add flatlist here in this view */}
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>10 AM </Text>
        <Text style={{color: 'red'}}> Missed</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>2 PM </Text>
        <Text style={{color: 'green'}}> Taken</Text>
      </View>
    </>
  );
};

const MyComponent:React.FC = () => {
  const [selectedMedicine, setSelectedMedicine] = React.useState();
  const [pickerValue, setPickerValue] = React.useState();

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{width: '100%', borderColor: 'lightgrey', borderEndWidth: 1}}>
          <Picker
            mode="dropdown"
            style={{
              backgroundColor: 'white',
              borderColor: 'lightgrey',
              borderWidth: 3,
              color: 'black',
              elevation: 3,
            }}
            selectedValue={pickerValue}
            onValueChange={itemValue => setPickerValue(itemValue)}>
            <Picker.Item label="All Reminders" value="All Reminders" />
            <Picker.Item label="Aspirin" value="Medicine 1" />
            <Picker.Item label="PCM suspension 400ml" value="Medicine 2" />
            <Picker.Item label="Brufen 400" value="Medicine 3" />
          </Picker>
        </View>
       
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 7,
        }}>
        <View style={{left: 10}}>
          <Text style={{color: 'black', fontSize: 18, marginTop: 30}}>
            Overall Performance{' '}
          </Text>
        </View>
        <View style={{alignItems: 'center', paddingRight: 20, margin: 10}}>
          <ProgressCircle
            percent={30}
            radius={35}
            borderWidth={3}
            color="#4dd0e1"
            bgColor="#fff">
            <Text style={{fontSize: 18, color: '#4dd0e1'}}>
              {'30%'}
            </Text>
          </ProgressCircle>
        </View>
      </View>
      <Divider />
      <View
        style={{
          padding: 15,
          backgroundColor: 'lightgrey',
          marginBottom: 5,
        }}>
        <Text style={{fontWeight: '600'}}> Detailed Report</Text>
      </View>
      <ScrollView>
        <Reminders />
        <Reminders />
      </ScrollView>
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
    borderRadius: 25,
    elevation: 2,
    padding: 10,
    paddingLeft: 20,
  },
});

export default MyComponent;