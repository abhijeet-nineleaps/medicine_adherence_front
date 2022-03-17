import { Alert, View,Text } from "react-native";
import React from "react";
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Progress from 'react-native-progress';
import { API_URL } from '@env'
import Toast from 'react-native-toast-message';
import { TextInput } from "react-native-paper";
import { Button } from "react-native-elements";


const Loginscreen = () => {



    const [loading, loadingstate] = React.useState(false);
    const [text, setText] = React.useState("");

   
    async function loginuser() {
        try {
           
            loadingstate(true)
            let url = new URL(`${API_URL}/api/user/login`)
        url.searchParams.append('email', text);
            await fetch(url, {
                method: 'POST'
            })
                .then(resp => resp.json())
                .then(async res => {
                    console.log(res)
                    if(res.status === 'success'){
                        console.info(res.user_id)
                        await AsyncStorage.setItem('user_id',res.userentity[0].user_id)
                        await AsyncStorage.setItem('user_name',res.userentity[0].user_name)
                        
              console.info(await AsyncStorage.getItem('user_id')
                         ,await AsyncStorage.getItem('user_name'))
                         loadingstate(false);
                    Toast.show({
                        type: 'success',
                        text1: 'Loggedin successfully'
                    })
                    setTimeout(()=>{
                        navigation.pop(1)

                    },3000)
                    
                    }else if(res.status === 'Not found'){
                        loadingstate(false);

                        Toast.show({
                            type: 'info',
                            text1: 'No account present with this id'
                        })

                    }
                    
                   
                   
                }).catch(err=>{
                    console.log(err);
                    Toast.show({
                        type: 'info',
                        text1: 'Failed',
                        s
                    })
                })

        } catch (err) {
            console.log(err);
            Toast.show({
                type: 'info',
                text1: 'Failed',
                s
            })
        }

    }


    return (
        <View style={{ alignItems: 'center', height: '100%', justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>

            <Toast visibilityTime={3000}></Toast>

            <Text style={{fontSize:30 , margin:30,fontWeight:'bold'}}>{'LOGIN'}</Text>
            <TextInput
                    label="Email"
                    mode='outlined'
                    value={text}
                     style={{width:'80%',backgroundColor:'white'}}
                    onChangeText={text => setText(text)}
              />
                  <Button style={{alignItems:'center'}} 
                   buttonStyle={{backgroundColor:'#3743ab',width:'70%',alignItems:'center'}}
                    title="Login" onPress={()=>loginuser()}

                    containerStyle={{marginTop:10,width:200,alignItems:'center'}}></Button>

            {
                loading &&
                <Progress.CircleSnail spinDuration={1500} size={80} color={['red', 'green', 'yellow']} />

            }
        </View>
    )

        }



export default Loginscreen;