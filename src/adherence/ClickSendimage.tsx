/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';

const CameraScreen = ({navigation}) => {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  return (
    <View style={{height: '100%'}}>
      <View style={{flex: 1}}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={{height: '100%'}}></RNCamera>

        <TouchableOpacity
          onPress={async () => {
            const data = await takePicture();
            console.log(data.uri);
            navigation.navigate('Sentocaretaker', {
              image_uri: data.uri,
            });
          }}
          style={{
            borderColor: 'white',
            position: 'absolute',
            bottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <LottieView
            style={{width: 240, height: 240}}
            source={require('../../assests/animate/camera1.json')}
            autoPlay
            loop></LottieView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
