import { useEffect, useState } from 'react';
import { getPokemonSpecies, getEvolutionChain } from '../../../../api/pokeAPI/services';

interface EvolutionPokemon {
  id: number;
  name: string;
}

export const useEvolutionChain = (pokemonId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [evolutionChain, setEvolutionChain] = useState<EvolutionPokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      try {
        setIsLoading(true);
        // First, get the species data which contains the evolution chain URL
        const speciesResponse = await getPokemonSpecies(pokemonId.toString());
        const evolutionUrl = speciesResponse.data.evolution_chain.url;
        const chainId = evolutionUrl.split('/').slice(-2, -1)[0];

        // Then, get the evolution chain data
        const evolutionResponse = await getEvolutionChain(chainId);
        const chain = evolutionResponse.data.chain;

        // Process the chain to get a flat array of pokemon
        const processChain = (chain: any): EvolutionPokemon[] => {
          const results: EvolutionPokemon[] = [];

          const traverse = (node: any) => {
            const pokemonId = Number(node.species.url.split('/').slice(-2, -1)[0]);
            // Avoid duplicates
            if (!results.some(p => p.id === pokemonId)) {
              results.push({
                id: pokemonId,
                name: node.species.name,
              });
            }
            // Traverse all possible evolutions
            node.evolves_to.forEach((evo: any) => traverse(evo));
          };

          traverse(chain);
          return results;
        };

        const evolutionData = processChain(chain);
        setEvolutionChain(evolutionData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch evolution chain');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvolutionChain();
  }, [pokemonId]);

  return { evolutionChain, isLoading, error };
}; 