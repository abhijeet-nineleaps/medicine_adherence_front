import { useFocusEffect } from "@react-navigation/native";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { View ,TouchableOpacity } from "react-native";
import { ListItem ,Button} from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import SQLite from 'react-native-sqlite-2';
import { Card} from 'react-native-paper';
import { faClock, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Addevent = () => {
  const [reminders , reminderstate] = React.useState([]);

  useEffect(()=>{

    const db = SQLite.openDatabase('test.db','1.0','',1)
        db.transaction(function(txn){
           let reminder_array = [];
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
    <Card
    style={{ borderRadius:30,
    margin:6,
    borderColor:'lightgrey',
    elevation:5,
    shadowColor:'#3743ab'}}>
      <ListItem style={{flexDirection:'row',alignItems:'center',justifyContent:'center'
            }}>
        <ListItem.Content >
            <ListItem.Title >{item.title}</ListItem.Title>
            <ListItem.Subtitle >{item.start_date}</ListItem.Subtitle>
        </ListItem.Content>
            <TouchableOpacity onPress={() => {}}  >
                    <View style={{ alignItems: 'center'}}>
                      <FontAwesomeIcon icon={faTrashCan} color={'#3743ab'} size={25}  />

                    </View>
            </TouchableOpacity>


        </ListItem>
     </Card>
   )
  }

return(

<View style={{backgroundColor:'white',height:'100%'}}>
 
 <FlatList data={reminders} renderItem={renderitem}></FlatList>

</View>

)

}

export default Addevent;