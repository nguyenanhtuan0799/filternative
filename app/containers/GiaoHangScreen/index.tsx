import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Box} from '../../components';
import Icon from 'react-native-vector-icons/Entypo';

type Props = {
  setModalVisible: any;
  modalVisible: boolean;
};

const GiaoHangScreen = ({setModalVisible, modalVisible}: Props) => {
  return (
    <>
      <Box>
        <Icon name="info" size={20} color="#000" />
      </Box>
      <Box>
        <Text>Bay Gio : Paris</Text>
      </Box>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Icon name="menu" size={20} color="black" />
      </TouchableOpacity>
    </>
  );
};

export default GiaoHangScreen;
