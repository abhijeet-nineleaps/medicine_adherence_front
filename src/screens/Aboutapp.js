import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const About = () => {
  const {height} = Dimensions.get('screen');
  const {width} = Dimensions.get('screen');
  const height_logo = height * 0.35;
  const width_logo = width * 1;

  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: height_logo, width: width_logo}}
          source={require('../../assests/Medstick_1.png')}
          resizeMode="stretch"
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            marginTop: 30,
            paddingLeft: 4,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'gray',
          }}>
          Medicine Adherence app which allows user to use medicine, reminder,
          caretaker, patient, report and more features and never skip their
          medications.
        </Text>
      </View>
    </View>
  );
};

export default About;
