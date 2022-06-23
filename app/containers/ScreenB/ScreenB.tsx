import React from 'react';
import {Dimensions, StyleSheet, SafeAreaView} from 'react-native';
import ModalFilter from './ModaFilter';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {Box} from '../../components/theme';
import GiaoHangScreen from '../GiaoHangScreen';
import NhanHangScreen from '../NhanHangScreen';
function ScreenB() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Box style={styles.centeredView}>
        <ModalFilter
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <SegmentedControl
          values={['Giao Hang', 'Nhan Hang']}
          selectedIndex={tab}
          style={{width: 200, height: 30}}
          fontStyle={{color: 'black'}}
          activeFontStyle={{color: 'white'}}
          backgroundColor="transparent"
          tintColor="#000"
          onChange={event => {
            setTab(event.nativeEvent.selectedSegmentIndex);
          }}
          onValueChange={value => {
            console.log(value);
          }}
        />
        <Box
          marginTop="m"
          flexDirection="row"
          justifyContent="space-between"
          style={{width: Dimensions.get('window').width * 0.9}}>
          {tab === 0 ? (
            <GiaoHangScreen
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          ) : (
            <NhanHangScreen />
          )}
        </Box>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
    width: Dimensions.get('window').width,
  },
  wrap: {},

  close: {
    position: 'absolute',
    top: 0,
    left: 20,
    zIndex: 10,
    width: 30,
    height: 20,
  },
  body: {
    marginTop: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,

    textAlign: 'center',
  },
});

export default ScreenB;
