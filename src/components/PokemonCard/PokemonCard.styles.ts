import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      margin: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: '45%',
    },
    image: {
      width: '100%',
      height: 120,
      marginBottom: 8,
    },
    info: {
      alignItems: 'center',
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 4,
    },
    id: {
      color: '#666',
      fontSize: 14,
    },
    heartIcon: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 2,
    },
    heartImage: {
      width: 28,
      height: 28,
    },
  }); 
