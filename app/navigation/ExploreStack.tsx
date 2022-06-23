import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenA from '../containers/ScreenA';
import ScreenB from '../containers/ScreenB/ScreenB';
import {Button} from 'react-native';
import {navigate} from './RootNavigation';

const Stack = createStackNavigator<any>();

const ExploreStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={'Explore'}
      screenOptions={{
        gestureEnabled: false,

        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <Stack.Screen
        name="Explore"
        component={ScreenA}
        options={{
          headerLeft: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name="ScreenB"
        component={ScreenB}
        options={{
          headerShown: true,

          headerLeft: props => (
            <Button
              title="back"
              onPress={() => {
                navigation.navigate('Explore');
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreStack;
