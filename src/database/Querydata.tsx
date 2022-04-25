/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import SQLite from 'react-native-sqlite-storage';
import globalDb from './Globaldb';

const db = globalDb();
const Fetchdata = {
  getusermeds: async (txn: any) => {
    const reminder_array: any = [];
    return new Promise((resolve, reject) => {
      txn.executeSql(
        'SELECT * FROM `User_medicines`',
        [],
        function (tx: any, res: any) {
          for (let i = 0; i < res.rows.length; ++i) {
            reminder_array.push(res.rows.item(i));
          }
          resolve(reminder_array);
        },
      );
    });
  },
  deleteUserMedicinesandhistory: () => {
   return new Promise((resolve, reject) => {
      db.transaction(async function (txn) {
        txn.executeSql('DROP TABLE IF EXISTS User_medicines', []);
        txn.executeSql('DROP TABLE IF EXISTS reminder_day', []);
        resolve('');
      });
    });
  },
};

export default Fetchdata;
