/* eslint-disable react/self-closing-comp */
import {Card} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons';
import styles from '../adherenceStyles/MedicineHistoryListStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MedicinehistoryList = props => {
  const {item, showimgfun, medName} = props;
  return (
    <>
      <Animatable.View animation="zoomInUp" duration={200}>
        <View key={item.medicine_name + '1'} style={styles.conatiner}>
          <Card key={item.medicine_name + '2'} style={styles.dateDay}>
            <View style={styles.card}>
              <View key={item.medicine_name + '3'} style={styles.cardText}>
                <Text key={item.medicine_name + '7'}>Date - {item.date}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={async () => {
                    let imgar = await AsyncStorage.getItem(
                      item.date + ' ' + medName,
                    );
                    showimgfun(JSON.parse(imgar));
                  }}>
                  <FontAwesomeIcon size={20} icon={faImage}></FontAwesomeIcon>
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        </View>
        {item.key.not_taken.map((nti: any) => {
          return (
            <View key={item.medicine_name + '4'} style={styles.notTaken}>
              <Text key={item.medicine_name + '5'}>{nti}</Text>
              <Text key={item.medicine_name + '6'} style={styles.notTakenText}>
                {' '}
                Not Taken
              </Text>
            </View>
          );
        })}
        {item.key.taken.map((tti: any) => {
          return (
            <View key={item.medicine_name + '12'} style={styles.taken}>
              <Text key={item.medicine_name + '22'}>{tti}</Text>
              <Text key={item.medicine_name + '23'} style={styles.takenText}>
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

export default MedicinehistoryList;
