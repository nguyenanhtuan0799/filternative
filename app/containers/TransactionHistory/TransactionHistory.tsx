import React from 'react';
import { Dimensions, Image, PixelRatio, ScrollView, StyleSheet } from 'react-native';
import { makeStyles, Theme, Box, Header, Text } from '../../components';
import { HomeNavigationProps } from '../../types/navigation';
import Graph, { DataPoint } from './Graph';
import Transaction from './Transaction';
import TopCurve from './TopCurve';

const footerHeight = PixelRatio.roundToNearestPixel(Dimensions.get('window').width / 3);
const startDate = new Date('2020-01-01').getTime();
const numberOfMonths = 6;

const useStyles = makeStyles((theme: Theme) => ({
  scrollView: {
    // paddingBottom: footerHeight,
  },
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
}));

const data: DataPoint[] = [
  {
    date: new Date('2020-01-01').getTime(),
    value: 139.42,
    color: 'orange',
    id: 123456,
  },
  {
    date: new Date('2020-04-01').getTime(),
    value: 281.23,
    color: 'yellow',
    id: 123457,
  },

  {
    date: new Date('2020-06-01').getTime(),
    value: 198.54,
    color: 'primary',
    id: 123458,
  },
];

const TransactionHistory = ({ navigation }: HomeNavigationProps<'TransactionHistory'>) => {
  const styles = useStyles();
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title={'Transaction History'}
        left={{ icon: 'align-justify', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'share', onPress: () => true }}
      />
      <Box padding="m" flex={1}>
        <Box flexDirection="row" justifyContent="space-between" alignItems="flex-end">
          <Box>
            <Text variant="header" color="secondary" opacity={0.3}>
              {'Total Spent'.toUpperCase()}
            </Text>
            <Text variant="title1">$699.96</Text>
          </Box>
          <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
            <Text color="primary">All Time</Text>
          </Box>
        </Box>
        <Graph data={data} startDate={startDate} numberOfMonths={numberOfMonths} />
        <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
          {data.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ScrollView>
      </Box>
      <TopCurve footerHeight={footerHeight} />
      <Box position="absolute" left={0} right={0} bottom={0} height={footerHeight}>
        <Image source={require('../../../assets/images/bg-pattern1.png')} style={styles.footer} />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
