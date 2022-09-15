import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

function homeIcon() {
  return <Icon name="home" size={22} color="white"></Icon>;
}
function medIcon() {
  return <Icon color="white" size={20} name="medkit"></Icon>;
}
function userIcon() {
  <Icon size={22} color="white" name="user-md"></Icon>;
}
function settingIcon() {
  return <IonIcon size={22} color="white" name="settings"></IonIcon>;
}
function camIcon() {
  return <Icon size={20} color="white" name="camera"></Icon>;
}
function manIcon() {
  return <IonIcon size={22} color="white" name="man"></IonIcon>;
}

export {homeIcon, medIcon, userIcon, settingIcon, camIcon, manIcon};
