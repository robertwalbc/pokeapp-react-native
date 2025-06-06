import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  pokemonContainer: {
    alignItems: 'center',
    padding: 8,
  },
  image: {
    width: 80,
    height: 80,
  },
  pokemonName: {
    textTransform: 'capitalize',
    marginTop: 4,
  },
  arrow: {
    fontSize: 24,
    marginHorizontal: 8,
  },
  errorText: {
    color: 'red',
  },
}); 