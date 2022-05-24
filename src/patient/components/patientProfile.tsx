/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faCaretDown,
  faKitMedical,
} from '@fortawesome/free-solid-svg-icons';
import {List} from 'react-native-paper';
import {API_URL} from '@env';
import * as Progress from 'react-native-progress';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {LogBox} from 'react-native';
import {Button} from 'react-native-elements';
import styles from '../patientStyles/patientProfileStyles';

LogBox.ignoreLogs(['Require cycle:']);

const ViewProfile = ({route, navigation}) => {
  const {user_id} = route.params;
  const [userdetails, userdetailsstate] = React.useState<any>();
  const [progress, progress_status] = React.useState(true);
  const sendnotificationtouser = async (fcm_token: any, medname: any) => {
    let url: any = new URL(`${API_URL}/api/v1/notifyuser`);
    url.searchParams.append('fcmToken', fcm_token);
    url.searchParams.append('medname', medname);

    await fetch(url).then(resp => console.log(resp));
  };

  React.useEffect(() => {
    async function getuserdetails() {
      await fetch(`${API_URL}/api/v1/user?userId=${user_id}`)
        .then(resp => resp.json())
        .then(res => {
          console.log(res,'ress');
          userdetailsstate(res);
          progress_status(false);
        });
    }
    getuserdetails();
  }, []);

  return (
    <View style={styles.container}>
      {progress ? (
        <View style={styles.conatiner1}>
          <Progress.Circle size={80} indeterminate={true} />
          <Text>Fetching User Details</Text>
        </View>
      ) : (
        <View style={styles.container2}>
          <ScrollView>
            <View style={styles.top}>
              <View style={styles.nameView}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.nameText}>
                  {userdetails.userEntityList[0].userName}
                </Text>
              </View>
              <View style={styles.iconView}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: userdetails.userEntityList[0].userDetails.picPath,
                  }}
                />
              </View>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Bio</Text>

              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.bio}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Contact Number</Text>

              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.usercontact}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Email Id</Text>
              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].email}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Gender</Text>

              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.gender}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Blood Group</Text>

              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.bloodGroup}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Marital Status</Text>
              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.martialStatus}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Age(in yrs)</Text>
              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.age}
              </Text>
            </View>
            <View>
              <List.Section style={styles.list}>
                <List.Accordion
                  title="Medicines"
                  titleStyle={styles.medTitle}
                  left={() => (
                    <FontAwesomeIcon
                      size={16}
                      icon={faKitMedical as IconProp}
                      color="black"
                      style={styles.medIcon}
                    />
                  )}
                  right={() => (
                    <FontAwesomeIcon
                      icon={faCaretDown as IconProp}></FontAwesomeIcon>
                  )}>
                  {userdetails.medicinesList.map(mlistitem => {
                    console.log(mlistitem.medicineId);
                    return (
                      <List.Item
                        description={`${mlistitem.days}\n${mlistitem.time}`}
                        style={styles.listItem}
                        titleStyle={styles.listTitle}
                        right={() => {
                          return (
                            <>
                              <View style={styles.medContainerRight}>
                                <Button
                                  title="Images"
                                  onPress={() =>
                                    navigation.navigate('Images', {
                                      medId: mlistitem.medicineId,
                                    })
                                  }></Button>
                                <TouchableOpacity
                                  style={styles.touch}
                                  onPress={() => {
                                    console.log(mlistitem.medicineName);
                                    sendnotificationtouser(
                                      userdetails.userEntityList[0].userDetails
                                        .fcmToken,
                                      mlistitem.medicineName,
                                    );
                                  }}>
                                  <FontAwesomeIcon
                                    icon={faBell as IconProp}
                                    size={25}
                                    color="#00bcd4"></FontAwesomeIcon>
                                </TouchableOpacity>
                              </View>
                            </>
                          );
                        }}
                        onPress={() => {
                          let id = mlistitem.medicineId;
                          navigation.navigate('Patient report', {
                            medId: id,
                            adherenceRate: Math.round(
                              (mlistitem.currentCount /
                                mlistitem.totalMedReminders) *
                                100,
                            ),
                            medName: mlistitem.medicineName,
                            medDays: mlistitem.days,
                            mTimes: mlistitem.time,
                            mstartDate: mlistitem.startDate,
                            mendDate: mlistitem.endDate,
                            mcc: mlistitem.currentCount,
                          });
                        }}
                        title={mlistitem.medicineName}></List.Item>
                    );
                  })}
                </List.Accordion>
              </List.Section>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default ViewProfile;
