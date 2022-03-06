import {FlatList, View ,Text, SafeAreaView} from "react-native";
import React, { useEffect,useState } from "react";
import { Avatar, Button, ListItem } from "react-native-elements";


const Addmedicine = ({navigation}) => {

    const [characters , characterstate] = useState([]);

    useEffect(()=>{

        fetch("https://api-mobilespecs.azharimm.site/v2/brands")
        .then(resp=>resp.json())
        .then(res=> characterstate(res.data))
        .catch(err=>console.log(err))
 

    })

const renderitem = ({item}) =>{

return(
  
    <ListItem style={{
    }}>
    <ListItem.Content>
    <Avatar source={{uri:"https://cms-assets.tutsplus.com/cdn-cgi/image/width=300/uploads/users/769/posts/35877/preview_image/react-native-course.png"}}></Avatar>
        <ListItem.Title>{item.brand_name}</ListItem.Title>
        <ListItem.Subtitle>{item.brand_slug}</ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
     
    )
}

return (
    <View style={{flex:1}}>
   
<FlatList data={characters} renderItem={renderitem} initialNumToRender={5}></FlatList>

    <Button title="Add medicines" 
         onPress={()=>navigation.navigate('UserMed')}
         
         style={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  position: 'absolute',                                          
                  bottom:10,
                  right:10,
                  alignItems:'center',
                  justifyContent:'center',
                  elevation:8,
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
)

}

export default Addmedicine;