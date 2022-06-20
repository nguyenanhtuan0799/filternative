import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenA from '../containers/ScreenA';

const Stack = createStackNavigator<any>();

const ExploreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <Stack.Screen name="Settings" component={ScreenA} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
