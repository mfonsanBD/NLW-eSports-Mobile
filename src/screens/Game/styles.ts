import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 64
  },
  cover: {
    width: '100%',
    height: 380,
    position: 'relative'
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.7,
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  },
  backBtn: {
    marginTop: 48,
    marginLeft: 16,
    width: 40,
    height: 40,
    backgroundColor: THEME.COLORS.CAPTION_300,
    padding: 8,
    borderRadius: 8
  },
  titleSection: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 320,
    paddingHorizontal: 16
  },
  titleArea: {
    width: '100%',
    height: 90,
    backgroundColor: THEME.COLORS.CAPTION_300,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 8
  },
  title: {
    color: THEME.COLORS.SHAPE,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK
  },
  subtitle: {
    color: THEME.COLORS.CAPTION_500,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  caption: {
    marginTop: 32,
    marginBottom: 16
  },
  contentList: {
    paddingRight: 64
  }
});