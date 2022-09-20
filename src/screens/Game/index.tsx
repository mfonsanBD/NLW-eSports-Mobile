import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { GameParams } from '../../@types/navigation';

import { Empty } from '../../components/Empty';
import { Background } from '../../components/Background';
import { AdCard, AdCardData } from '../../components/AdCard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { DuoMatch } from '../../components/DuoMatch';

export function Game() {
  const [adsByGame, setAdsByGame] = useState<AdCardData[]>([]);
  const [duoSelected, setDuoSelected] = useState('')

  const route = useRoute();
  const game = route.params as GameParams;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`https://77fd-201-76-186-90.ngrok.io/games/${game.id}/ads`)
    .then(response => response.json())
    .then(data => setAdsByGame(data))
  }, [game._count.ads !== 0])

  async function handleGetAdDiscord(adId: string){
    await fetch(`https://77fd-201-76-186-90.ngrok.io/ads/${adId}/discord`)
    .then(response => response.json())
    .then(data => setDuoSelected(data.discord))
  } 

  return (
    <Background>
      <ImageBackground
        source={{uri: game.bannerUrl}}
        style={styles.cover}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <TouchableOpacity style={styles.backBtn} onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={24} color={THEME.COLORS.SHAPE} />
        </TouchableOpacity>

        <View style={styles.titleSection}>
          <View style={styles.titleArea}>
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.subtitle}>
              {game._count.ads === 0 
              ? 'Nunhum anúncio neste jogo.' 
              : `Este jogo tem ${game._count.ads} anúncio${game._count.ads === 1 ? '' : 's' }!`
              }
              
            </Text>
          </View>
        </View>
      </ImageBackground>

      
      <SafeAreaView style={styles.container}> 
      {game._count.ads > 0 
        ? (
          <>
            <View style={styles.caption}>
              <Text style={styles.subtitle}>Conecte-se e comece a jogar!</Text>
            </View>
            
            <FlatList 
              data={adsByGame}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <AdCard 
                  data={item} 
                  onConnect={() => handleGetAdDiscord(item.id)} />
              )}
              contentContainerStyle={styles.contentList}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </>
        ) 
        : (
          <Empty 
            title='Jogo Vazio!' 
            subtitle='Ainda não tem anúncio neste jogo. Mas você pode escolher outro...'
          />
        )
      }
      <DuoMatch 
        visible={duoSelected.length > 0} 
        discord={duoSelected}
        closeModal={() => setDuoSelected('')}
      />
      </SafeAreaView>
    </Background>
  );
}