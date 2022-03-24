import {Button, StyleSheet, Text, View, Alert, FlatList} from 'react-native';
import React, {useState} from 'react';
import ProgressCircle from 'react-native-progress-circle';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import SQLite from 'react-native-sqlite-storage';
var weeks = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

const TodayPerformance = ({route}) => {
  const db = SQLite.openDatabase(
    {
      name: 'MedRemdb',
      location: 'default',
    },
    () => {
      console.log('opened');
    },
    error => {
      console.log(error);
    },
  );

  const {user_id} = route.params;
  const [count, setCount] = useState(0);
  const [Timings, setTime] = useState([]);
  const [value, setValue] = useState(0);

  React.useEffect(() => {
    db.transaction(async function (txn) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)',
        [],
      );

      txn.executeSql(
        'SELECT * FROM `User_medicines` where user_id = ?',
        [user_id],
        function (tx, res) {
          // meds_array.push(res.rows.item(i));
          console.log(res.rows.item(0).time);
          console.log(res.rows.item(0).start_date);
          console.log(res.rows.item(0).end_date);
          let arr = res.rows.item(0).days.split(":");
          let set = new Set(arr);
          var today = new Date(res.rows.item(0).start_date)
          var tody_date = new Date();
console.log(set.has(weeks[tody_date.getDay()]))
 
if(set.has(weeks[tody_date.getDay()])){
  setTime(res.rows.item(0).time.split('-'));

}
          
          
          console.log(Timings);
          // setTime(Timings)
        },
      );
    });
  }, []);

  const Box = props => {
    const {time} = props;
    const [med1, setMed1] = useState(false);
    const [taken, takenstatus] = useState(false);

                
    return (
      <View style={{padding: 15, paddingLeft: 30, marginTop: 14}}>
        <BouncyCheckbox
          size={22}
          fillColor="#3743ab"
          unfillColor="#FFFFFF"
          text={time}
          isChecked={med1}
          iconStyle={{borderColor: '#3743ab', borderWidth: 1.3}}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            fontSize: 17,
            color: 'black',
          }}
          disableBuiltInState
          onPress={() => {
            setMed1(!med1);
            takenstatus(!taken);
          }}
        />
        {taken ? (
          <Text style={{color: 'green', marginLeft: 40}}>Taken</Text>
        ) : (
          <Text style={{color: 'red', marginLeft: 40}}>Not Taken</Text>
        )}
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View style={{paddingTop: 15, paddingLeft: 15, marginLeft: 18}}>
            <ProgressCircle
              percent={value}
              radius={26}
              borderWidth={3}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff">
              <Text style={{fontSize: 15, color: '#3743ab'}}>{value}</Text>
            </ProgressCircle>
          </View>
          <View
            style={{
              flexDirection: 'column',
              paddingLeft: 30,
              paddingTop: 15,
            }}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>
              Performance for past 7 days
            </Text>
            <Text>You have some active reminders.</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            paddingBottom: 10,
            paddingRight: 45,
            margin: 15,
          }}></View>
      </View>
      <View style={{padding: 15, backgroundColor: 'lightgrey'}}>
        <Text style={{fontWeight: 'bold'}}>Timings</Text>
      </View>
      <View>
        <FlatList
          data={Timings}
          renderItem={({item}) => {
            return <Box time={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default TodayPerformance;
