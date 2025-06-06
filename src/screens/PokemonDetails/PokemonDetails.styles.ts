import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginBottom: 15,
  },
  typesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  typeChip: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  typeText: {
    color: '#fff',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 15,
  },
  statsContainer: {
    marginTop: 15,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statName: {
    fontSize: 16,
    textTransform: 'capitalize',
    flex: 1,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  statBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    flex: 2,
    marginHorizontal: 10,
  },
  statFill: {
    height: '100%',
    borderRadius: 4,
  },
  abilitiesContainer: {
    marginTop: 15,
  },
  abilityChip: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  abilityText: {
    textTransform: 'capitalize',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
}); 