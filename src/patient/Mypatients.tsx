import React, { useEffect } from "react";
import {API_URL} from '@env';
import { FlatList, RefreshControl, View,TouchableOpacity } from "react-native";
import { Avatar, Button, ListItem} from "react-native-elements";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Card} from 'react-native-paper';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface Props{
    navigation : any
}

const Mypatient : React.FC<Props> = ({navigation} : Props) => {

    const [data , datastate] = React.useState([])
    const [refresh , refeereshstate] = React.useState(false);

    const fetchpatients = () => {
        fetch(`${API_URL}/api/caretaker/myPatients(Caretaker)?caretaker_id=673e8f15-20ca-499b-8022-9781836a90c7`)
        .then(resp => resp.json())
        .then(res =>{
            console.log(res)
            datastate(res)
        } )
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        //  console.log(url);
       fetchpatients()
  
  },[])
      const renderitem = ({ item }) => {

        return (
 
            <Card  onPress={() => {navigation.navigate('Patientprofile',{
                user_id:item.patient_id
            })}} 
            style={{ borderRadius:30,
            margin:6,
            borderColor:'lightgrey',
            elevation:5,
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
                 >{item.patient_name}
                 </ListItem.Title>
                 <ListItem.Subtitle>{' Created At :' + item.created_at}</ListItem.Subtitle>

             </ListItem.Content>

             <TouchableOpacity onPress={() => {}} 
             style={{paddingVertical: 15,}}>
                 <View style={{ alignItems: 'center'}}>
                     <FontAwesomeIcon icon={faAngleRight as IconProp} color={'black'} size={25} />

                 </View>
             </TouchableOpacity>
         </ListItem>
         </View>
        
     </Card>


            
        )

    }

return (
    <View style={{backgroundColor:'white',height:'100%'}}>
  
    <FlatList data={data} renderItem={renderitem}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={fetchpatients}></RefreshControl>

      }></FlatList>
    

    </View>
)


}

export default Mypatient;