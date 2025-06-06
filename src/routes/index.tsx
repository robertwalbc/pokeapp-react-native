import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigation } from './tabs';
import { FavoritesProvider } from '../context/FavoritesContext';

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <FavoritesProvider>
                <TabsNavigation />
            </FavoritesProvider>
        </NavigationContainer>
    );
};

export default RootNavigation;