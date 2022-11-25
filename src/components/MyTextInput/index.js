import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from '../../themes/config';

export const MyTextInput = ({label, value, onChangeText}) => {
  return (
    <>
      <TextInput
        style={styles.text_input}
        placeholderTextColor={COLORS.mediumGray}
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
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
    paddingHorizontal: 8,
    height: 46,
  },
});
