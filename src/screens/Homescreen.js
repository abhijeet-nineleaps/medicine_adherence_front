import React, { useState } from "react"
import SearchBar from "react-native-dynamic-search-bar";
import {View, 
     Text,
     ScrollView, 
     ImageBackground,
     TextInput,
     BackHandler,
     TouchableOpacity,
     FlatList,
     Button,
     Dimensions
    } from 'react-native'

import { SafeAreaView } from "react-native-safe-area-context"
import Carousel from "react-native-snap-carousel";
import {sliderData } from "../model/data";
import { useEffect } from "react";

import { Image } from "react-native-elements";
import BannerSlider from "./BannerSlider";

const  HomeScreen = ({navigation})=>{
    const windowWidth = Dimensions.get('window').width;
     const sliderData = [
        {
            title: 'First Doctor',
            image: require('../../assests/docter2.jpg'),
        },
        {
            title: 'Second Pharmacy',
            image: require('../../assests/docter.webp'),
        },
        {
            title: 'Third Caretaker',
            image: require('../../assests/pharmacy.jpeg'),
        },
    ];
     const slider = [
        {
            title: 'First ',
            image: require('../../assests/diabetes.jpg'),
        },
        {
            title: 'Second ',
            image: require('../../assests/medi.jpg'),
        },
        {
            title: 'Third ',
            image: require('../../assests/diag.png'),
        },
    ];
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => BackHandler.exitApp()
        )
        
      }, [])
    
    const [doctorsTab, setDoctorsTab] = useState(1);
    const [spinnerVisibility, svs] = useState(false);
    const [spintext , spintextstate] = useState('');

    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item}/>;
    };

    const onSelectSwitch = (value) => {
        console.log(value)
            setDoctorsTab(value);
    };
    const item = ({item})=>{
          return <Text>{item.title}</Text>
    }
    const handleOnChangeText = (text) => {
        // ? Visible the spinner

        svs(true);
        spintextstate(text)
        svs(false)

    
        
      };
     

    return(
        <SafeAreaView style={{flex: 1,backgroundColor: '#fff'}}>
            <ScrollView style={{padding: 20}}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom:0,
                }}>
                {/* <Text style={{fontSize: 25,fontWeight:'bold', fontFamily: 'Roboto-Medium'}}>
                    Hello User</Text> */}
                
                </View>
                <View>
                <SearchBar
                    height={50}
                    fontSize={16}
                    fontColor="black"
                    iconColor="#fdfdfd"
                    shadowColor="#282828"
                    cancelIconColor="blue"
                    backgroundColor="white"
                    style={{borderColor:'black',borderRightColor:'blue'}}
                    spinnerVisibility={spinnerVisibility}
                    placeholder="Search "
                    fontFamily="BurbankBigCondensed-Black"
                    
                    onChangeText={handleOnChangeText}
                    />
                </View>
               
                <View style={{
                    marginVertical: 15,
                    flexDirection:'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{fontSize: 22,fontWeight:'bold', fontFamily: 'Roboto-Medium'}}>
                        Our Offerings</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={{color: '#0aada8' ,fontSize:18}}>See all</Text>
                    </TouchableOpacity>
                </View>
                
              <Carousel 
                    ref={(c) => { this._carousel = c; }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
              />
               <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    
                }}>
                <Text style={{fontSize: 20,fontWeight:'bold', fontFamily: 'Roboto-Medium'}}>
                    Not feeling too well?</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,

                }}>
                <Text style={{fontSize: 15, fontFamily: 'Roboto-Medium'}}>
                Treat common symptoms instantly via video consultation</Text>
                </View>
                
            <View style={{flexDirection:'column' ,marginTop:20,marginBottom:30}}>
                <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:20} }>
                    <View style={{flexDirection:'column'}}>
                        <Image 
                            source={require('../../assests/fever.png')} 
                            style={{width: 70, height: 70}} 
                            imageStyle={{borderRadius:25}}
                            
                        />
                        <Text style={{marginLeft:15,fontSize:18,color:'black'}}>Fever</Text>
                    </View>
                    <View>
                        <Image 
                            source={require('../../assests/acne.png')} 
                            style={{width: 70, height: 60,marginTop:10}} 
                            imageStyle={{borderRadius:25}}
                        />
                        <Text style={{marginLeft:6,fontSize:18,color:'black'}}>Pimples</Text>
                    </View>
                    <View style={{flexDirection:'column',marginRight:10}}>
                            <Image 
                            source={require('../../assests/dryeyes.jpeg')} 
                            style={{width: 70, height: 60,marginTop:10}} 
                            imageStyle={{borderRadius:25}}
                        />
                        <Text style={{fontSize:18,color:'black'}}>Dry Eyes</Text>
                    </View>
                   
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:10,marginLeft:8}}>
                    
                    <View style={{flexDirection:'column'}}>
                        <Image 
                            source={require('../../assests/kidney.png')} 
                            style={{width: 70, height: 60}} 
                            imageStyle={{borderRadius:25}}
                        />
                        <Text style={{fontSize:18,color:'black',marginLeft:8}}>Frequent </Text>
                        <Text style={{fontSize:18,color:'black',marginLeft:8}}>Urination</Text>
                    
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Image 
                            source={require('../../assests/pregnancy.jpeg')} 
                            style={{width: 70, height: 60}} 
                            imageStyle={{borderRadius:25}}
                        />
                        <Text style={{fontSize:18,color:'black'}}>Pregnancy </Text>
                        <Text style={{fontSize:18,color:'black'}}>issue</Text>
                    
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Image 
                            source={require('../../assests/breathing.png')} 
                            style={{width: 70, height: 60}} 
                            imageStyle={{borderRadius:25}}
                        />
                        <Text style={{fontSize:18,color:'black'}}>Breathing </Text>
                        <Text style={{fontSize:18,color:'black'}}>problems</Text>
                    
                    </View>
                </View>
                
            </View>

            <Carousel 
                    ref={(c) => { this._carousel = c; }}
                    data={slider}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
                    style={{height:70,marginTop:30}}
              />
                <View style={{marginTop:50}} />


            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
