import React from 'react';
import moment from 'moment';
import { StyleSheet } from 'react-native';
import { Box, Text, useTheme } from '../../components';

const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1;
};

interface UnderlayProps {
  minY: number;
  maxY: number;
  startDate: number;
  step: number;
  numberOfMonths: number;
}

const MARGIN = 'xl';
const ROW_HEIGHT = 16;

const Underlay = ({ step, minY, maxY, startDate, numberOfMonths }: UnderlayProps) => {
  const theme = useTheme();
  const minDate = moment(startDate);
  return (
    <Box style={StyleSheet.absoluteFillObject}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((t) => {
          return (
            <Box
              key={t}
              flexDirection="row"
              alignItems="center"
              height={ROW_HEIGHT}
              style={{
                top: t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT / 2 : 0,
              }}>
              <Box width={theme.spacing[MARGIN]} paddingRight="s">
                <Text textAlign="right" color="darkGrey">
                  {Math.round(lerp(minY, maxY, t))}
                </Text>
              </Box>
              <Box flex={1} height={1} backgroundColor="grey" />
            </Box>
          );
        })}
      </Box>
      <Box
        marginLeft={MARGIN}
        height={theme.spacing[MARGIN]}
        flexDirection="row"
        alignItems="center">
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, 'month'))
          .map((date, index) => (
            <Box key={index} width={step}>
              <Text color="darkGrey" textAlign="center">
                {date.format('MMM')}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
