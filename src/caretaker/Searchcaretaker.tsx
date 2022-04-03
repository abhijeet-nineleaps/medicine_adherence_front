
import React from "react";
import { FlatList, View } from "react-native";
import { Avatar, Button, ListItem, SearchBar } from "react-native-elements";
import {API_URL} from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';


const Searchcaretaker = ({navigation}) => {
    
    const [searchword , searchstate] = React.useState('');
    const [data , datastate] = React.useState([]);
    const [load , loadstate] = React.useState(false);
    const [searchload , searchloadstate] = React.useState(false);

    const searchText = (text:any) => {
        searchstate(text)
        console.log(searchword)
         
    }


    const sendmailtouser = () => {
        searchloadstate(true)
        fetch(`${API_URL}/api/user/getbyemail?email=${searchword}&sender=Nikunj bisht`)
            .then(res => res.json())
            .then(resp=>{
                console.log(resp)
                searchloadstate(false)
                
                datastate([resp])
            })
            .catch(err =>{
                console.log(err);
                searchloadstate(false)
                Toast.show(
                    {
                        type:'success',
                        text1:'Invitation mail has been sent successfully!',
                        position:'bottom'
                    }
                )
            });



    }

    const sendreqtocaretaker = async (caret_id :String , caret_username : String) => {
      const pnt_id = await  AsyncStorage.getItem('user_id');
      const pt_name = await AsyncStorage.getItem('user_name');
       console.log(caret_id , pnt_id , pt_name);

       fetch(`${API_URL}/api/caretaker/savecaretaker`,{
           method:'POST',
           body:JSON.stringify({
            
                caretaker_id: caret_id,
                caretaker_username: caret_username,
                patient_id: pnt_id,
                patient_name: pt_name,
                req_status: false,
                sent_by: "P"
              
           }),
           headers:{
            "Content-type": "application/json"

           }
       })
       .then(res=>{
        console.log(res.json())
navigation.pop(1);
       })
       .catch((err)=>console.log(err))

    }

    const renderitem = ({ item }) => {

        return (

            <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <ListItem.Content>
                <Avatar rounded source={{uri:'https://i.stack.imgur.com/l60Hf.png'} }></Avatar>
                    <ListItem.Title>{item.user_name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button loading={load} title="Send request" buttonStyle={{backgroundColor:'#3743ab'}}
                        onPress={()=> {

                            sendreqtocaretaker(item.user_id,item.user_name);
                            
                        }}></Button>                
            
                        
            </ListItem>
        )

    }

   return (

    <View style={{margin:10,backgroundColor:'white',height:'100%'}}>
    <Toast></Toast>

    <SearchBar style={{}} placeholder="Search Caretaker.." value={searchword} onChangeText={searchText} ></SearchBar>
    <Button loading={searchload} buttonStyle={{backgroundColor:'#3743ab'}} title="Search" onPress={()=>sendmailtouser()} containerStyle={{marginTop:10}}></Button>
    <FlatList data={data} renderItem={renderitem}></FlatList>
    </View>


   )


}
export default Searchcaretaker;