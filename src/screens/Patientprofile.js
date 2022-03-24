import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faKitMedical,
  faUser,
  faDroplet,
  faUserGroup,
  faListNumeric,
  faSortNumericUp,
  faBell,
  faWeight,
  faContactCard,
  faAddressBook,
  faPhone,
  faIdBadge,
} from '@fortawesome/free-solid-svg-icons';
import {List} from 'react-native-paper';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';


const ViewProfile = () => {

  const [userdetails , userdetailsstate] = React.useState();
  const [progress , progress_status] = React.useState(true);

  const sendnotificationtouser = async (fcm_token) => {
    let url = new URL(`${API_URL}/api/caretaker/notifyuser`);
    url.searchParams.append('fcm_token', fcm_token);
   
      await fetch(url)
      .then(resp=>console.log(resp))

  }

  React.useEffect(()=>{

    async function getuserdetails(){
      const user_id = await AsyncStorage.getItem('user_id');

    await  fetch(`${API_URL}/api/user/getuser/`+user_id)
      .then(resp=>resp.json())
      .then(res=>{
        console.log(res);
        console.log(res.userEntityList[0].userDetails);
        userdetailsstate(res)
        progress_status(false)
      });
    }
    getuserdetails();
   

  },[])



  return (
    <View style={{height:'100%',backgroundColor:'white'}}>
   {
progress ? 
<View style={{height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>

<Progress.Circle size={80} indeterminate={true} />
<Text>Fetching User Details</Text>
</View>
 : 
<View style={styles.container}>
      <Card style={{elevation: 2, borderRadius: 14}}>
        <View style={styles.top}>
          <View>
            <Image
              style={styles.icon}
              // source={require('../../assests/patient.jpg')}
              source={{
                uri: userdetails.userEntityList[0].userDetails.pic_path,
              }}
            />
          </View>
          <View style={styles.toptext}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: 'black',
                marginBottom: 3,
              }}>
            {userdetails.userEntityList[0].user_name}
            </Text>
            <Text style={{color: 'grey', marginBottom: 3}}>
           {userdetails.userEntityList[0].email}
            </Text>
            <Text style={{color: 'grey'}}>{userdetails.userEntityList[0].userDetails.usercontact}</Text>
          </View>
          {/* <FontAwesomeIcon
            style={{marginLeft: 30, marginTop: 30, color: '#ff8f00'}}
            size={30}
            icon={faBell}
          /> */}
        </View>
      </Card>

      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 10,
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 10,
          }}>
          <FontAwesomeIcon
            icon={faUser}
            size={20}
            color="black"
            style={{marginTop: 3}}
          />
          <Text
            style={{
              marginLeft: 30,
              fontSize: 18,
              color: '#78909c',
              fontWeight: '400',
            }}>
            {userdetails.userEntityList[0].userDetails.bio}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 10,
            marginLeft: 10,
            marginBottom: 10,
          }}>
          <FontAwesomeIcon
            icon={faSortNumericUp}
            size={20}
            color="black"
            style={{marginTop: 2}}
          />
          <Text
            style={{
              marginLeft: 30,
              fontSize: 18,
              color: '#78909c',
              fontWeight: '400',
            }}>
 {userdetails.userEntityList[0].userDetails.age}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 10,
            marginLeft: 10,
            marginBottom: 10,
          }}>
          <FontAwesomeIcon
            icon={faDroplet}
            size={20}
            color="black"
            style={{marginTop: 2}}
          />
          <Text
            style={{
              marginLeft: 30,
              fontSize: 18,
              color: '#78909c',
              fontWeight: '400',
            }}>
{userdetails.userEntityList[0].userDetails.blood_group}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 10,
            marginLeft: 10,
            marginBottom: 10,
          }}>
          <FontAwesomeIcon
            icon={faUserGroup}
            size={20}
            color="black"
            style={{marginTop: 2}}
          />
          <Text
            style={{
              marginLeft: 30,
              fontSize: 18,
              color: '#78909c',
              fontWeight: '400',
            }}>
 {userdetails.userEntityList[0].userDetails.martial_status}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 10,
            marginLeft: 10,
            marginBottom: 10,
          }}>
          <FontAwesomeIcon
            icon={faWeight}
            size={20}
            color="black"
            style={{marginTop: 2}}
          />
          <Text
            style={{
              marginLeft: 30,
              fontSize: 18,
              color: '#78909c',
              fontWeight: '400',
            }}>
{userdetails.userEntityList[0].userDetails.weight}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 10,
            marginLeft: 10,
            marginBottom: 10,
          }}>
          <FontAwesomeIcon
            icon={faPhone}
            size={20}
            color="black"
            style={{marginTop: 2}}
          />
          <Text
            style={{
              marginLeft: 30,
              fontSize: 18,
              color: '#78909c',
              fontWeight: '400',
            }}>
{userdetails.userEntityList[0].userDetails.usercontact}
          </Text>
        </View>
        <View style={styles.userDetails}>
          <List.Section style={{backgroundColor: 'white'}}>
            <List.Accordion
              title="Medicine 1"
              titleStyle={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: '500',
              }}
              left={props => (
                <FontAwesomeIcon
                  size={20}
                  icon={faKitMedical}
                  color="black"
                  style={{marginLeft: 14}}
                />
              )}>
              <List.Item
                titleStyle={styles.listitem}
                title="Medicine 1"
                right={() => (
                  <TouchableOpacity
                    onPress={() => Alert.alert('Sending Notification...')}>
                    <FontAwesomeIcon
                      icon={faBell}
                      size={28}
                      style={{marginRight: 10, color: '#ff8f00'}}
                    />
                  </TouchableOpacity>
                )}
              />
              <List.Item
                titleStyle={styles.listitem}
                title="Medicine 1"
                right={() => (
                  <TouchableOpacity
                    onPress={() => sendnotificationtouser(userdetails.userEntityList[0].userDetails.fcm_token)}>
                    <FontAwesomeIcon
                      icon={faBell}
                      size={28}
                      style={{marginRight: 10, color: '#ff8f00'}}
                    />
                  </TouchableOpacity>
                )}
              />
            </List.Accordion>
          </List.Section>
          <View style={{height: 1, backgroundColor: 'lightgrey'}} />
        </View>
      </ScrollView>
    </View>

   }
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  top: {
    flexDirection: 'row',
    marginLeft: 15,
    marginBottom: 30,
  },
  icon: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginTop: 20,
  },
  toptext: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  userDetails: {
    flex: 1,
    backgroundColor: 'white',
  },
  listitem: {
    marginLeft: 20,
    color: '#78909c',
  },
});

export default ViewProfile;