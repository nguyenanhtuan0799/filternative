import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Text} from '../theme';
type Props = {
  icon?: JSX.Element;
  title: string;
  check?: boolean;
  name?: string;
  onPress?: (val: object) => void;
};

const FilterChecked = ({icon, title, name, check, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        typeof onPress === 'function' && onPress({name, check});
      }}>
      <View style={styles.des}>
        {icon}
        <Text variant="textFilter">{title}</Text>
      </View>
      {check ? (
        <View style={styles.check}>
          <Icon name="check" size={20} color="blue" />
        </View>
      ) : (
        <View style={styles.check} />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  des: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    minWidth: 30,
  },
});
export default FilterChecked;
