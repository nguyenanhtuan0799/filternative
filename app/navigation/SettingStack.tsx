import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingScreen from '../containers/SettingScreen';

const Stack = createStackNavigator<any>();

const ExploreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
