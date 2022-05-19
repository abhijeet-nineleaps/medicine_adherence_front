/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {API_URL} from '@env';
import {
  FlatList,
  RefreshControl,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'react-native-paper';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useFocusEffect} from '@react-navigation/native';
import UserAvatar from 'react-native-user-avatar';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

interface Props {
  navigation: any;
}

const Mypatient: React.FC<Props> = ({navigation}: Props) => {
  const [data, datastate] = React.useState([]);
  const [refresh, refeereshstate] = React.useState(false);
  const fetchpatients = () => {
    fetch(
      `${API_URL}/api/v1/patients?caretakerId=f9c67686-55f9-495a-b214-eb89d5606678`,
    )
      .then(resp => resp.json())
      .then(res => {
        if (res.status === 'failed') {
          datastate([]);
          refeereshstate(false);
          return;
        }
        datastate(res.userCaretakerList);
      })
      .catch(err => console.log(err));
  };
  useFocusEffect(
    React.useCallback(() => {
      async function checkforlog() {
        const islogged = await GoogleSignin.isSignedIn();
        if (!islogged) {
          Alert.alert(
            'Sign in first to use this feature',
            'Click ok to proceed',
            [
              {
                text: 'Ok',
                onPress: () => {
                  navigation.navigate('Login');
                },
              },
              {
                text: 'Cancel',
                onPress: () => {
                  navigation.navigate('Home');
                },
              },
            ],
          );
        } else {
          fetchpatients();
        }
      }

      checkforlog();

      return () => {
        true;
      };
    }, []),
  );

  const renderitem = ({item}) => {
    return (
      <Card
        onPress={() => {
          navigation.navigate('Patient Profile', {
            user_id: item.patientId,
          });
        }}
        style={{
          borderRadius: 30,
          margin: 6,
          borderColor: 'lightgrey',
          elevation: 5,
          shadowColor: '#3743ab',
        }}>
        <View style={{flexDirection: 'row', padding: 0}}>
          <ListItem
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 5,
            }}
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}>
            <UserAvatar size={60} name={item.patientName}></UserAvatar>

            <ListItem.Content>
              <ListItem.Title
                style={{fontSize: 16, marginLeft: 3, fontWeight: 'bold'}}>
                {item.patientName}
              </ListItem.Title>
              <ListItem.Subtitle>
                {' Created on :' + item.createdAt}
              </ListItem.Subtitle>
            </ListItem.Content>

            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
              <View style={{alignItems: 'center'}}>
                <FontAwesomeIcon
                  icon={faAngleRight as IconProp}
                  color={'black'}
                  size={25}
                />
              </View>
            </TouchableOpacity>
          </ListItem>
        </View>
      </Card>
    );
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {data.length === 0 && (
        <View style={{}}>
          <Image
            source={require('../../assests/nopatients.png')}
            style={{width: 400}}
            resizeMode="contain"></Image>
        </View>
      )}
      <FlatList
        data={data}
        renderItem={renderitem}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={fetchpatients}></RefreshControl>
        }></FlatList>
    </View>
  );
};

export default Mypatient;
