import { Image, Text, View } from 'react-native';
import { Heading } from '../Heading';

import { styles } from './styles';

import empty from '../../assets/empty.png'

interface EmptyProps {
  title: string
  subtitle: string
}

export function Empty({title, subtitle}: EmptyProps) {
  return (
    <View style={styles.container}>
      <Image source={empty} />
      <Heading title={title} subtitle={subtitle} />
    </View>
  );
}