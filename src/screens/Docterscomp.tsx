import { Alert, Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import EventCalendar from 'react-native-events-calendar';
import React from "react";
import { Button, SpeedDial } from "react-native-elements";

const Doctercomp = () => {
    const [open, setOpen] = React.useState(false);

    const events = [
        { start: '2017-09-07 00:30:00', end: '2017-09-07 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-07 01:30:00', end: '2017-09-07 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-07 04:10:00', end: '2017-09-07 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-07 01:05:00', end: '2017-09-07 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-07 14:30:00', end: '2017-09-07 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-08 01:20:00', end: '2017-09-08 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-08 04:10:00', end: '2017-09-08 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-08 00:45:00', end: '2017-09-08 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-08 11:30:00', end: '2017-09-08 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-09 01:30:00', end: '2017-09-09 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-09 03:10:00', end: '2017-09-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2017-09-09 00:10:00', end: '2017-09-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
    ]
const [dateevents , eventstate] = React.useState(events)
   
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const eventhandler = (ev)=>{
    
Alert.alert(JSON.stringify(ev))
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:'100%'
    },
  });
return(

    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    <View style={{height:'100%'}}>
<EventCalendar
      eventTapped={eventhandler}
      events={dateevents}
      width={width}
      initDate={'2017-09-08'}
      scrollToFirst
          upperCaseHeader
          uppercase
          scrollToFirst={false}
    />  
      </View>

    </View>
    </SafeAreaView>

)

}

export default Doctercomp;