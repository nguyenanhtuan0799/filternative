import {ColorValue} from 'react-native';
import Animated from 'react-native-reanimated';

export interface SVGProps {
  color: Animated.Node<string>;
  size: number;
}

export interface DummyScreenParams {
  name: string;
  backgroundColor: ColorValue;
  nextScreen: string;
  paddingBottom?: number;
}

export type MainTabsParams = {
  TabA: DummyScreenParams;
  TabB: DummyScreenParams;
  TabC: DummyScreenParams;
  TabD: DummyScreenParams;
};

export type {I18NKeys} from './I18NKeys';
