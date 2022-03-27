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


const ViewProfile = ({route}) => {
  
  const {user_id} = route.params;
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
     // const user_id = await AsyncStorage.getItem('user_id');

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
      <ScrollView>
        <View style={styles.top}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{paddingLeft: 5, paddingTop: 9}}>Name</Text>
            <Text style={{color: 'black', padding: 5, fontSize: 17}}>
              {userdetails.userEntityList[0].user_name}
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://images-ext-1.discordapp.net/external/k4FTtIoLR5PzsbEw7nJqEeOMPamb7bjR-orTFlOqJSM/https/lh3.googleusercontent.com/a-/AOh14Gg1r55ukyjleOVcBDEuTUt283ClmJE4ZSeFOSmD%3Ds96-c',
              }}
            />
          </View>
        </View>
        <Divider width={1} />
        <View style={styles.items}>
          <Text style={styles.itemleft}>Bio</Text>

          <Text style={styles.itemright}>{userdetails.userEntityList[0].userDetails.bio}</Text>
        </View>
        <Divider width={0.6} />
        <View style={styles.items}>
          <Text style={styles.itemleft}>Contact Number</Text>

          <Text style={styles.itemright}>{userdetails.userEntityList[0].userDetails.usercontact}</Text>
        </View>
        <Divider width={0.6}/>
        <View style={styles.items}>
          <Text style={styles.itemleft}>Email Id</Text>
          <Text style={styles.itemright}>{userdetails.userEntityList[0].email}</Text>
        </View>
        <Divider width={0.6} />
        <View style={styles.items}>
          <Text style={styles.itemleft}>Gender</Text>

          <Text style={styles.itemright}>{userdetails.userEntityList[0].userDetails.gender}</Text>
        </View>
        <Divider width={0.6} />
        <View style={styles.items}>
          <Text style={styles.itemleft}>Blood Group</Text>

          <Text style={styles.itemright}>{userdetails.userEntityList[0].userDetails.blood_group}</Text>
        </View>
        <Divider width={0.6} />
        <View style={styles.items}>
          <Text style={styles.itemleft}>Marital Status</Text>
          <Text style={styles.itemright}>{userdetails.userEntityList[0].userDetails.martial_status}</Text>
        </View>
        <Divider width={0.6} />
        <View style={styles.items}>
          <Text style={styles.itemleft}>Weight( i Kg)</Text>
          <Text style={styles.itemright}>{userdetails.userEntityList[0].userDetails.weight}</Text>
        </View>
        <Divider width={0.6} />
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
                    icon={faKitMedical}
                    color="black"
                    style={{marginLeft: 8}}
                  />
                )}>
                <List.Item titleStyle={styles.listitem} title="Brufen 400mg" />
                <List.Item
                  titleStyle={styles.listitem}
                  title="PCM suspension 450ml"
                />
              </List.Accordion>
            </List.Section>
          </View>
        </View>
      </ScrollView>
    </View>

   }
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
    
    
  },
  itemleft: {},
  itemright: {
    color: 'black',
    width:200
  },
  listitem: {
    // color: '#78909c',
    fontSize: 14,
  },
});

export default ViewProfile;