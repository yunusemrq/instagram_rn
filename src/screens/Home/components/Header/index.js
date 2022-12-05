import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Logo from '../../../../assets/images/logo.png';
import {window} from '../../../../themes/config';
import DownArrow from '../../../../assets/icons/downArrow.svg';
import Hearth from '../../../../assets/icons/hearth.svg';
import Message from '../../../../assets/icons/message.svg';
import BoxPlus from '../../../../assets/icons/boxPlus.svg';

const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: window.width / 2.7,
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={styles.logo} source={Logo} />
        <DownArrow width={12} height={12} color="black" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Hearth width={24} height={24} color="black" />
        <Message style={{marginHorizontal: 20}}width={24}height={24}color="black"/> 
        <BoxPlus width={24} height={24} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Header;
