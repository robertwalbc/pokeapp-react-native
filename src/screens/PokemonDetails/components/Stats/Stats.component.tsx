import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Stats.styles.ts';
import { StatBar } from '../StatBar';

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface StatsProps {
  stats: Stat[];
}

export const Stats: React.FC<StatsProps> = ({ stats }) => (
  <>
    <Text style={styles.sectionTitle}>Stats</Text>
    <View style={styles.statsContainer}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statRow}>
          <Text style={styles.statName}>{stat.stat.name}</Text>
          <StatBar value={stat.base_stat} color="#4CAF50" />
          <Text style={styles.statValue}>{stat.base_stat}</Text>
        </View>
      ))}
    </View>
  </>
); 