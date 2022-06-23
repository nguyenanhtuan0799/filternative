import React from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import FilterChecked from '../../../components/FilterChecked';
import FilterSwicth from '../../../components/FilterSwitch';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import {Box, Text} from '../../../components';

type Props = {
  modalVisible: boolean;
  setModalVisible: any;
};
const sort = [
  {
    icon: <Icon1 name="trophy" size={26} color={'#050505'} />,
    title: 'Chon cho riêng bạn',
  },
  {
    icon: <Icon1 name="like" size={26} color={'#050505'} />,
    title: 'Phổ biến nhất',
  },
  {
    icon: <Icon1 name="star" size={26} color={'#050505'} />,
    title: 'Xếp hạng',
  },
  {
    icon: <Icon1 name="calendar" size={26} color={'#050505'} />,
    title: 'Thời gian giao hàng',
  },
];

const uber = [
  {
    icon: <Icon1 name="tag" size={26} color={'#050505'} />,
    title: 'Ưu đãi',
    name: 'uudai',
  },
  {
    icon: <Icon1 name="star" size={26} color={'#050505'} />,
    title: 'Xếp hạng cao nhất',
    name: 'rank',
  },
];

const ticket = [
  {
    icon: <Icon1 name="camera" size={26} color={'#050505'} />,
    title: 'Ticket Restaurent',
    name: 'ticket',
  },
  {
    icon: <Icon1 name="cart" size={26} color={'#050505'} />,
    title: 'Swile',
    name: 'swile',
  },
  {
    icon: <Icon1 name="chart" size={26} color={'#050505'} />,
    title: 'Pass Sodexo',
    name: 'pass',
  },
  {
    icon: <Icon1 name="comment" size={26} color={'#050505'} />,
    title: 'Bimpli',
    name: 'bimpli',
  },
  {
    icon: <Icon1 name="heart" size={26} color={'#050505'} />,
    title: 'UpDejeuner',
    name: 'updejeunner',
  },
];

const eats = [
  {
    icon: <Icon1 name="eye" size={26} color={'#050505'} />,
    title: 'Đồ ăn chay',
    name: 'chay',
  },
  {
    icon: <Icon1 name="gear" size={26} color={'#050505'} />,
    title: 'Đồ ăn thuần chay',
    name: 'thuanchay',
  },
  {
    icon: <Icon1 name="heart" size={26} color={'#050505'} />,
    title: 'Đồ ăn không chừa gluten',
    name: 'kogluten',
  },
  {
    icon: <Icon1 name="image" size={26} color={'#050505'} />,
    title: 'Halal',
    name: 'halal',
  },
  {
    icon: <Icon1 name="lock" size={26} color={'#050505'} />,
    title: 'Dùng được cho người bị dị ứng',
    name: 'diung',
  },
];
const ModalFilter = ({modalVisible, setModalVisible}: Props) => {
  const [isCheckSort, setIsCheckSort] = React.useState<number>(0);
  const [arrCheck, setArrCheck] = React.useState<Array<number>>([]);
  const [uberEat, setUberEat] = React.useState<Array<object>>([]);
  const [arrCheckEat, setArrCheckEat] = React.useState<Array<number>>([]);
  const dataTicket = ticket.filter((t, i) => {
    return arrCheck.includes(i) && t;
  });
  const dataEat = eats.filter((t, i) => {
    return arrCheckEat.includes(i) && t;
  });

  const handleSubmit = () => {
    let data = {
      sort: sort[isCheckSort],
      uber: uberEat,
      ticket: dataTicket,
      eat: dataEat,
    };
    setUberEat([]);
    console.log(data);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        console.log('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <SafeAreaView>
        <View style={styles.modalView}>
          <View style={styles.modalHead}>
            <Pressable
              style={styles.close}
              onPress={() => {
                setModalVisible(!modalVisible);
                console.log('a');
              }}>
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
            <View>
              <Text style={styles.modalText}>Tat ca bo loc</Text>
            </View>
          </View>
          <ScrollView
            style={{
              maxHeight: Dimensions.get('window').height * 0.78,
            }}>
            <View style={styles.body}>
              <Box marginVertical="s" style={styles.check}>
                <Text variant="text">Sap Xep</Text>
                {sort.map((s, i) => {
                  return (
                    <FilterChecked
                      key={i}
                      {...s}
                      check={i === isCheckSort}
                      onPress={() => setIsCheckSort(i)}
                    />
                  );
                })}
              </Box>
              <Box marginVertical="s" style={styles.check}>
                <Text variant="text">Tu Uber Eats</Text>
                {uber.map((u, i) => {
                  return (
                    <FilterSwicth
                      key={i}
                      {...u}
                      onValueChange={val => {
                        setUberEat(prev => [...prev, val]);
                      }}
                    />
                  );
                })}
              </Box>
              <Box marginVertical="s" style={styles.check}>
                <Text variant="text">Phieu giam gia do an</Text>
                {ticket.map((t, i) => {
                  return (
                    <FilterChecked
                      key={i}
                      {...t}
                      check={arrCheck.includes(i)}
                      onPress={() => {
                        if (arrCheck.includes(i)) {
                          setArrCheck(prev => prev.filter(p => p !== i));
                        } else {
                          if (arrCheck.length < 3) {
                            setArrCheck(prev => [...prev, i]);
                          }
                        }
                      }}
                    />
                  );
                })}
              </Box>
              <Box marginVertical="s" style={styles.check}>
                <Text variant="text">Che do an</Text>
                {eats.map((t, i) => {
                  return (
                    <FilterChecked
                      key={i}
                      {...t}
                      check={arrCheckEat.includes(i)}
                      onPress={() => {
                        if (arrCheckEat.includes(i)) {
                          setArrCheckEat(prev => prev.filter(p => p !== i));
                        } else {
                          setArrCheckEat(prev => [...prev, i]);
                        }
                      }}
                    />
                  );
                })}
              </Box>
            </View>
          </ScrollView>
          <Box
            borderTopWidth={0.7}
            style={{width: Dimensions.get('window').width}}
            justifyContent="center"
            alignItems="center">
            <Box
              marginTop="s"
              backgroundColor="dark"
              style={{width: Dimensions.get('window').width * 0.9, height: 50}}
              justifyContent="center"
              alignItems="center">
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text variant="textFoot">Ap Dung</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalHead: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    top: 14,
    left: 20,
    zIndex: 10,
    width: 30,
    height: 20,
  },
  check: {
    width: Dimensions.get('window').width * 0.9,
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

export default ModalFilter;
