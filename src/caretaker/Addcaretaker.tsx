import { FlatList, RefreshControl, View,TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { Avatar, Button, ListItem, SearchBar, SpeedDial } from "react-native-elements";

import {API_URL} from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Card} from 'react-native-paper';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import { useFocusEffect } from "@react-navigation/native";

interface Props{
    navigation:any
}

const Addcaretaker:React.FC<Props> = ({navigation}:Props) => {


    const [caretakers, caretakerstate] = React.useState([]);
    const [refresh , refeereshstate] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const fetchcaretakers = async () =>  {
            const user_id = await AsyncStorage.getItem('user_id');
            fetch(`${API_URL}/api/caretaker/myCareTakers(Patient)?patientId=${user_id}`)
                .then(resp => resp.json())
                .then(res =>{
                    console.log(res)
                    caretakerstate(res)
                } )
            
    }

   

    useFocusEffect(
        React.useCallback(() => {
          let isActive = true;
          
          fetchcaretakers()
    
          return () => {
            isActive = false;
          };
        }, []),
      );

   const sendreqtouser = () => {

    

   }

    const renderitem = ({ item }) => {
        console.log(item.patientId,"b")

        return (

            <Card  onPress={() => {
                navigation.navigate('Patientprofile')}} 
            style={{ borderRadius:20,
            margin:6,
            borderColor:'lightgrey',
            elevation:3,
            shadowColor:'#3743ab'}}>
         <View style={{flexDirection:'row',padding:0}}>
         <ListItem style={{ flexDirection: 'row',
                             justifyContent: 'space-between',
                             alignItems: 'center' 
                             ,padding:5}}>
          <Avatar 
             size={64}
             rounded source={
             {uri:'https://lh3.googleusercontent.com/a-/AOh14Gg1r55ukyjleOVcBDEuTUt283ClmJE4ZSeFOSmD=s96-c'}}>

             </Avatar>
             <ListItem.Content>

                 <ListItem.Title style={{fontSize:16,marginLeft:3,fontWeight:'bold'}}
                 >{item.caretakerUsername}
                 </ListItem.Title>
                 <ListItem.Subtitle>{' Accepted on : ' + item.createdAt}</ListItem.Subtitle>

             </ListItem.Content>

             <TouchableOpacity onPress={() => {}} 
             style={{paddingVertical: 15,}}>
                 <View style={{ alignItems: 'center'}}>
                     <FontAwesomeIcon icon={faAngleRight as IconProp} color={'black'} size={17} />

                 </View>
             </TouchableOpacity>
         </ListItem>
         </View>
     </Card>
   
        )

    }

   
   

    return (
         
        <React.Fragment>

        
        <View style={{ flex: 1 ,backgroundColor:'white',height:'100%'}}>
           {
                   caretakers.length === 0 && <View style={{alignItems:'center'}}>

                       <Image source={require('../../assests/nocaretakers.jpg')} style={{width:400}} resizeMode='contain'></Image>
                   </View> 
                  
                    
           }
            <FlatList data={caretakers} renderItem={renderitem} refreshControl={

<RefreshControl refreshing={refresh} onRefresh={fetchcaretakers}></RefreshControl>

}></FlatList>
            <View style={{bottom:0,alignItems:'center'}}>
            <SpeedDial
                    isOpen={open}
                    style={{backgroundColor:'white'}}
                    overlayColor='white'
                    buttonStyle={{backgroundColor:'#3743ab'}}
                    icon={{ name: 'edit', color: 'white' }}

                    openIcon={{ name: 'close', color: 'white' }}
                    onOpen={() => setOpen(!open)}
                    onClose={() => setOpen(!open)}
  >
    <SpeedDial.Action
      icon={{ name: 'add', color: 'white' }}
      title="Add Caretaker"
      style={{height:50,}}
      buttonStyle={{backgroundColor:'#3743ab'}}

      onPress={() => navigation.navigate('Search Caretaker')}
    />
    <SpeedDial.Action
      icon={{ name: 'delete', color: 'white' }}
      title="Delete"
      buttonStyle={{backgroundColor:'#3743ab'}}

      style={{height:50}}

      onPress={() => console.log('Delete Something')}
    />
  </SpeedDial>
            <Button buttonStyle={{backgroundColor:'white'}} title="A"
            ></Button>
                </View>
        </View>
        </React.Fragment>
    )


}

export default Addcaretaker;