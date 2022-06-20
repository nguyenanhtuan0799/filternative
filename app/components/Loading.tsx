import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 80,
    height: 80,
  },
});

interface LoadingProps {}

const Loading = ({}: LoadingProps) => {
  const animation = useRef<LottieView>(null);
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      animation?.current?.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottie}
        source={require('../assets/lottie/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;
