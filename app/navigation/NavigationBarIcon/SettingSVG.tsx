import * as React from 'react';
import Animated from 'react-native-reanimated';
import Svg, {Path, PathProps} from 'react-native-svg';
import {SVGProps} from '../../types';

const AnimatedPath = Animated.createAnimatedComponent(
  Path,
) as any as React.ComponentClass<
  Animated.AnimateProps<{}, PathProps & {style?: any}>
>;

Animated.addWhitelistedNativeProps({
  stroke: true,
});

const SettingSVG = ({color, size}: SVGProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <AnimatedPath
        d="M 12 9 C 13.6568542495 9 15 10.3431457505 15 12 C 15 13.6568542495 13.6568542495 15 12 15 C 10.3431457505 15 9 13.6568542495 9 12 C 9 10.3431457505 10.3431457505 9 12 9 Z"
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <AnimatedPath
        d="M19.4 15a1.65 1.65 0 0 0 0.33 1.82l0.06 0.06 a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-0.06-0.06a1.65 1.65 0 0 0-1.82-0.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-0.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82 0.33 l-0.06 0.06 a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l0.06-0.06a1.65 1.65 0 0 0 0.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h0.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-0.33-1.82l-0.06-0.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l0.06 0.06 a1.65 1.65 0 0 0 1.82 0.33 H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v0.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-0.33l0.06-0.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-0.06 0.06 a1.65 1.65 0 0 0-0.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-0.09a1.65 1.65 0 0 0-1.51 1z"
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SettingSVG;
