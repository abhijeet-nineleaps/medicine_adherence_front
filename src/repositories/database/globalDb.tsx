import SQLite from 'react-native-sqlite-storage';
function globalDb() {
 return SQLite.openDatabase({
    name: 'MedStickdb',
    location: 'default',
  });
}

export default globalDb;
