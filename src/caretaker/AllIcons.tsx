/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  faUserNurse,
  faUserFriends,
  faRightToBracket,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function Caretaker_nurse() {
  return (
    <FontAwesomeIcon
      style={{marginBottom: 6}}
      color="#3743ab"
      icon={faUserNurse}></FontAwesomeIcon>
  );
}

function Signout() {
  return <FontAwesomeIcon color="white" icon={faSignOut}></FontAwesomeIcon>;
}

function Righttoobracket() {
  return (
    <FontAwesomeIcon color="white" icon={faRightToBracket}></FontAwesomeIcon>
  );
}

function Userfriend() {
  return (
    <FontAwesomeIcon
      style={{marginBottom: 6}}
      color="#3743ab"
      icon={faUserFriends}></FontAwesomeIcon>
  );
}

export {Caretaker_nurse, Userfriend, Righttoobracket, Signout};
