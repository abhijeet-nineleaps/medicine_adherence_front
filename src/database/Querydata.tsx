/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */

const Fetchdata = {
  getusermeds: async (txn: any) => {
    const reminder_array: any = [];
    return new Promise(resolve => {
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
 
};

export default Fetchdata;
