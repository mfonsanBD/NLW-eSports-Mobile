import { ColorValue, Text, View } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface AdInfoProps {
  label: string
  value: string
  color?: ColorValue
}

export function AdInfo({label, value, color = THEME.COLORS.TEXT}: AdInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color }]} numberOfLines={1}>{value}</Text>
    </View>
  );
}