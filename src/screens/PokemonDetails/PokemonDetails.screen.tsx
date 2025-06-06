import React from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './PokemonDetails.styles';
import { useRoute } from '@react-navigation/native';
import { usePokemonDetails } from './usePokemonDetails';
import { POKEMON_IMAGE_URL } from '../../environment';
import { RouteProp } from '@react-navigation/native';
import { Stats } from './components/Stats';
import { Types } from './components/Types';
import { Abilities } from './components/Abilities';
import { EvolutionChain } from './components/EvolutionChain';
import { RootStackParamList } from '../../routes/main';

type PokemonDetailsProps = {
  route: RouteProp<RootStackParamList, 'Pokemon Details'>;
};

export const PokemonDetailsScreen: React.FC<PokemonDetailsProps> = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Pokemon Details'>>();
  const { pokemonId } = route.params;
  const { pokemonDetails, isLoading, error } = usePokemonDetails(pokemonId);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error || !pokemonDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error || 'Failed to load Pokemon details'}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `${POKEMON_IMAGE_URL}${pokemonId}.png`,
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.name}>{pokemonDetails.name}</Text>
        </View>

        <Types types={pokemonDetails.types} />
        <Stats stats={pokemonDetails.stats} />
        <Abilities abilities={pokemonDetails.abilities} />
        <EvolutionChain pokemonId={pokemonId} />
      </View>
    </ScrollView>
  );
}; 