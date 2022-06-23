import React from 'react';
import {Button} from 'react-native';
import {Box, Text} from '../../components';
import VectorImage from 'react-native-vector-image';

function ScreenA({navigation}: any) {
  return (
    <Box>
      <Text>Screen A</Text>
      <VectorImage source={require('../../../Group.svg')} />

      <Button
        title="Go B"
        onPress={() => {
          navigation.navigate('ScreenB');
        }}
      />
    </Box>
  );
}

export default ScreenA;
