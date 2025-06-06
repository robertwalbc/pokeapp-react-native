import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Abilities.styles.ts';

interface Ability {
  ability: {
    name: string;
  };
}

interface AbilitiesProps {
  abilities: Ability[];
}

export const Abilities: React.FC<AbilitiesProps> = ({ abilities }) => (
  <>
    <Text style={styles.sectionTitle}>Abilities</Text>
    <View style={styles.abilitiesContainer}>
      {abilities.map((abilityInfo, index) => (
        <View key={index} style={styles.abilityChip}>
          <Text style={styles.abilityText}>
            {abilityInfo.ability.name.replace('-', ' ')}
          </Text>
        </View>
      ))}
    </View>
  </>
); 