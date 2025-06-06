import * as React from 'react';
import { SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './Favorites.styles.ts';
import { useFavorites } from './useFavorites';
import { PokemonCard } from '../../components/PokemonCard';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/main';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const FavoritesScreen = () => {
  const { favoritePokemons, loading, flatListRef } = useFavorites();
  const navigation = useNavigation<NavigationProp>();
  useScrollToTop(flatListRef);

  if (loading) {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  if (favoritePokemons.length === 0) {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <Text style={styles.emptyStateText}>{`No favorites yet.\nTap the heart icon on a Pokémon to add it here!`}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <FlatList
        ref={flatListRef}
        data={favoritePokemons}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            url={item.url}
            onPress={() => navigation.navigate('Pokemon Details', { pokemonId: item.id })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: 8 }}
      />
    </SafeAreaView>
  );
}; 