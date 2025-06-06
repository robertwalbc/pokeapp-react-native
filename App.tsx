import * as React from 'react';
import RootNavigation from './src/routes';
import { FavoritesProvider } from './src/context/FavoritesContext';

function App(): React.JSX.Element {
  return (
    <FavoritesProvider>
      <RootNavigation />
    </FavoritesProvider>
  );
}

export default App;