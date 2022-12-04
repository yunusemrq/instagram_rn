import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {MyButton} from '../../components/MyButton';
import {MyTextInput} from '../../components/MyTextInput';
import {COLORS} from '../../themes/config';
import {styles} from './styles';

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const loginProcess = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigation.replace('HomeStack');
    }, 1750);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{width: '64%'}}>
          <Image
            style={{width: '100%', height: 80, resizeMode: 'contain'}}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={{width: '100%', marginTop: 8}}>
          <MyTextInput
            style={{marginBottom: 12}}
            value={username}
            onChangeText={e => setUsername(e.target)}
            label="Telefon numarası , kullanıcı adı veya e-posta"
          />
          <MyTextInput
            style={{marginBottom: 14}}
            value={password}
            onChangeText={e => setPassword(e.target)}
            label="Şifre"
            password={isVisible}
          />
          <MyButton
            onPress={() => loginProcess()}
            text="Giriş Yap"
            loader={loader}
            disabled={username == '' || password == '' ? true : false}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 12,
            }}>
            <Text style={{fontSize: 12, color: COLORS.gray}}>
              Giriş detaylarını mı unutun?
            </Text>
            <Text style={{fontSize: 12, color: COLORS.primary}}>
              {' '}
              Giriş yapmak için yardım al.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 21,
            }}>
            <View style={styles.line} />
            <Text style={styles.line_text}>YA DA</Text>
            <View style={styles.line} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 24,
                width: 24,
                borderRadius: 50,
                resizeMode: 'contain',
              }}
              source={require('../../assets/images/facebook_logo.png')}
            />
            <Text style={{color: '#4267B2', marginLeft: 4}}>
              Facebook İle Giriş Yap
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Hesabın yok mu?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
          <Text style={{color: COLORS.primary}}> Kaydol.</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginPage;
