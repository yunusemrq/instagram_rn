import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/config';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: COLORS.bgLight,
    paddingTop: 100,
    flex: 1,
  },
  line_text: {
    flex: 0.2,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.gray,
  },
  line: {
    borderBottomWidth: 1,
    flex: 0.4,
    borderColor: COLORS.lightGray,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    paddingTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    width: '100%',
  },
});
