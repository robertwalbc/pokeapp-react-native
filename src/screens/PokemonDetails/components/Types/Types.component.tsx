import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Types.styles.ts';
import { getTypeColor } from '../../../../utils/getTypeColor';

interface Type {
  type: {
    name: string;
  };
}

interface TypesProps {
  types: Type[];
}

export const Types: React.FC<TypesProps> = ({ types }) => (
  <View style={styles.typesContainer}>
    {types.map((typeInfo, index) => (
      <View
        key={index}
        style={[
          styles.typeChip,
          { backgroundColor: getTypeColor(typeInfo.type.name) },
        ]}
      >
        <Text style={styles.typeText}>{typeInfo.type.name}</Text>
      </View>
    ))}
  </View>
); 