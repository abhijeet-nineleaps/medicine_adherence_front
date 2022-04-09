/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-unused-vars */
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MedRemdb',
    location: 'default',
  },
  () => {
    console.log('opened');
  },
  (error: any) => {
    console.log(error);
  },
);
const Allreminderdata = async (med_name: any) => {
  let reminder_obj: any;
  let map = new Map<String, Object>();

  function reminder_promise() {
    return new Promise((resolve, reject) => {
      db.transaction(async function (txn: any) {
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)',
          [],
        );
        let med_id: Number = 0;
        txn.executeSql(
          'SELECT * FROM `User_medicines` WHERE medicine_name = ?',
          [med_name],
          function (tx: any, res: any) {
            // meds_array.push(res.rows.item(i));
            reminder_obj = res.rows.item(0);
            med_id = parseInt(res.rows.item(0).user_id);
            console.log(med_id);
            txn.executeSql(
              'SELECT * FROM `reminder_day` WHERE med_id = ?',
              [med_id],
              function (tx: any, respp: any) {
                console.log(reminder_obj);

                for (let o = 0; o < respp.rows.length; o++) {
                  console.log(respp.rows.item(o));
                  const curr_rem_obj = respp.rows.item(o);

                  let overall_timings = new Set(reminder_obj.time.split('-'));
                  let taken_missed_times = new Set(
                    curr_rem_obj.timings.split('-'),
                  );
                  console.log(overall_timings, ' ', taken_missed_times);
                  let final_timeings_obj = {taken: Array(), not_taken: Array()};

                  overall_timings.forEach((m_time: any) => {
                    if (taken_missed_times.has(m_time)) {
                      final_timeings_obj.not_taken.push(m_time);
                    } else {
                      final_timeings_obj.taken.push(m_time);
                    }
                  });
                  map.set(curr_rem_obj.date, final_timeings_obj);
                }
                resolve(map);
              },
            );
          },
        );
      });
    });
  }
  map = await reminder_promise();

  // console.log(map)
  return map;
};

export default Allreminderdata;
