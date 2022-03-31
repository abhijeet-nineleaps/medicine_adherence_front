import { useFocusEffect } from "@react-navigation/native";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { View ,TouchableOpacity,Text } from "react-native";
import { ListItem ,Button , Divider} from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import SQLite from 'react-native-sqlite-2';
import { Card} from 'react-native-paper';
import { faClock, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {IconProp} from '@fortawesome/fontawesome-svg-core';

const Addevent = () => {
  const [reminders , reminderstate] = React.useState<any[]>([]);

  useEffect(()=>{

    const db = SQLite.openDatabase('test.db','1.0','',1)
        db.transaction(function(txn:any){
           let reminder_array:any[] = [];
            txn.executeSql('SELECT * FROM `reminders`', [], function (tx, res) {
                for (let i = 0; i < res.rows.length; ++i) {
                    console.log('item:', res.rows.item(i));
                reminder_array.push(res.rows.item(i));
                  }
 reminderstate(reminder_array)
              });
            
        })
     

  },[])

  const renderitem = ({item}) => {
   return( 
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column', margin: 10}}>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Pcm suspension 450ml
          </Text>
          <Text>Medicine</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>Everyday</Text>
            <Text> | </Text>
            <Text>10 AM, 2 PM, 6 PM</Text>
          </View>
        </View>
        <View style={{padding: 30}}>
          <TouchableOpacity
            onPress={() => {}}>
            <FontAwesomeIcon size={20} icon={faTrashCan as IconProp}></FontAwesomeIcon>
          </TouchableOpacity>
        </View>
      </View>
      <Divider style={{marginTop: 15}} />
    </>
   )
  }

return(

<View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
 
 <FlatList data={reminders} renderItem={renderitem}></FlatList>

</View>

)

}

export default Addevent;