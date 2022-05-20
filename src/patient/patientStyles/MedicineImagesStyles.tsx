import { StyleSheet,Dimensions } from "react-native";



const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

const styles= StyleSheet.create({
    container1: {
        height: '20%',
        backgroundColor: 'white',
        borderRadius: 20,
        width: ITEM_WIDTH,
        shadowColor: '#000',
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 2,
      },
      image: {
        width: ITEM_WIDTH,
        height: 200,
        borderRadius: 10,
      },
      header: {
        color: '#222',
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 20,
      },
      bodyView:{flexDirection: 'row', justifyContent: 'space-between'},
      body: {
        color: '#222',
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
      },

      //main
      container:{
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      },
      date:{fontSize: 18, fontWeight: '700', color: 'grey'},
      carousel:{height: 340, backgroundColor: 'white'},
      pageDot:{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'red',
      },
      pageContainer:{
        position: 'relative',
      },
      inactiveDot:{
        backgroundColor: 'black',
        // Define styles for inactive dots here
      },

});
export default styles;