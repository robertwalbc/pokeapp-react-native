import React from 'react';
import { View } from 'react-native';
import { styles } from './StatBar.styles';

interface StatBarProps {
  value: number;
  color: string;
}

export const StatBar: React.FC<StatBarProps> = ({ value, color }) => (
  <View style={styles.statBar}>
    <View
      style={[
        styles.statFill,
        {
          width: `${Math.min((value / 255) * 100, 100)}%`,
          backgroundColor: color,
        },
      ]}
    />
  </View>
); 