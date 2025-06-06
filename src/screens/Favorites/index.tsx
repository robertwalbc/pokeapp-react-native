import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritesScreen } from './Favorites.screen';
import { PokemonDetailsScreen } from '../PokemonDetails';
import { RootStackParamList } from '../../routes/main';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: require('../../utils/colors').colors.pokeRed,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Favorites List" component={FavoritesScreen} options={{ title: 'Favorites' }} />
      <Stack.Screen name="Pokemon Details" component={PokemonDetailsScreen} options={{}} />
    </Stack.Navigator>
  );
};

// Also export FavoritesScreen for any direct imports
export { FavoritesScreen } from './Favorites.screen'; 