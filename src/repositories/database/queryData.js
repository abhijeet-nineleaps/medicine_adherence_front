const queryData = {
  getusermeds: async (txn) => {
    const reminder_array = [];
    return new Promise(resolve => {
      txn.executeSql(
        'SELECT * FROM `User_medicines`',
        [],
        function locFnc (res) {
          for (let i = 0; i < res.rows.length; ++i) {
            reminder_array.push(res.rows.item(i));
          }
          resolve(reminder_array);
        },
      );
    });
  },
};

export default queryData;
