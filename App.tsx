import React, {useEffect, useState} from 'react';

import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import Stackscreen from './src/stackscreens/Stackscreen';

const App:React.FC = () => {
  return (
    <NavigationContainer>
      <Stackscreen></Stackscreen>
    </NavigationContainer>
  );
};

export default App;
