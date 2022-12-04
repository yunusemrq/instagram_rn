import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

export const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AuthStack');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        style={{width: 100, height: 100}}
        source={require('../../assets/images/instagram_logo.png')}
      />
    </View>
  );
};
