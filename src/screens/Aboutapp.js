import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assests/Medstick_1.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Medicine Adherence app which allows user to use medicine, reminder,
          caretaker, patient, report and more features and never skip their
          medications.
        </Text>
      </View>
    </View>
  );
};

export default About;

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');
const height_logo = height * 0.35;
const width_logo = width * 1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: height_logo,
    width: width_logo,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    marginTop: 30,
    paddingLeft: 4,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
});
