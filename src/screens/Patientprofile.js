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


const ViewProfile = () => {
  const args = {
    number: '+918725952854', // String value with the number to call
    prompt: true, // Optional boolean property. Determines if the user should be prompt prior to the call
  };
  return (
    <View style={styles.container}>
      <Card style={{elevation: 5, borderRadius: 20}}>
        <View style={styles.top}>
          <View>
            <Image
              style={styles.icon}
              // source={require('../../assests/patient.jpg')}
              source={{
                uri: 'https://images-ext-1.discordapp.net/external/k4FTtIoLR5PzsbEw7nJqEeOMPamb7bjR-orTFlOqJSM/https/lh3.googleusercontent.com/a-/AOh14Gg1r55ukyjleOVcBDEuTUt283ClmJE4ZSeFOSmD%3Ds96-c',
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
              Vinay Kumar Soni
            </Text>
            <Text style={{color: 'grey', marginBottom: 3}}>
              vinaykumarsoni2001@gmail.com
            </Text>
            <Text style={{color: 'grey'}}>+91-8725952854</Text>
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
            Bio - Allows icons to be subsetted, optimizing your final bundle.
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
            Age - 20
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
            Blood Group - AB+
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
            Marital Status - Unmarried
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
            Weight - 60
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
            Contact - +91-9876543210
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
                    onPress={() => Alert.alert('Sending Notification...')}>
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