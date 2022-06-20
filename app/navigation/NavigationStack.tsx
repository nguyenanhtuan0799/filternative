import * as React from 'react';
import {Appearance, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabs from './BottomTabs';
import {navigationRef, isReadyRef} from './RootNavigation';
import Splash from '../containers/SplashScreen';
import {
  AppNavigationThemeDark,
  AppNavigationThemeDefault,
} from '../fixtures/themes';

const Stack = createStackNavigator<any>();

const NavigationStack = () => {
  const colorScheme = Appearance.getColorScheme();
  const isDark = colorScheme === 'dark';
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDark ? AppNavigationThemeDark : AppNavigationThemeDefault}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          // presentation: 'modal',
          cardStyle: {backgroundColor: 'transparent'},
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
