import { Alert, Button,View } from "react-native"
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Settings from "./Settings";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Mypatient from "./patient/Mypatients";
import Patientrequest from "./patient/Patientrequest";
import { Tab ,TabView} from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome ,faMedkit , faPerson, faUserNurse,faUserFriends ,faScrewdriver,faHospitalUser} from '@fortawesome/free-solid-svg-icons'


 const Patientcomp = ({navigation}) => {
  const [index, setIndex] = React.useState(0);

    const clicked = () =>{
        Alert.alert("No patient found");
    }

 return (


<>
<Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      style={{backgroundColor:'#3743ab'}}
      variant="primary"
    >
      <Tab.Item
        title="My Patients"
        containerStyle={{backgroundColor:'#3743ab'}}
        titleStyle={{ fontSize: 12 }}
        icon={()=><FontAwesomeIcon style={{marginBottom:6}} color="white" icon={faHospitalUser}></FontAwesomeIcon>}
      />
      <Tab.Item
        title="Patient Request"
        titleStyle={{ fontSize: 12 }}
        containerStyle={{backgroundColor:'#3743ab'}}

        icon={()=><FontAwesomeIcon style={{marginBottom:6}} color="white" icon={faUserFriends}></FontAwesomeIcon>}      />
      
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item  style={{ backgroundColor: 'white', width: '100%' }}>
        <Mypatient navigation={navigation}></Mypatient>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
      <Patientrequest></Patientrequest>
      </TabView.Item>
     
    </TabView>







   {/* <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#f5610a",
      tabBarInactiveTintColor: "#555",
      tabBarLabelStyle: {
        fontSize: 16,
      }})}
    >

      <Tab.Screen name="MyPatients"  component={Mypatient} options={{headerShown:false}}/>
      <Tab.Screen name="Patients requests" component={Patientrequest} options={{headerShown:false}}/>


    </Tab.Navigator> */}
    </>

 )


}

export default Patientcomp;