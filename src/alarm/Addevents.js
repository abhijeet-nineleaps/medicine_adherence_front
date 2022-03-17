import { useFocusEffect } from "@react-navigation/native";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { ListItem ,Button} from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import SQLite from 'react-native-sqlite-2';

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
   return( <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <ListItem.Content>
        <ListItem.Title>{item.time}</ListItem.Title>
        <ListItem.Subtitle>{item.days}</ListItem.Subtitle>
        <ListItem.Subtitle>{item.start_date}</ListItem.Subtitle>
        
    </ListItem.Content>
    <Button title="Delete"></Button>
    
</ListItem>
   )
  }

return(

<View style={{backgroundColor:'white',height:'100%'}}>
 
 <FlatList data={reminders} renderItem={renderitem}></FlatList>

</View>

)

}

export default Addevent;