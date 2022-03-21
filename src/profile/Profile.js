import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect ,useRef , useCallback} from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity, SafeAreaView } from "react-native";
import { Button, Tab ,TabView} from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import InteractiveTextInput from "react-native-text-input-interactive";
import BottomSheet from 'reanimated-bottom-sheet';


const Profile = () => {

    const [index, setIndex] = React.useState(0);
    const [name , namestate] = React.useState({user:{name:'Not logged in!',photo:''}});
    const [img , imgstate] = React.useState('https://i.stack.imgur.com/l60Hf.png');
    const [snap , snapstate] = React.useState(0)

    const sheetRef = React.useRef(null);


    useEffect(()=>{

        async function getuser(){
try{
  if(!await GoogleSignin.isSignedIn()){
    return;
  }
    const user = await GoogleSignin.getCurrentUser()
    console.log(user);

namestate(user) 
imgstate(user.user.photo)
}catch(err){

}
                      
        }
getuser()

    },[])
    const styles = StyleSheet.create({
        
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        marginTop:100
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
        height:'100%',
        justifyContent:'space-between'
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
        justifyContent:'space-between'
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
      contentContainer: {
        flex: 1,
        alignItems: 'center',
      }, container: {
        flex: 1,
        padding: 24,
        height:'100%',
        backgroundColor: 'white',
      }
    });

    const renderContent = () => (
      <View
        style={{
          
          backgroundColor: 'white',
          padding: 16,
          height: 450,
          justifyContent:'space-between'
        }}
      >
  <Text>Drag down to close</Text>
  <InteractiveTextInput mainColor="black" placeholder="Bio" style={{ borderColor: 'black', position: 'absolute', }}></InteractiveTextInput>
  <InteractiveTextInput mainColor="black" placeholder="Age" style={{ borderColor: 'black', position: 'absolute', }}></InteractiveTextInput>
  <InteractiveTextInput mainColor="black" placeholder="Contact" style={{ borderColor: 'black', position: 'absolute', }}></InteractiveTextInput>
  <InteractiveTextInput mainColor="black" placeholder="weight" style={{ borderColor: 'black', position: 'absolute', }}></InteractiveTextInput>
  <InteractiveTextInput mainColor="black" placeholder="pincode" style={{ borderColor: 'black', position: 'absolute', }}></InteractiveTextInput>
  <InteractiveTextInput mainColor="black" placeholder="Blood group" style={{ borderColor: 'black', position: 'absolute', }}></InteractiveTextInput>


      </View>
    );
return (
  
<View style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
        }}>
        <Image source={{uri:img}} style={styles.avatar}></Image>
<Button
buttonStyle={{backgroundColor:'#3743ab'}}
          title="Edit profile"
          onPress={() =>{
            sheetRef.current.snapTo(0)
            
          } }
        />
<BottomSheet
 
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        enabledGestureInteraction
        renderContent={renderContent}
      /></View>
    

)

}

export default Profile;