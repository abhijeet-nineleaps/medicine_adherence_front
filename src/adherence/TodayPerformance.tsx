import {Button, StyleSheet, Text, View, Alert, FlatList,Image} from 'react-native';
import React, {useState} from 'react';
import ProgressCircle from 'react-native-progress-circle';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import SQLite from 'react-native-sqlite-storage';
var weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
import Toast from 'react-native-toast-message';
import { set } from 'react-native-reanimated';
var cc = 0;


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
  const [count, setCount_state] = useState(0);
  const [total_reminders, total_reminder_state] = useState(0);
  
  const [Timings, setTime] = useState([]);
  const [value, setValue] = useState(0);

  const updatetimes = async(time:never) => {
    console.log(time, ' ', Timings.indexOf(time));
    const index = Timings.indexOf(time);

    if (index > -1) {
      Timings.splice(index, 1);
    }
    console.log(Timings);
    let new_timing = '';
    Timings.forEach(eitem => {
      new_timing += eitem;
    });
    console.log(new_timing)
    let tody_date = new Date();
    let td_da = tody_date.getDate()+'-'+(tody_date.getMonth()+1)+'-'+tody_date.getFullYear();    cc+=1;
    console.log(cc)
   await db.transaction(async function (txxn) {
      txxn.executeSql(
        'UPDATE reminder_day SET timings = ? WHERE date = ? AND med_id = ?',
        [new_timing,td_da,user_id],function(err,result){
          console.log(result.rows.item(0))
          console.log(err)
        }
      );

    await  txxn.executeSql('UPDATE User_medicines SET current_count = ? WHERE user_id = ?',[cc,user_id])
      Toast.show({
        type:'info',
        text1:'Updated successfully',
        position:'bottom'
      })
    });
  };

  React.useEffect(() => {
    db.transaction(async function (txn) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)',
        [],
      );

      txn.executeSql(
        'SELECT * FROM `User_medicines` where user_id = ?',
        [user_id],
        function (tx:any, res:any) {
          // meds_array.push(res.rows.item(i));
          console.log(res.rows.item(0).time);
          console.log(res.rows.item(0).total_med_reminders);
          console.log(res.rows.item(0).current_count);
          cc = res.rows.item(0).current_count;
          let arr = res.rows.item(0).days.split(':');
          let set = new Set(arr);
          var today = new Date(res.rows.item(0).end_date);
          var tody_date = new Date();
          let td_da = tody_date.getDate()+'-'+(tody_date.getMonth()+1)+'-'+tody_date.getFullYear();
          console.log(set.has(weeks[tody_date.getDay()]));

          if (set.has(weeks[tody_date.getDay()]) && tody_date <=  today) {
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS reminder_day(rem_id INTEGER PRIMARY KEY NOT NULL , date TEXT , timings TEXT, med_id INTEGER)',
              [],
            );
            txn.executeSql(
              'SELECT * FROM reminder_day where date = ? AND med_id = ?',
              [td_da, user_id],
              function (tx, resp) {
                for (let k = 0; k < resp.rows.length; k++) {
                  console.log(resp.rows.item(k), ' item');
                }
                console.log(resp.rows.length, ' item arr');

                if (resp.rows.length === 0) {
                  console.log('NO id present but created ', resp.rows.item(0));
                  txn.executeSql(
                    'INSERT INTO reminder_day (date,timings,med_id) VALUES (?,?,?)',
                    [
                      td_da,
                      res.rows.item(0).time,
                      user_id,
                    ],
                  );

                  setTime(res.rows.item(0).time.split('-'));

                  txn.executeSql(
                    'SELECT * FROM reminder_day where date = ? AND med_id = ?',
                    [td_da, user_id],
                    function (tx, respp) {
                      setTime(respp.rows.item(0).timings.split('-'));
                    },
                  );
                } else {
                  console.log('id present', resp.rows.item(0));
                  txn.executeSql(
                    'SELECT * FROM reminder_day where date = ? AND med_id = ?',
                    [td_da, user_id],
                    function (tx, respp) {
                      setTime(respp.rows.item(0).timings.split('-'));
                    },
                  );
                  console.log(Timings)
                }
              },
            );
          }else{
            setTime([""]);

          }

          console.log(Timings);
          // setTime(Timings)
        },
      );
    });
  }, []);

  const Box = (props:any) => {
    const {time} = props;
    const [med1, setMed1] = useState(false);
    const [taken, takenstatus] = useState(false);

    return (
      time.length !==0 &&
      <View style={{padding: 15, paddingLeft: 30, marginTop: 14}}>

        <BouncyCheckbox
          size={22}
          fillColor="#3743ab"
          unfillColor="#FFFFFF"
          text={time}
          disabled={taken}
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
            updatetimes(time);
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
          <Toast visibilityTime={1000}></Toast>

      <View style={{flexDirection: 'column'}}>
       
      </View>
      <View style={{padding: 15, backgroundColor: 'lightgrey'}}>
        <Text style={{fontWeight: 'bold'}}>Timings</Text>
      </View>
      {
            (Timings.length !== 0 && Timings[0].length === 0) ? 
            <View style={{justifyContent:'center' , alignItems:'center'}}> 
             <Image source={require('../../assests/noremtoday.png')} style={{height:300,width:300}} ></Image>
            </View> : <View>
        <FlatList
          data={Timings}
          renderItem={({item}) => {
            return <Box time={item} />;
          }}
        />
      </View>
      }
      
    </View>
  );
};

export default TodayPerformance;
