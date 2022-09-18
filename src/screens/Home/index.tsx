import { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard, GameCardData } from '../../components/GameCard';
import { Background } from '../../components/Background';

export function Home() {
  const [games, setGames] = useState<GameCardData[]>([])
  const navigation = useNavigation()

  function handleOpenGame({id, title, bannerUrl, _count}: GameCardData) {
    navigation.navigate('game', {id, title, bannerUrl, _count})
  }

  useEffect(() => {
    fetch('https://cc9b-45-183-208-163.sa.ngrok.io/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
          source={logoImg}
          style={styles.logo}
        />

        <Heading 
          title='Encontre seu duo!' 
          subtitle='Selecione o game que deseja jogar...' 
        />

        <FlatList 
          data={games}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </SafeAreaView>
    </Background>
  );
}