import { Dimensions, Image, StyleSheet, View, ViewBase } from "react-native"
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Kaede, Madoka, Hideo } from "react-native-textinput-effects";
import InteractiveTextInput from "react-native-text-input-interactive";
import { Button, Text, useTheme } from "react-native-elements";
import * as yup from 'yup';
import Toast from 'react-native-toast-message';
import LottieView from 'lottie-react-native';
import { TextInput } from "react-native-paper";
import SQLite from 'react-native-sqlite-storage';
import { Formik } from 'formik';
import {Picker, Picker as Picks} from '@react-native-picker/picker';

const db = SQLite.openDatabase({
    name:'MedRemdb',
    location:'default'
},()=>{
    console.log('opened')
},error=>{
    console.log(error)
})

const UserMed = ({ route, navigation }) => {
    const [pickerValue, setPickerValue] = React.useState('');

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

   

    const savemedicinetodb = async ({name,des}) => {

        // const db = SQLite.openDatabase('test.db', '1.0', '', 1)

      await  db.transaction( (txn)=> {
            txn.executeSql('CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER , total_med_reminders INTEGER , current_count INTEGER)', []);
            var value = Math.floor(1000 + Math.random() * 9000);

            txn.executeSql('INSERT INTO User_medicines (user_id,medicine_name,medicine_des,title,time,days,start_date,end_date,status,sync,total_med_reminders,current_count) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [value,name, des, '','','','','',0,0,0,0]);

            txn.executeSql('SELECT * FROM `User_medicines`', [], function (tx, res) {
                for (let i = 0; i < res.rows.length; ++i) {
                    console.log('item:', res.rows.item(i));
                }
            });

        })
        Toast.show({
            type:'info',
            text1:'Added successfully!',
            position:'bottom'
        })
        setTimeout(()=>{
            navigation.navigate('Drawer');

        },1500)
    }
    const schema = yup.object({
        name:yup.string().required().min(4),
        des:yup.string().required().min(10)
        })
    return (
        <View style={{ backgroundColor: 'white', height: height, width: width }}>
        <Toast></Toast>
            <View style={{ alignItems: 'center' ,justifyContent:'center'}}>
                <LottieView style={{ width: 300, height: 300 }} source={require('../assests/animate/med_des.json')} autoPlay loop speed={2}></LottieView>

            </View>
            <View style={{ margin: 12, marginTop:20, height: height / 4, backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Formik initialValues={{name:'',des:''}}
                    validationSchema={schema}
                    
                    onSubmit={(values)=>{
                         console.log(values)
                         savemedicinetodb(values)
                    }}>
                    {
                        (formikprops)=>(
            <><TextInput onChangeText={formikprops.handleChange('name')} 
            value ={formikprops.values.name}
                       placeholder="Medicine name"
                       mode='outlined' label='Medicine name'>   

            </TextInput>
            <Text style={{color:'red'}}>{formikprops.touched.name && formikprops.errors.name}</Text>
            <TextInput style={{marginTop:20}} onChangeText={formikprops.handleChange('des')} 
                       value ={formikprops.values.des}
                       placeholder="Description"
                       mode='outlined' label='Medicine description'>   

            </TextInput>
            <Text style={{color:'red'}}>{formikprops.touched.des && formikprops.errors.des}</Text>
           

            <Button
                    title="Add medicine"

                    buttonStyle={{ backgroundColor: '#3743ab' }}
                    containerStyle={{
                        width: '100%',
                        position: 'relative',
                        marginTop:50,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    titleStyle={{ color: 'white', marginHorizontal: 20 }}
                    onPress={formikprops.handleSubmit}
                />
            </>
                        )
                    }
            
            </Formik>
            </View>
            <View style={{ marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>

                </View>
        </View>

    )
}

export default UserMed;