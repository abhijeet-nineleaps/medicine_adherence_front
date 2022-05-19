/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  RefreshControl,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {Button, ListItem, SpeedDial} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'react-native-paper';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import UserAvatar from 'react-native-user-avatar';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCaretakers} from '../../redux/actions/CaretakerTakerActions';

interface Props {
  navigation: any;
}

const Addcaretaker: React.FC<{navigation}> = Props => {
  const {navigation} = Props;
  const caretakers = useSelector(
    state => state.CareTakerReducer.userCaretakerList,
  );
  const {load} = useSelector(state => state.CareTakerReducer);
  console.log(load, 'load');
  const [refresh, refeereshstate] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const fetchcaretakers = async () => {
    let user_id = await AsyncStorage.getItem('user_id');
    dispatch(fetchCaretakers(user_id));
    refeereshstate(false);
  };

  useEffect(() => {
    fetchcaretakers();
  }, []);
  const renderitem = ({item}) => {
    console.log(item.patientId, 'b');

    return (
      <Card
        onPress={() => {}}
        style={{
          borderRadius: 20,
          margin: 6,
          borderColor: 'lightgrey',
          elevation: 3,
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
            <UserAvatar size={60} name={item.caretakerUsername}></UserAvatar>
            <ListItem.Content>
              <ListItem.Title
                style={{fontSize: 16, marginLeft: 3, fontWeight: 'bold'}}>
                {item.caretakerUsername}
              </ListItem.Title>
              <ListItem.Subtitle>
                {' Accepted on : ' + item.createdAt}
              </ListItem.Subtitle>
            </ListItem.Content>

            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
              <View style={{alignItems: 'center'}}>
                <FontAwesomeIcon
                  icon={faAngleRight as IconProp}
                  color={'black'}
                  size={17}
                />
              </View>
            </TouchableOpacity>
          </ListItem>
        </View>
      </Card>
    );
  };

  return (
    <React.Fragment>
      <View style={{flex: 1, backgroundColor: 'white', height: '100%'}}>
        {load && (
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assests/nocaretakers.jpg')}
              style={{width: 400}}
              resizeMode="contain"></Image>
          </View>
        )}
        <FlatList
          data={caretakers}
          renderItem={renderitem}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={fetchcaretakers}></RefreshControl>
          }></FlatList>
        <View style={{bottom: 0, alignItems: 'center'}}>
          <SpeedDial
            isOpen={open}
            style={{backgroundColor: 'white'}}
            overlayColor="white"
            buttonStyle={{backgroundColor: '#3743ab'}}
            icon={{name: 'add', color: 'white'}}
            openIcon={{name: 'close', color: 'white'}}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}>
            <SpeedDial.Action
              icon={{name: 'add', color: 'white'}}
              title="Add Caretaker"
              style={{height: 50}}
              buttonStyle={{backgroundColor: '#3743ab'}}
              onPress={() => navigation.navigate('Search Caretaker')}
            />
            <SpeedDial.Action
              icon={{name: 'delete', color: 'white'}}
              title="Delete"
              buttonStyle={{backgroundColor: '#3743ab'}}
              style={{height: 50}}
              onPress={() => console.log('Delete Something')}
            />
          </SpeedDial>
          <Button buttonStyle={{backgroundColor: 'white'}} title="A"></Button>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Addcaretaker;
