import { Dimensions, Image, StyleSheet, View, ViewBase } from "react-native"
import React from "react";
import {  TouchableOpacity } from "react-native-gesture-handler";
import { Kaede, Madoka ,Hideo} from "react-native-textinput-effects";
import InteractiveTextInput from "react-native-text-input-interactive";
import { Button, Text, useTheme } from "react-native-elements";
import img from '../assests/caps.png';

const UserMed = () => {

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const theme = useTheme();
const styles = StyleSheet.create({
    round_button :{
        
        
        right:10,
        borderRadius: 100,
        backgroundColor: 'orange'
        
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },text: {
        textAlign: 'center',
        padding: 5,
      }
})

return (
    <View style={{backgroundColor:'white',height:height,width:width}}>
    <View style={{height:height/5}}>
    <Image source={require('../assests/caps.png')} style={{height:'100%',flex:1,width:'100%',resizeMode:'contain'}}></Image>
    
    </View>
    <View  style={{margin:12,marginTop:height/8,height:height/6,backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
   
        <InteractiveTextInput mainColor="black" placeholder="Medicine name"  style={{borderColor:'black',position:'absolute',}}></InteractiveTextInput>
    <InteractiveTextInput mainColor="black" placeholder="Medicine description" style={{borderColor:'black',marginTop:20,position:'absolute'}}></InteractiveTextInput>

    </View>
<View style={{marginTop:30,alignItems:'center',justifyContent:'center'}}>

<Button
                title="Add medicine"
                
                buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                containerStyle={{
                  width: 200,
                  position:'relative',
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ color: 'white', marginHorizontal: 20 }}
              /></View>
    </View>

)
}

export default UserMed;