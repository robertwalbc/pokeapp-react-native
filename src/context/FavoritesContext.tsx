import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'FAVORITE_POKEMON_IDS';

interface FavoritesContextProps {
  favorites: string[];
  addFavorite: (id: string) => Promise<void>;
  removeFavorite: (id: string) => Promise<void>;
  isFavorite: (id: string) => boolean;
  isLoading: boolean;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites from AsyncStorage
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        setIsLoading(true);
        const stored = await AsyncStorage.getItem(FAVORITES_KEY);
        console.log('Loaded favorites from storage:', stored);
        const parsedFavorites = stored ? JSON.parse(stored) : [];
        setFavorites(parsedFavorites);
      } catch (e) {
        console.error('Error loading favorites:', e);
      } finally {
        setIsLoading(false);
      }
    };
    loadFavorites();
  }, []);

  // Save favorites to AsyncStorage whenever they change
  const saveFavorites = async (newFavorites: string[]) => {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      console.log('Saved favorites to storage:', newFavorites);
    } catch (e) {
      console.error('Error saving favorites:', e);
    }
  };

  const addFavorite = async (id: string) => {
    try {
      const newFavorites = favorites.includes(id) ? favorites : [...favorites, id];
      setFavorites(newFavorites);
      await saveFavorites(newFavorites);
    } catch (e) {
      console.error('Error adding favorite:', e);
    }
  };

  const removeFavorite = async (id: string) => {
    try {
      const newFavorites = favorites.filter((fav) => fav !== id);
      setFavorites(newFavorites);
      await saveFavorites(newFavorites);
    } catch (e) {
      console.error('Error removing favorite:', e);
    }
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, isLoading }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavoritesContext must be used within a FavoritesProvider');
  return context;
}; 