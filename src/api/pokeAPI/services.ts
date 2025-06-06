import instance from './apiconfig.ts';
import { pokeUrls } from './urls.ts';

export const getPokemons = (offset: number = 0, limit: number = 20) => 
  instance.get(`${pokeUrls.pokemon}?offset=${offset}&limit=${limit}`);

export const getPokemonDetail = (pokemonName: string) => {
    const url = pokeUrls.pokemonDetail.replace('{pokemonName}', pokemonName);
    return instance.get(url);
}

export const getPokemonSpecies = (pokemonId: string) => {
    const url = pokeUrls.pokemonSpecies.replace('{pokemonId}', pokemonId);
    return instance.get(url);
}

export const getEvolutionChain = (chainId: string) => {
    const url = pokeUrls.evolutionChain.replace('{chainId}', chainId);
    return instance.get(url);
}