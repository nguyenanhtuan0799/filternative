import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {Box} from '../../components';

interface SplashScreenProps {
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  lottie: {
    width: 80,
    height: 80,
  },
  logo: {width: 170, height: 170},
});

const SplashScreen = ({navigation}: SplashScreenProps) => {
  const animation = useRef<LottieView>(null);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomTabs');
    }, 10000);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      animation?.current?.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <LottieView
          ref={animation}
          source={require('../../assets/lottie/ellipse-bust.json')}
          autoPlay
          loop
        />
      </Box>
      <Box alignItems="center" marginBottom={'l'}>
        <LottieView
          ref={animation}
          style={styles.lottie}
          source={require('../../assets/lottie/loading.json')}
          autoPlay
          loop
        />
      </Box>
    </View>
  );
};

export default SplashScreen;
