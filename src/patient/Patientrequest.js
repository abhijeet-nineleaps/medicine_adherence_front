import React, {Component} from 'react';
import {View , Text, FlatList, Image, Alert, RefreshControl} from 'react-native';
import { Card, Paragraph, Title ,Button} from 'react-native-paper';
import { Icon , Avatar} from 'react-native-elements';
import {API_URL} from '@env'


const Patientrequest = () => {

    const [patients , patientsdata] = React.useState([]);
    const [refresh , refreshstate] = React.useState(false);

    const fetchpatientreq = () => {
        console.log('called')
        fetch(`${API_URL}/api/caretaker/patientRequests(Caretaker)?caretaker_id=673e8f15-20ca-499b-8022-9781836a90c7`)
        .then(res=>res.json())
        .then(resp=>{
            console.log(resp)
            patientsdata(resp)   
        })
    
    }

    React.useEffect(()=>{
 
        fetchpatientreq();
        
        },[])

    const acceptrequest = (ci_id) =>{
        let url = new URL(`${API_URL}/api/caretaker/updatestatus`)
        url.searchParams.append('c_id', ci_id);

    fetch(url,{method:'PUT'})
    .then(res=>{
        console.log(res)
        fetchpatientreq()   
    })
    .catch(err=>console.log(err))


    }

    return(
        <View style={{flex:1,backgroundColor:'white'}}>
              <FlatList refreshControl={
                        <RefreshControl refreshing={refresh} onRefresh={fetchpatientreq}></RefreshControl>
}
                  data={patients}
                  renderItem={({item}) => 
                  <Card  style={{elevation:5, margin:6, borderRadius:15}}>
                    <View style={{flexDirection:'row',padding:10}}>
                    <View>
                          <Image  style={{height:40,
                                width:40,
                                margin:5,
                                borderRadius:40,
                                backgroundColor:'lightblue'}}
                               source={{uri:'https://i.stack.imgur.com/l60Hf.png'}}></Image>
                    </View>
                    <View>
                            <Card.Content>
                                <Title style={{fontSize:18,textTransform:'uppercase',margin:5}}>{item.patient_name}</Title>
                            </Card.Content>
                    </View>
                    <View>
                            <Card.Content>
                                <View style={{flexDirection:'row',marginTop:10}}>
                                      <Icon
                                          name='calendar'
                                          type='evilicon'
                                          color='#517fa4'
                                          size={22}
                                      />
                                      <Text style={{fontSize:17,
                                            fontWeight:'500',
                                            color:'black',
                                            marginLeft:10
                                            }}>{item.created_at}</Text>
                                </View>
                            </Card.Content>
                    </View>
                    
                    </View>
                    <View style={{flexDirection:'row',
                                  marginLeft:20,
                                  marginBottom:10,
                                  justifyContent:'space-evenly'
                                  }}>
                       
                        <Avatar
                              size={58}
                              rounded
                              source={require('../../assests/accept.jpg')}
                              onPress={() => acceptrequest(item.c_id)}

                              //key={`${chunkIndex}-${i}`}
                              />
                        <Avatar
                              // style={{marginLeft:2}}
                              size={47}
                              rounded
                              source={require('../../assests/cancel.png')}
                              onPress={() => Alert.alert('Request Accepted')}
                              //key={`${chunkIndex}-${i}`}
                              />      
                    </View>
                  </Card>
                }
              >

              </FlatList>
        </View>
      );

}

export default Patientrequest;