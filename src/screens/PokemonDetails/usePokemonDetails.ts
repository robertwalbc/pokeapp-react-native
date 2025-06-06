import { useEffect, useState } from 'react';
import { getPokemonDetail } from '../../api/pokeAPI/services';

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  height: number;
  weight: number;
}

export const usePokemonDetails = (pokemonId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await getPokemonDetail(pokemonId.toString());
        setPokemonDetails(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [pokemonId]);

  return { pokemonDetails, isLoading, error };
}; 