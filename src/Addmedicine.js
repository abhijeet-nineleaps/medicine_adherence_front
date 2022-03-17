import { FlatList, View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button, Divider, ListItem } from "react-native-elements";
import SQLite from 'react-native-sqlite-2';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";


const Addmedicine = ({ navigation }) => {

    const [characters, characterstate] = useState([]);
    const [load, loadstate] = useState(false)
    const [logged, loggedstate] = useState(false);
    var meds_array = [];

    useEffect(() => {
        async function checkforlog() {
            if (await GoogleSignin.isSignedIn()) {
                loggedstate(true)
            } else {
                loggedstate(false)
            }
        }
        checkforlog();
    }, [])

    const checkformeds = async (db) => {

        return new Promise(function (resolve, reject) {


            db.transaction(async function (txn) {
                txn.executeSql('CREATE TABLE IF NOT EXISTS User_meds(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name VARCHAR(230), medicine_des VARCHAR(200))', []);
                txn.executeSql('SELECT * FROM `User_meds`', [], function (tx, res) {
                    for (let i = 0; i < res.rows.length; ++i) {
                        meds_array.push(res.rows.item(i));

                    }

                    resolve(meds_array)
                })



            })




        })


    }

    const fetch_meds = async () => {
        console.log('called')
        loadstate(true)
        const db = await SQLite.openDatabase('test.db', '1.0', '', 1)
        console.log(db)
        const meds_arr = await checkformeds(db)
        characterstate(meds_arr);
        loadstate(false)
        if (meds_array.length === 0) {
            console.log('info')
            loadstate(false)
        }


    }

    const deleteitem = (id) => {
        console.log('del')
        const db = SQLite.openDatabase('test.db', '1.0', '', 1)

        db.transaction(function (txn) {

            txn.executeSql('DELETE FROM `User_meds`  where user_id = ' + id)
            txn.executeSql('SELECT * FROM `User_meds`', [], function (tx, res) {
                for (let i = 0; i < res.rows.length; ++i) {
                    meds_array.push(res.rows.item(i));

                }
                if (meds_array.length === 0) {
                    loadstate(false)
                }
                // console.log('f');
                characterstate(meds_array);
            })

        })

    }


    const renderitem = ({ item }) => {

        return (
            <View style={{ marginBottom: 10 }}>
                <ListItem style={{ backgroundColor: 'white' }}>
                    <ListItem.Content>
                        <Avatar source={require('../assests/caps.png')}></Avatar>
                        <ListItem.Title>{item.medicine_name}</ListItem.Title>
                        <ListItem.Subtitle>{item.medicine_des}</ListItem.Subtitle>
                    </ListItem.Content>

                    <Avatar source={require('../assests/alarm.png')} onPress={() => navigation.navigate('Add Reminder')}></Avatar>

                    <Avatar source={require('../assests/bin.png')} onPress={() => deleteitem(item.user_id)}></Avatar>


                </ListItem>
            </View>

        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <FlatList data={characters} renderItem={renderitem} initialNumToRender={5}></FlatList>
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: 'white' }}>
                <Button title="Add +" buttonStyle={{ borderRadius: 60, backgroundColor: '#3743ab', width: '50%' }}
                    onPress={() => console.log(navigation.getParent().navigate('UserMeds', {
                        id: '1234'
                    }))}

                    style={{
                        backgroundColor: 'black',
                        borderWidth: 2,
                        position: 'absolute',
                        bottom: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        elevation: 8,
                        borderColor: 'white',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}></Button>
            </View>

            <Button loading={load} buttonStyle={{ backgroundColor: '#3743ab' }} onPress={() => fetch_meds()} title="Fetch meds"></Button>
        </View>
    )

}

export default Addmedicine;