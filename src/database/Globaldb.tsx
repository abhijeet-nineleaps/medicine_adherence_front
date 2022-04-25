import SQLite from 'react-native-sqlite-storage';

function globalDb() {
  const db = SQLite.openDatabase(
    {
      name: 'MedStickdb',
      location: 'default',
    },
    () => {
      console.log('opened');
    },
    error => {
      console.log(error);
    },
  );

  return db;
}

export default globalDb;
