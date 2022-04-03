import React from 'react';
import {Text, View} from 'react-native';
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
import styles from './ProfileStyles';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import { Icon } from 'react-native-vector-icons/Icon';


const SavedDetails = () => {
  return (
    <View style={styles.sd}>
      <View style={styles.sdContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon
            size={18}
            icon={faUser as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>Bio - We are Developers</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon
            size={18}
            icon={faContactBook as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>Contact - 8725952854</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon
            size={18}
            icon={faSortNumericUp as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>Age - 20</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon
            size={18}
            icon={faWeight as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>Weight - 60</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon
            size={18}
            icon={faMarsAndVenus as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>Gender - Male</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon
            size={18}
            icon={faRing as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>MaritalStatus - Unmarried</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon
            size={18}
            icon={faDroplet as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>BloodGroup - AB+</Text>
        </View>
      </View>
    </View>
  );
};

export default SavedDetails;