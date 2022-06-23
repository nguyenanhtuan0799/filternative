import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {Box, Text} from '../theme';
type Props = {
  icon?: JSX.Element;
  title: string;
  onValueChange?: (val: object) => void;
  name: string;
};

const FilterChecked = ({icon, name, title, onValueChange}: Props) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Box style={styles.container}>
      <View style={styles.des}>
        {icon}
        <Text variant="textFilter">{title}</Text>
      </View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={val => {
          toggleSwitch();

          val &&
            typeof onValueChange === 'function' &&
            onValueChange({name: name, check: val});
        }}
        value={isEnabled}
      />
    </Box>
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
