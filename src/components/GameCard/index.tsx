import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardData {
  id: string
  bannerUrl: string
  name: string
  _count: {
    ads: number
  }
}

interface GameCardProps extends TouchableOpacityProps{
  data: GameCardData
}

export function GameCard({ data, ...rest }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{uri: data.bannerUrl}} style={styles.cover}>
      <LinearGradient 
        colors={THEME.COLORS.FOOTER}
        style={styles.footer}
      >
        <Text style={styles.name}>
          {data.name}
        </Text>
        
        <Text style={styles.ads}>
          {data._count.ads} anúncios
        </Text>
      </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}