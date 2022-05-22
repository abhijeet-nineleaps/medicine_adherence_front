import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: 'white'},
  modal: {alignItems: 'center', backgroundColor: 'red'},
  carousalView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  carousalImageView: {padding: 40},
  carousalImage: {
    borderRadius: 30,
    padding: 50,
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  paginationInactiveDot: {
    backgroundColor: 'red',
    // Define styles for inactive dots here
  },
  syncView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  syncText: {fontWeight: '800', color: 'white'},
  conatiner1: {flexDirection: 'row'},
  medNameView: {width: '100%', borderColor: 'lightgrey', borderEndWidth: 1},
  medNamePicker: {
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 3,
    color: 'black',
    elevation: 3,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
  },
  container2Left: {left: 10},
  container2LeftText: {color: 'black', fontSize: 18, marginTop: 30},
  container2Right: {alignItems: 'center', paddingRight: 20, margin: 10},
  container2RightText: {fontSize: 18, color: '#4dd0e1'},
  conatiner3: {
    padding: 15,
    backgroundColor: 'lightgrey',
    marginBottom: 5,
  },
  conatiner3Text: {fontWeight: '600'},
  button: {backgroundColor: '#3743ab'},
});

export default styles;
