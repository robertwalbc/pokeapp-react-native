import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  abilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  abilityChip: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    margin: 4,
  },
  abilityText: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
}); 