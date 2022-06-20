import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenA from '../containers/ScreenA';

const Stack = createStackNavigator<any>();

const ExploreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Explore'}
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <Stack.Screen name="Explore" component={ScreenA} />
      <Stack.Screen name="ScreenA" component={ScreenA} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
