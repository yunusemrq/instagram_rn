import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

export const SplashScreen = () => {
  const [isAuth, setIsAuth] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      if (isAuth) {
        navigation.replace('HomeStack');
      } else {
        navigation.replace('AuthStack');
      }
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
