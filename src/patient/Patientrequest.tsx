import React, {Component} from 'react';
import {View, Text, FlatList, Image, Alert, RefreshControl} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {Icon, Avatar} from 'react-native-elements';
import {API_URL} from '@env';
import {ListItem, Button} from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';

const Patientrequest = () => {
  const [patients, patientsdata] = React.useState([]);
  const [refresh, refreshstate] = React.useState(false);

  const fetchpatientreq = () => {
    console.log('called');
    fetch(
      `${API_URL}/api/caretaker/patientRequests(Caretaker)?caretakerId=673e8f15-20ca-499b-8022-9781836a90c7`,
    )
      .then(res => res.json())
      .then(resp => {
        console.log(resp);
        patientsdata(resp);
      }).catch(err=>{});
  };

 
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      
      fetchpatientreq();

      return () => {
        isActive = false;
      };
    }, []),
  );
  const acceptrequest = (ci_id:String) => {
    let url : any = new URL(`${API_URL}/api/caretaker/updatestatus`);
    url.searchParams.append('cId', ci_id);

    fetch(url, {method: 'PUT'})
      .then(res => {
        console.log(res);
        fetchpatientreq();
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {
        patients.length === 0 &&  <View style={{alignItems:'center',justifyContent:'center'}}>

        <Image source={require('../../assests/nopatientreq.png')} style={{width:400}} resizeMode='contain'></Image>
    </View> 
      }
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={fetchpatientreq}></RefreshControl>
        }
        data={patients}
        renderItem={({item}) => (
          <Card style={{elevation: 2, margin: 6, borderRadius: 25}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginTop: 10, marginLeft: 6}}>
                <Avatar
                  size={100}
                  rounded
                  source={{
                    uri: 'https://lh3.googleusercontent.com/a-/AOh14GgrRBm3gFrvPSRlLYSiaY5KO-HpPKl1IhK3Z3rePg=s96-c',
                  }}></Avatar>
              </View>
              <View style={{flexDirection: 'column'}}>
                <ListItem
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        fontSize: 18,
                        marginLeft: 15,
                        fontWeight: '900',
                        textTransform: 'uppercase',
                      }}>
                      {item.patientName}
                    </ListItem.Title>
                    <ListItem.Subtitle
                      style={{
                        fontSize: 15,
                        fontWeight: '500',
                        color: 'black',
                        marginLeft: 13,
                      }}>
                      {' Sent on : ' + item.createdAt}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
                <View style={{flexDirection: 'row', marginLeft: 25}}>
                  <Button
                    onPress={() => {
                      acceptrequest(item.cid);
                    }}
                    title="Confirm"
                    buttonStyle={{
                      width: 100,
                      borderRadius: 25,
                      marginBottom: 10,
                      backgroundColor: '#4267B2',
                    }}
                    color="#4267B2"></Button>
                  <View style={{margin: 5}} />
                  <Button
                    onPress={() => {}}
                    title="Delete"
                    buttonStyle={{
                      width: 100,
                      borderRadius: 25,
                      backgroundColor: '#d32f2f',
                    }}
                    color="#e53935"></Button>
                </View>
              </View>
            </View>
          </Card>
        )}></FlatList>
    </View>
  );
};

export default Patientrequest;
