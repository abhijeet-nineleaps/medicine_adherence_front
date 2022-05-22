import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import styles from "./screenStyles/aboutAppStyles";

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


