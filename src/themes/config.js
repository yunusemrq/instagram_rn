import {Dimensions} from 'react-native';

export const COLORS = {
  // default font color
  font: '#000000',
  bgDark: '#000000',
  bgLight: '#FFFFFF',
  // base colors
  primary: '#0095f6',
  secondary: '#F3992F',
  third: '#F3EE6F',
  darkBlue: '#18274B',
  darkGray: '#666666',
  mediumGray: '#8e8e8e',
  lightGray: '#dbdbdb',
  extraLightGray: '#F7F7F7',

  // non-colors
  black: '#000000',
  white: '#FFFFFF',

  // validation colors
  valid: '#7ACB5E',
  invalid: '#E35050',
  warning: '#FFCA41',

  // color variations
  gray: '#999999',
  error: '#DC3545',
  success: '#4CD964',
  info: '#4DA1FF',

  //ios statusbar color
  statusbar_dark: 'light-content',
  statusbar_light: 'dark-content',

  // app colors
  selectedCheckboxBackground: '#48586E',
  unselectedCheckboxBorder: '#D4D4D4',
  placeholder: '#7E7E7E',
};

export const TEXTS = {
  h1: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
  },
  h3: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 1,
  },
};

export const window = {
  offset: 20,
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
