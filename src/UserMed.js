import { Dimensions, Image, StyleSheet, View, ViewBase } from "react-native"
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Kaede, Madoka, Hideo } from "react-native-textinput-effects";
import InteractiveTextInput from "react-native-text-input-interactive";
import { Button, Text, useTheme } from "react-native-elements";

import LottieView from 'lottie-react-native';
import { TextInput } from "react-native-paper";
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
    name:'MedRemdb',
    location:'default'
},()=>{
    console.log('opened')
},error=>{
    console.log(error)
})

const UserMed = ({ route, navigation }) => {
    const { id } = route.params;
    console.log(id);
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const [med_name , med_name_state] = React.useState('');
    const [med_des , med_des_state] = React.useState('');
  
    const theme = useTheme();
    const styles = StyleSheet.create({
        round_button: {


            right: 10,
            borderRadius: 100,
            backgroundColor: 'orange'

        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }, text: {
            textAlign: 'center',
            padding: 5,
        }
    })

    const medname = (txt) => {
        med_name = txt;
        console.log(med_name);
    }

    const meddes = (txt) => {
        med_des = txt;
        console.log(med_des);
    }

    const savemedicinetodb = async () => {

       


        // const db = SQLite.openDatabase('test.db', '1.0', '', 1)

      await  db.transaction( (txn)=> {
            txn.executeSql('CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)', []);
            var value = Math.floor(1000 + Math.random() * 9000);

            txn.executeSql('INSERT INTO User_medicines (user_id,medicine_name,medicine_des,title,time,days,start_date,end_date,status,sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [value,med_name, med_des, '','','','','',0,0]);

            txn.executeSql('SELECT * FROM `User_medicines`', [], function (tx, res) {
                for (let i = 0; i < res.rows.length; ++i) {
                    console.log('item:', res.rows.item(i));
                }
            });

        })

        navigation.navigate('Drawer');
    }

    return (
        <View style={{ backgroundColor: 'white', height: height, width: width }}>
            <View style={{ alignItems: 'center' }}>
                <LottieView style={{ width: 200, height: 200 }} source={require('../assests/animate/medicine.json')} autoPlay loop speed={4}></LottieView>

            </View>
            <View style={{ margin: 12, marginTop: height / 8, height: height / 6, backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextInput onChangeText={txt=>med_name_state(txt)} 
            value ={med_name}
                       placeholder="Medicine name"
                       mode='outlined' label='Medicine name'>   

            </TextInput>
            <TextInput style={{marginTop:20}} onChangeText={txt=>med_des_state(txt)} 
            value ={med_des}
                       placeholder="Description"
                       mode='outlined' label='Medicine description'>   

            </TextInput>

            </View>
            <View style={{ marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>

                <Button
                    title="Add medicine"

                    buttonStyle={{ backgroundColor: '#3743ab' }}
                    containerStyle={{
                        width: 200,
                        position: 'relative',
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ color: 'white', marginHorizontal: 20 }}
                    onPress={savemedicinetodb}
                /></View>
        </View>

    )
}

export default UserMed;