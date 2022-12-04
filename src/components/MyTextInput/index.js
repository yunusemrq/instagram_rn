import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from '../../themes/config';

export const MyTextInput = props => {
  const {label, value, onChangeText, style, password, phone} = props;
  return (
    <>
      <TextInput
        style={[styles.text_input, style]}
        placeholderTextColor={COLORS.mediumGray}
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </>
  );
};
const styles = StyleSheet.create({
  text_input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 6,
    marginBottom: 6,
    paddingHorizontal: 14,
    height: 46,
  },
});
