import React, {ReactNode} from 'react';
import {ViewStyle, TextStyle, ImageStyle, Dimensions} from 'react-native';
import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from '@shopify/restyle';

export const pallette = {
  white: 'white',
};

export const theme = createTheme({
  colors: {
    primary: '#FAAD00',
    dark: '#000',
    primaryLight: 'rgba(130, 209, 102,  0.2)',
    lightBlue: '#BFEAF5',
    secondary: '#25509E',
    danger: '#FF0058',
    orange: '#FE5E33',
    green: '#27BB66',
    yellow: '#FDC234',
    purple: '#4024A2',
    title: '#0C0D34',
    text: '#C9C9C9',
    grey: 'rgba(12, 13,52,  0.05)',
    darkGrey: '#808080',
    lightGrey: '#FAFAFA',
    background: '#212330',
    background2: '#171822',
    white: '#ffffff',
  },
  screenSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  spacing: {
    z: 0,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 60,
  },
  button: {
    s: 20,
    m: 32,
    l: 48,
    xl: 60,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    ml: 50,
    xl: 75,
    xxl: 100,
  },
  textVariants: {
    textFilter: {marginLeft: 'm', fontSize: 14},

    text: {fontSize: 17, fontWeight: 'bold', marginBottom: 'm'},
    textFoot: {
      fontSize: 17,
      color: 'white',
    },
    defaults: {},
    hero: {
      // fontFamily: 'SFProDisplay-Bold',
      fontSize: 80,
      lineHeight: 80,
      textAlign: 'center',
      color: 'white',
    },
    title1: {
      fontSize: 28,
      // fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      // fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    title3: {
      fontSize: 16,
      // fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    popupTitle: {
      fontSize: 18,
      // fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      // fontFamily: 'SFProDisplay-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      // fontFamily: 'SFProDisplay-Medium',
      color: 'text',
      textAlign: 'center',
    },
    header: {
      fontsize: 12,
      lineHeight: 24,
      // fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    information: {
      fontSize: 14,
      // fontFamily: 'SFProDisplay-Regular',
      color: 'text',
      marginRight: 'm',
    },
    required: {
      color: 'danger',
    },
  },
  breakpoints: {},
});

export const ThemeProvider = ({children}: {children: ReactNode}) => (
  <ReStyleThemeProvider {...{theme}}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};
export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
