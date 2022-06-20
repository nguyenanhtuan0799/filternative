import moment from 'moment';
import React from 'react';
import { Dimensions } from 'react-native';
import { Box, useTheme, Theme } from '../../components';
import Underlay from './Underlay';

const { width: wWidth } = Dimensions.get('window');
const aspectRatio = 195 / 305;
const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1;
};
export interface DataPoint {
  date: number;
  value: number;
  id: number;
  color: keyof Theme['colors'];
}
interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const MARGIN = 'xl';

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const theme = useTheme();
  // const numberOfMonths = new Date(maxDate - minDate).getMonth();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  const step = width / numberOfMonths;
  const values = data.map((p) => p.value);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  return (
    <Box paddingLeft={MARGIN} paddingBottom={MARGIN} marginTop={MARGIN}>
      <Underlay
        minY={minY}
        maxY={maxY}
        startDate={startDate}
        numberOfMonths={numberOfMonths}
        step={step}
      />
      <Box width={width} height={height}>
        {data.map((point) => {
          const i = Math.round(moment.duration(moment(point.date).diff(startDate)).asMonths());
          return (
            <Box
              key={point.id}
              position="absolute"
              width={step}
              left={i * step}
              bottom={0}
              height={lerp(0, height, point.value / maxY)}>
              <Box
                position="absolute"
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                opacity={0.1}
                backgroundColor={point.color}
                borderTopLeftRadius={'m'}
                borderTopRightRadius={'m'}
              />
              <Box
                position="absolute"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color}
                borderRadius={'m'}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
