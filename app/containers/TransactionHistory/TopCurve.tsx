import React from 'react';
import { Svg, Path, Defs, ClipPath, Rect, Circle } from 'react-native-svg';
import { useTheme } from '../../components';

interface TopCurveProps {
  footerHeight: number;
}
const TopCurve = ({ footerHeight }: TopCurveProps) => {
  const theme = useTheme();
  const size = theme.borderRadii.xl;
  return (
    <Svg
      width={size}
      height={size}
      style={{ position: 'absolute', bottom: footerHeight, right: 0 }}
      viewBox="0 0 1 1">
      <Defs>
        <ClipPath id="clip">
          <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill={theme.colors.secondary} />
        </ClipPath>
      </Defs>
      <Rect
        clipPath={'url(#clip)'}
        x={0}
        y={0}
        width={1}
        height={1}
        fill={theme.colors.secondary}
      />
      <Circle clipPath={'url(#clip)'} cx={0.4} cy={0.5} r={0.5} fill={theme.colors.orange} />
    </Svg>
  );
};

export default TopCurve;
