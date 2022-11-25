import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyButton} from '../../components/MyButton';
import {MyTextInput} from '../../components/MyTextInput';
import {COLORS} from '../../themes/config';

const WelcomePage = () => {
  const navigation = useNavigation();
  const [loginSchema, setLoginSchema] = useState({
    name: '',
    password: '',
  });
  return (
    <View style={styles.container}>
      <View style={{width: '80%'}}>
        <Image
          style={{width: '100%', height: 80}}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={{width: '100%', marginTop: 24}}>
        <MyButton text="Facebook ile giriş yap" />
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
        <MyTextInput
          value={loginSchema.name}
          label="Telefon numarası , kullanıcı adı veya e-posta"
        />
        <MyTextInput value={loginSchema.password} label="Şifre" />
        <View
          style={{
            height: 40,
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity>
            <Text style={{fontSize: 16, color: COLORS.primary}}>
              Şifreni mi unuttun?
            </Text>
          </TouchableOpacity>
        </View>
        <MyButton
          text="Giriş Yap"
          disabled={
            loginSchema.name && loginSchema.password === '' ? false : true
          }
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 32,
          }}>
          <Text style={{fontSize: 16}}>Hesabın yok mu?</Text>
          <Pressable onPress={() => navigation.navigate('Register Page')}>
            <TouchableOpacity>
              <Text style={{fontSize: 16, color: COLORS.primary}}> Kaydol</Text>
            </TouchableOpacity>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: COLORS.bgLight,
    paddingTop: 100,
    flex: 1,
  },
  line_text: {flex: 0.2, textAlign: 'center', fontSize: 14, fontWeight: '600'},
  line: {
    borderBottomWidth: 1,
    flex: 0.4,
    borderColor: COLORS.lightGray,
  },
});

export default WelcomePage;
