import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../themes/config';

export const MyButton = ({text, style, disabled = false}) => {
  return (
    <Pressable style={{height: 32}}>
      <View
        style={[
          styles.btn_container,
          {
            backgroundColor: disabled
              ? 'rgba(0, 149, 246, 0.3)'
              : COLORS.primary,
          },
        ]}>
        <Text style={styles.btn_text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  btn_text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
