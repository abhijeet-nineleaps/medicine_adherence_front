import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground ,Image} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const OnboardingScreen = ({navigation}) => {
    setTimeout(() => {
      navigation.navigate('Drawer')
    }, 500);
  return (
        
    <View style={{height:'100%',backgroundColor:'#3743ab',justifyContent:'center',alignItems:'center'}}>
    <Image  source={require('../../assests/Medstick_1.png')} style={{width:400,height:400,marginTop:20}} resizeMode='contain'></Image>                

               



    </View>
  );
  };

export default OnboardingScreen; 