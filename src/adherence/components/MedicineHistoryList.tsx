/* eslint-disable react-native/no-inline-styles */
import {Card} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const MedicinehistoryList = ({item}: any) => {
  return (
    <>
      <Animatable.View animation="zoomInUp" duration={200}>
        <View
          key={item.medicine_name + '1'}
          style={{
            padding: 4,
            marginBottom: 15,
          }}>
          <Card key={item.medicine_name + '2'} style={styles.dateday}>
            <View
              key={item.medicine_name + '3'}
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text key={item.medicine_name + '7'}>Date - {item.date}</Text>
            </View>
          </Card>
        </View>
        {item.key.not_taken.map((nti: any) => {
          return (
            <View
              key={item.medicine_name + '4'}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 12,
                marginLeft: 7,
              }}>
              <Text key={item.medicine_name + '5'}>{nti}</Text>
              <Text key={item.medicine_name + '6'} style={{color: 'red'}}>
                {' '}
                Not Taken
              </Text>
            </View>
          );
        })}
        {item.key.taken.map((tti: any) => {
          return (
            <View
              key={item.medicine_name + '12'}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 12,
              }}>
              <Text key={item.medicine_name + '22'}>{tti}</Text>
              <Text key={item.medicine_name + '23'} style={{color: 'green'}}>
                {' '}
                Taken
              </Text>
            </View>
          );
        })}
      </Animatable.View>
    </>
  );
};

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
    borderRadius: 6,
    elevation: 2,
    padding: 10,
    paddingLeft: 20,
    marginTop: 8,
  },
});

export default MedicinehistoryList;
