import { useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert } from 'react-native';

import { THEME } from '../../theme';
import { Heading } from '../Heading';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Loading } from '../Loading';

interface DuoMatchProps extends ModalProps{
  discord: string
  closeModal: () => void
}

export function DuoMatch({discord, closeModal, ...rest}: DuoMatchProps) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleCopyDiscordToClipboad() {
    setIsLoading(true)
    await Clipboard.setStringAsync(discord)
    Alert.alert("Discord Copiado!", "Usuário do Discord copiado para sua área de transferência.")
    setIsLoading(false)
  }

  return (
    <Modal 
      transparent 
      statusBarTranslucent
      animationType='fade'
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity 
            style={styles.closeBtn}
            onPress={closeModal}
          >
            <AntDesign name="close" size={24} color="#71717A" />
          </TouchableOpacity>

          <FontAwesome5 name="check-circle" size={50} color={THEME.COLORS.SUCCESS} />
          <Heading title='Lets play!' subtitle='Agora é só começar a jogar!' />
          <Text style={styles.text}>Adicione no Discord</Text>

          <TouchableOpacity 
            style={styles.discordArea}
            onPress={handleCopyDiscordToClipboad}
            disabled={isLoading}
          >
            <Text style={styles.discord}>
              {isLoading ? <Loading /> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}