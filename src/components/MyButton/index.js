import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../themes/config';
import {MaterialIndicator} from 'react-native-indicators';

export const MyButton = props => {
  const {text, style, loader, onPress, disabled = false} = props;
  return (
    <Pressable style={{height: 42}}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <View
          style={[
            styles.btn_container,
            {
              backgroundColor: disabled
                ? 'rgba(0, 149, 246, 0.3)'
                : COLORS.primary,
            },
          ]}>
          <Text style={styles.btn_text}>
            {loader ? (
              <MaterialIndicator size={24} color={COLORS.white} />
            ) : (
              text
            )}
          </Text>
        </View>
      </TouchableOpacity>
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
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
