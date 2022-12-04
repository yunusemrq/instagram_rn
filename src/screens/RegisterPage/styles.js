import {StyleSheet} from 'react-native';
import {COLORS, window} from '../../themes/config';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: window.offset,
  },
  tab_menu_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  bottom_comment: {
    position: 'absolute',
    bottom: 20,
    paddingTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    width: '100%',
  },
  profile_box: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: 175,
    height: 175,
    borderRadius: 100,
    marginBottom: 16,
  },
  register_type_select: {
    borderBottomWidth: 2,
    borderColor: COLORS.darkGray,
    padding: 10,
    flex: 0.5,
  },
  register_type_text: {
    textAlign: 'center',
    fontWeight: '600',
  },
  form_info_text: {
    fontSize: 11,
    color: COLORS.darkGray,
    textAlign: 'center',
    marginVertical: 10,
  },
});
