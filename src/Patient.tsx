/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Mypatient from './patient/Mypatients';
import Patientrequest from './patient/Patientrequest';
import {Tab, TabView} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserFriends, faHospitalUser} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useFocusEffect} from '@react-navigation/native';
import {Alert} from 'react-native';

const Patientcomp = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const Iconcomp1 = () => {
    return (
      <FontAwesomeIcon
        style={{marginBottom: 6}}
        color="#3743ab"
        icon={faHospitalUser as IconProp}></FontAwesomeIcon>
    );
  };

  const Iconcomp2 = () => {
    return (
      <FontAwesomeIcon
        style={{marginBottom: 6}}
        color="#3743ab"
        icon={faUserFriends as IconProp}></FontAwesomeIcon>
    );
  };

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: '#3743ab',
          height: 3,
        }}
        style={{backgroundColor: '#3743ab'}}
        variant="primary">
        <Tab.Item
          title="My Patients"
          containerStyle={{backgroundColor: 'white'}}
          titleStyle={{fontSize: 12, color: '#3743ab'}}
          icon={Iconcomp1}
        />
        <Tab.Item
          title="Patient Request"
          titleStyle={{fontSize: 12, color: '#3743ab'}}
          containerStyle={{backgroundColor: 'white'}}
          icon={Iconcomp2}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Mypatient navigation={navigation}></Mypatient>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Patientrequest></Patientrequest>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default Patientcomp;
