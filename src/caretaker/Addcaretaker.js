import { FlatList, RefreshControl, View } from "react-native";
import React, { useEffect } from "react";
import { Button, ListItem, SearchBar } from "react-native-elements";
import Dialog from "react-native-dialog";
import { useFocusEffect } from "@react-navigation/native";
import {API_URL} from '@env'
import AsyncStorage from "@react-native-async-storage/async-storage";


const Addcaretaker = ({navigation}) => {


    const [caretakers, caretakerstate] = React.useState([]);
    const [addcaretaker, addcaretakerstate] = React.useState(false);
    const [url, urlstate] = React.useState('');
    const [refresh , refeereshstate] = React.useState(false);

    const fetchcaretakers = async () =>  {
            const user_id = await AsyncStorage.getItem('user_id');
            fetch(`${API_URL}/api/caretaker/myCareTakers(Patient)?patient_id=${user_id}`)
                .then(resp => resp.json())
                .then(res => caretakerstate(res))
            
    }

    useEffect(()=>{
        
        fetchcaretakers()
    }
    ,[])

   const sendreqtouser = () => {

    

   }

    const renderitem = ({ item }) => {

        return (

            <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <ListItem.Content>
                    <ListItem.Title>{item.caretaker_username}</ListItem.Title>
                    <ListItem.Subtitle>{item.created_at}</ListItem.Subtitle>
                </ListItem.Content>
                <Button title="Delete"></Button>
                
            </ListItem>
        )

    }

   
   

    return (
        <View style={{ flex: 1 ,backgroundColor:'white',height:'100%'}}>
           
            <FlatList data={caretakers} renderItem={renderitem} refreshControl={

<RefreshControl refreshing={refresh} onRefresh={fetchcaretakers}></RefreshControl>

            }></FlatList>
            <View style={{bottom:0,alignItems:'center'}}>
            <Button title="Add caretaker"
            buttonStyle={{backgroundColor:'#3743ab'}}
                onPress={() => navigation.getParent().navigate('Searchcaretaker') }

                style={{
                    backgroundColor: 'black',
                    borderWidth: 2,
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 8,
                    borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}></Button>
                </View>
        </View>
    )


}

export default Addcaretaker;