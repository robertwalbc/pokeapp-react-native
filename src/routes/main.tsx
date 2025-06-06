import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokemonDetailsScreen } from '../screens/PokemonDetails';
import { colors } from '../utils/colors';
import { Home } from '../screens/Home';

export type RootStackParamList = {
    'Pokemon Home': undefined;
    'Favorites List': undefined;
    'Pokemon Details': { pokemonId: number };
};
  
const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Pokemon Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.pokeRed,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
        >
            <Stack.Screen name="Pokemon Home" component={Home} options={{}} />
            <Stack.Screen name="Pokemon Details" component={PokemonDetailsScreen} options={{}} />
        </Stack.Navigator>
    );
};