import { Ionicons } from '@expo/vector-icons';

import { Text, TouchableOpacity, View } from 'react-native';

import { THEME } from '../../theme';
import { AdInfo } from '../AdInfo';

import { styles } from './styles';

export interface AdCardData {
    id: string
    gameId: string
    hourEnd: string
    hourStart: string
    name: string
    useVoiceChannel: boolean
    weekDays: string[]
    yearsPlaying: number
}

interface AdCardProps {
  data: AdCardData
  onConnect: () => void
}

export function AdCard({data, onConnect}: AdCardProps) {
  return (
    <View style={styles.container}>
      <AdInfo 
        label='Nome' 
        value={data.name} 
      />
      <AdInfo 
        label='Tempo de Jogo' 
        value={`${data.yearsPlaying} Anos`} 
      />
      <AdInfo 
        label='Disponibilidade' 
        value={`${data.weekDays?.length} dias \u2022 ${data.hourStart}h - ${data.hourEnd}h`} 
      />
      <AdInfo 
        label='Chamada de Voz?' 
        value={data.useVoiceChannel ? 'Sim' : 'Não'} 
        color={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT} 
      />

      <TouchableOpacity style={styles.connectBtn} onPress={onConnect}>
        <Ionicons name="game-controller-outline" size={24} color={THEME.COLORS.TEXT} />
        <Text style={styles.btnLabel}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}