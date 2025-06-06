import { useState, useEffect, useRef } from 'react';
import { useFavoritesContext } from '../../context/FavoritesContext';
import { getPokemonDetail } from '../../api/pokeAPI/services';

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

export const useFavorites = () => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavoritesContext();
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef<any>(null);

  useEffect(() => {
    const fetchMissingPokemon = async () => {
      const existingIds = favoritePokemons.map(p => p.id.toString());
      const missingIds = favorites.filter(id => !existingIds.includes(id));

      if (missingIds.length === 0) {
        setFavoritePokemons(prev => prev.filter(pokemon => 
          favorites.includes(pokemon.id.toString())
        ));
        return;
      }

      setLoading(true);
      try {
        // Only fetch details for new Pokemon
        const newPokemonDetails = await Promise.all(
          missingIds.map(async (id) => {
            const { data } = await getPokemonDetail(id);
            return {
              id: data.id,
              name: data.name,
              url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
            };
          })
        );
        setFavoritePokemons(prev => [...prev, ...newPokemonDetails].filter(pokemon => 
          favorites.includes(pokemon.id.toString())
        ));
      } catch (e) {
        console.error('Error fetching new favorite pokemon details:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchMissingPokemon();
  }, [favorites]);

  return {
    favoritePokemons,
    loading,
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    flatListRef
  };
};
