import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 220,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 16,
    marginRight: 16
  },
  connectBtn: {
    width: '100%',
    backgroundColor: '#8B5CF6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingVertical: 8,
    borderRadius: 6
  },
  btnLabel: {
    marginLeft: 8,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  }
});