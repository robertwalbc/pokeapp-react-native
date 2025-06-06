import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useEvolutionChain } from './useEvolutionChain.ts';
import { styles } from './EvolutionChain.styles.ts';

interface EvolutionChainProps {
  pokemonId: number;
}

interface EvolutionPokemon {
  id: number;
  name: string;
}

export const EvolutionChain: React.FC<EvolutionChainProps> = ({ pokemonId }) => {
  const { evolutionChain, isLoading, error } = useEvolutionChain(pokemonId);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!evolutionChain?.length) {
    return (
      <View style={styles.container}>
        <Text>No evolution data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evolution Chain</Text>
      <View style={styles.chainContainer}>
        {evolutionChain.map((pokemon: EvolutionPokemon, index: number) => (
          <React.Fragment key={pokemon.id}>
            {index > 0 && <Text style={styles.arrow}>→</Text>}
            <View style={styles.pokemonContainer}>
              <Image
                source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` }}
                style={styles.image}
              />
              <Text style={styles.pokemonName}>{pokemon.name}</Text>
            </View>
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}; 