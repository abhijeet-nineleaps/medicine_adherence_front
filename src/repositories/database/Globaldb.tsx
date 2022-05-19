import SQLite from 'react-native-sqlite-storage';

function globalDb() {
  const db = SQLite.openDatabase({
    name: 'MedStickdb',
    location: 'default',
  });

  return db;
}

export default globalDb;
