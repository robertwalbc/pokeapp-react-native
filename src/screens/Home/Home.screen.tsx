import * as React from 'react';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { styles } from './Home.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { 
  SafeAreaView, 
  View, 
  Text, 
  ActivityIndicator, 
  FlatList,
  RefreshControl, 
} from 'react-native';
import { RootStackParamList } from '../../routes/main';
import { useHome, getPokemonId } from './useHome';
import { PokemonCard } from '../../components/PokemonCard';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Pokemon {
  name: string;
  url: string;
}

export const Home = () => {
  const { pokemons, isLoading, isLoadingMore, isRefreshing, error, loadMore, refresh, flatListRef } = useHome();
  const navigation = useNavigation<HomeNavigationProp>();
  useScrollToTop(flatListRef);

  const renderItem = ({ item }: { item: Pokemon }) => (
    <PokemonCard
      name={item.name}
      url={item.url}
      onPress={() => navigation.navigate('Pokemon Details', { pokemonId: getPokemonId(item.url) })}
    />
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <Text>{error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <FlatList
        ref={flatListRef}
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refresh}
          />
        }
        ListFooterComponent={
          isLoadingMore ? (
            <View style={styles.footer}>
              <ActivityIndicator size="large" />
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
};
