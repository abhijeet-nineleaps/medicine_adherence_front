/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
import ProgressCircle from 'react-native-progress-circle';
import {LogBox} from 'react-native';
import {Button} from 'react-native-elements';
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
      // const user_id = await AsyncStorage.getItem('user_id');

      await fetch(`${API_URL}/api/v1/user?userId=${user_id}`)
        .then(resp => resp.json())
        .then(res => {
          console.log(res);
          console.log(res.userEntityList[0].userDetails);
          userdetailsstate(res);
          progress_status(false);
        });
    }
    getuserdetails();
  }, []);

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      {progress ? (
        <View
          style={{
            height: '100%',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Progress.Circle size={80} indeterminate={true} />
          <Text>Fetching User Details</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.top}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{paddingLeft: 5, paddingTop: 9}}>Name</Text>
                <Text style={{color: 'black', padding: 5, fontSize: 17}}>
                  {userdetails.userEntityList[0].userName}
                </Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: userdetails.userEntityList[0].userDetails.picPath,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.2,
              }}
            />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Bio</Text>

              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.bio}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.3,
              }}
            />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Contact Number</Text>

              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.usercontact}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.2,
              }}
            />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Email Id</Text>
              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].email}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.3,
              }}
            />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Gender</Text>

              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.gender}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.3,
              }}
            />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Blood Group</Text>

              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.bloodGroup}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.3,
              }}
            />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Marital Status</Text>
              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.martialStatus}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.3,
              }}
            />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Age(in yrs)</Text>
              <Text style={styles.itemright}>
                {userdetails.userEntityList[0].userDetails.age}
              </Text>
            </View>
            <View style={{}}>
              <View>
                <List.Section style={{backgroundColor: 'white'}}>
                  <List.Accordion
                    title="Medicines"
                    titleStyle={{
                      //   marginLeft: 20,
                      fontSize: 15,
                      fontWeight: '500',
                    }}
                    left={props => (
                      <FontAwesomeIcon
                        size={16}
                        icon={faKitMedical as IconProp}
                        color="black"
                        style={{marginLeft: 8}}
                      />
                    )}
                    right={props => (
                      <FontAwesomeIcon
                        icon={faCaretDown as IconProp}></FontAwesomeIcon>
                    )}>
                    {userdetails.medicinesList.map((mlistitem,index) => {
                      console.log(mlistitem.medicineId)
                      return (
                        <List.Item
                          description={`${mlistitem.days}\n${mlistitem.time}`}
                          style={{
                            padding: 17,
                            alignItems: 'center',
                            height: 110,
                            justifyContent: 'center',
                          }}
                          titleStyle={styles.listitem}
                          right={() => {
                            return (
                              <>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                  }}>
                                  <ProgressCircle
                                    percent={
                                      (mlistitem.currentCount /
                                        mlistitem.totalMedReminders) *
                                      100
                                    }
                                    radius={23}
                                    borderWidth={3}
                                    color="#00bcd4"
                                    shadowColor="#999"
                                    bgColor="#ffff">
                                    <Text
                                      style={{fontSize: 15, color: '#00bcd4'}}>
                                      {Math.round(
                                        (mlistitem.currentCount /
                                          mlistitem.totalMedReminders) *
                                          100,
                                      ) + '%'}
                                    </Text>
                                  </ProgressCircle>
                                  <TouchableOpacity
                                    style={{
                                      margin: 12,
                                      backgroundColor: '#3743ab',
                                      borderRadius: 40,
                                      width: 45,
                                      height: 45,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                    onPress={() => {
                                      console.log(mlistitem.medicineName);
                                      sendnotificationtouser(
                                        userdetails.userEntityList[0]
                                          .userDetails.fcmToken,
                                        mlistitem.medicineName,
                                      );
                                    }}>
                                    <FontAwesomeIcon
                                      icon={faBell as IconProp}
                                      size={25}
                                      color="white"></FontAwesomeIcon>
                                  </TouchableOpacity>
                                </View>
                              </>
                            );
                          }}
                          onPress={() => {
                            let id = mlistitem.medicineId;
                            navigation.navigate('Patient report', {
                              medId: id,
                              adherenceRate:Math.round(
                                (mlistitem.currentCount /
                                  mlistitem.totalMedReminders) *
                                  100)
                            });
                          }}
                          title={mlistitem.medicineName}></List.Item>
                      );
                    })}
                  </List.Accordion>
                </List.Section>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '100%',
  },
  icon: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 110,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 12,
  },
  itemleft: {},
  itemright: {
    color: 'black',
    width: 200,
  },
  listitem: {
    fontSize: 14,
    marginTop: -13,
  },
});

export default ViewProfile;
