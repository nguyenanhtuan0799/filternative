import React from 'react';
import {Switch, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeMode, selectCount} from '../../redux/reducers/appearance';
type Props = {};

const SettingScreen = (props: Props) => {
  const dispatch = useDispatch();
  const isDark = useSelector(selectCount);

  const toggleSwitch = () => {
    dispatch(changeMode());
  };
  console.log(isDark);
  return (
    <View>
      <Text>DarkMode:</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDark}
      />
      <Text>Translate:</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDark}
      />
    </View>
  );
};

export default SettingScreen;
