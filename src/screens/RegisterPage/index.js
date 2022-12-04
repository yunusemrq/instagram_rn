import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../themes/config';
import {styles} from './styles';
import {MyTextInput} from '../../components/MyTextInput';
import {MyButton} from '../../components/MyButton';

const RegisterPage = () => {
  const navigation = useNavigation();
  const [registerType, setRegisterType] = useState(true);

  const handleRegisterType = value => {
    setRegisterType(value);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profile_box}></View>
        <View style={styles.tab_menu_container}>
          <Pressable
            style={[styles.register_type_select,{borderBottomColor: registerType ? 'black' : COLORS.darkGray},]} //prettier-ignore
            onPress={() => handleRegisterType(true)}>
            <Text
              style={[styles.register_type_text,{color: registerType ? COLORS.black : COLORS.darkGray},]} //prettier-ignore
            >
              TELEFON
            </Text>
          </Pressable>
          <Pressable
            style={[styles.register_type_select,{borderBottomColor: registerType ? COLORS.darkGray : COLORS.black}]} //prettier-ignore
            onPress={() => handleRegisterType(false)}>
            <Text
              style={[styles.register_type_text, {color: registerType ? COLORS.darkGray : COLORS.black},]} //prettier-ignore
            >
              E-POSTA
            </Text>
          </Pressable>
        </View>
        <View style={{width: '100%'}}>
          {registerType ? (
            <>
              <MyTextInput style={{marginTop: 15}} label="Telefon" />
              <Text style={styles.form_info_text}>
                Güvenlik ve giriş amaçlarıyla bizden SMS bildirimleri
                alabilirsiniz.
              </Text>
            </>
          ) : (
            <MyTextInput
              style={{marginTop: 15, marginBottom: 20}}
              label="E-posta"
            />
          )}
          <MyButton text="İleri" />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.bottom_comment}>
        <Text>Hesabın zaten var mı?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={{color: COLORS.primary}}> Giriş yap.</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RegisterPage;
