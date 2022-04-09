import React from 'react';
import analytics from '@react-native-firebase/analytics';

import {NavigationContainer} from '@react-navigation/native';
import Stackscreen from './src/stackscreens/Stackscreen';

const App: React.FC = () => {
  const routeNameRef: any = React.useRef();
  const navigationRef: any = React.useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}>
      <Stackscreen></Stackscreen>
    </NavigationContainer>
  );
};

export default App;
