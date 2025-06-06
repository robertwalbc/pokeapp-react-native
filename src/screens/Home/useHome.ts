import { useState, useCallback, useEffect, useRef } from "react";
import { getPokemons } from "../../api/pokeAPI";

interface Pokemon {
  name: string;
  url: string;
}

/**
 * Extracts the Pokemon ID from its API URL
 * @param url - The Pokemon's API URL (e.g., "https://pokeapi.co/api/v2/pokemon/25/")
 * @returns The Pokemon's ID number
 */
export const getPokemonId = (url: string): number => {
    const segments = url.split('/');
    // The ID is always the second-to-last segment in the URL
    const id = segments[segments.length - 2];
    return Number(id);
};

export const useHome = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [offset, setOffset] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const flatListRef = useRef<any>(null);
  
    const fetchPokemons = async (currentOffset: number = 0) => {
      try {
        const response = await getPokemons(currentOffset);
        if (currentOffset === 0) {
          setPokemons(response.data.results);
        } else {
          setPokemons(prev => [...prev, ...response.data.results]);
        }
      } catch (err) {
        setError('Error fetching Pokemon data');
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
        setIsRefreshing(false);
      }
    };
  
    useEffect(() => {
      fetchPokemons();
    }, []);
  
    const loadMore = useCallback(() => {
      if (!isLoadingMore) {
        setIsLoadingMore(true);
        const newOffset = offset + 20;
        setOffset(newOffset);
        fetchPokemons(newOffset);
      }
    }, [offset, isLoadingMore]);

    const refresh = useCallback(() => {
      setIsRefreshing(true);
      setOffset(0);
      fetchPokemons(0);
    }, []);

    return {
        pokemons,
        isLoading,
        isLoadingMore,
        isRefreshing,
        error,
        loadMore,
        refresh,
        flatListRef
    };
}