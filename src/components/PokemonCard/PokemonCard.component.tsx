import React from 'react';
import { POKEMON_IMAGE_URL } from '../../environment';
import { styles } from './PokemonCard.styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useFavoritesContext } from '../../context/FavoritesContext';
import { SvgHeartIcon } from '../Icons/HeartIcon';

interface PokemonCardProps {
  name: string;
  url: string;
  onPress: () => void;
}

export const PokemonCard = ({ name, url, onPress }: PokemonCardProps) => {
  // Extract Pokemon ID from URL
  const getId = () => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  };

  const { isFavorite, addFavorite, removeFavorite } = useFavoritesContext();

  const pokemonId = getId();
  const imageUrl = `${POKEMON_IMAGE_URL}${pokemonId}.png`;
  const favorite = isFavorite(pokemonId);

  const toggleFavorite = (e: any) => {
    e.stopPropagation && e.stopPropagation();
    if (favorite) {
      removeFavorite(pokemonId);
    } else {
      addFavorite(pokemonId);
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={toggleFavorite}
        activeOpacity={0.7}
      >
        <SvgHeartIcon
          width={28}
          height={28}
          style={!favorite ? { opacity: 0.5 } : undefined}
        />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.name}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
        <Text style={styles.id}>#{pokemonId.padStart(3, '0')}</Text>
      </View>
    </TouchableOpacity>
  );
};
