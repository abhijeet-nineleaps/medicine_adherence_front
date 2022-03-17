import React, { useEffect } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { ListItem ,Button} from "react-native-elements";
import {API_URL} from '@env'



const Mypatient = ({navigation}) => {

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

            <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <ListItem.Content>
                    <ListItem.Title>{item.patient_name}</ListItem.Title>
                    <ListItem.Subtitle>{item.created_at}</ListItem.Subtitle>
                </ListItem.Content>
                <Button title="Notify" onPress={()=>navigation.navigate('Viewpatient',{id:item.patient_id})}></Button>
                
            </ListItem>
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