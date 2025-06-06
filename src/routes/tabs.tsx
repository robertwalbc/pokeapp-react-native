import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStack } from './main';
import { FavoritesStack } from '../screens/Favorites';
import { SvgPokeballIcon } from '../components/Icons/PokeballIcon';
import { SvgHeartIcon } from '../components/Icons/HeartIcon';

export type TabParamList = {
    'MainStack': undefined;
    'Favorites': { id?: string };
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabsNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen 
                name="MainStack" 
                component={MainStack} 
                options={{
                    tabBarLabel: 'Pokemon Home',
                    tabBarIcon: ({}) =>  <SvgPokeballIcon width={20} height={20} />
                }}
            />
            <Tab.Screen 
                name="Favorites" 
                component={FavoritesStack} 
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({}) =>  <SvgHeartIcon width={20} height={20} />
                }}
            />
        </Tab.Navigator>
    );
};