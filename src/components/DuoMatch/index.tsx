import { FontAwesome5 } from '@expo/vector-icons';
import { View, Modal, ModalProps, Text } from 'react-native';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

import { styles } from './styles';

interface DuoMatchProps extends ModalProps{
  discord: string
}

export function DuoMatch({discord, ...rest}: DuoMatchProps) {
  return (
    <Modal 
      transparent 
      statusBarTranslucent 
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <FontAwesome5 name="check-circle" size={50} color={THEME.COLORS.SUCCESS} />
          <Heading title='Lets play!' subtitle='Agora é só começar a jogar!' />
          <Text style={styles.text}>Adicione no Discord</Text>

          <View style={styles.discordArea}>
            <Text style={styles.discord}>
              {discord}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}