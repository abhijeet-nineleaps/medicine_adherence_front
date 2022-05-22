/* eslint-disable react/self-closing-comp */
import React from 'react';
import Mypatient from './components/Mypatients';
import Patientrequest from './components/Patientrequest';
import {Tab, TabView} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserFriends, faHospitalUser} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import styles from './patientStyles/PatientStyles';

const Patientcomp = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const Iconcomp1 = () => {
    return (
      <FontAwesomeIcon
        style={styles.icon}
        color="#3743ab"
        icon={faHospitalUser as IconProp}></FontAwesomeIcon>
    );
  };

  const Iconcomp2 = () => {
    return (
      <FontAwesomeIcon
        style={styles.icon}
        color="#3743ab"
        icon={faUserFriends as IconProp}></FontAwesomeIcon>
    );
  };

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.tabIndicator}
        style={styles.tab}
        variant="primary">
        <Tab.Item
          title="My Patients"
          containerStyle={styles.tabItem}
          titleStyle={styles.tabTitle}
          icon={Iconcomp1}
        />
        <Tab.Item
          title="Patient Request"
          titleStyle={styles.tabTitle}
          containerStyle={styles.tabItem}
          icon={Iconcomp2}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.tabItems}>
          <Mypatient navigation={navigation}></Mypatient>
        </TabView.Item>
        <TabView.Item style={styles.tabItems}>
          <Patientrequest></Patientrequest>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default Patientcomp;
