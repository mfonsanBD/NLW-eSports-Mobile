import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardData {
  id: string
  cover: ImageSourcePropType
  name: string
  ads: string
}

interface GameCardProps extends TouchableOpacityProps{
  data: GameCardData
}

export function GameCard({ data, ...rest }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={data.cover} style={styles.cover}>
      <LinearGradient 
        colors={THEME.COLORS.FOOTER}
        style={styles.footer}
      >
        <Text style={styles.name}>
          {data.name}
        </Text>
        
        <Text style={styles.ads}>
          {data.ads} anúncios
        </Text>
      </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}