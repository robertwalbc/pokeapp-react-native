This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# MyneflowReactNative

A simple, modern React Native app for browsing Pokémon, viewing their details (including evolution chains), and managing your favorites. Built with TypeScript, React Navigation, and the [PokeAPI](https://pokeapi.co/).

---

## 🚀 Running the Project Locally

### Prerequisites

- **Node.js** (v18 or higher)
- **Yarn** or **npm**
- **React Native CLI** (see [React Native Environment Setup](https://reactnative.dev/docs/environment-setup))
- **Android Studio** or **Xcode** (for running on emulators/simulators)
- **CocoaPods** (for iOS, run `sudo gem install cocoapods` if needed)

### 1. Install dependencies

```sh
# Using npm
npm install

# Or using Yarn
yarn install
```

### 2. iOS setup (first time only)

```sh
# Install Ruby gems (CocoaPods, etc.)
bundle install

# Install iOS pods
bundle exec pod install --project-directory=ios
```

### 3. Start the Metro bundler

```sh
npm start
# or
yarn start
```

### 4. Run the app

#### Android

```sh
npm run android
# or
yarn android
```

#### iOS

```sh
npm run ios
# or
yarn ios
```

---

## Project Overview

This app lets you:

- Browse a paginated list of Pokémon (with images, national dex numbers and names)
- Tap a Pokémon to view detailed info, including:
  - Types, stats, abilities
  - **Evolution chain** (bonus feature)
- Mark/unmark Pokémon as favorites (persisted locally)
- View your list of favorite Pokémon in a dedicated tab

### Main Technologies

- **React Native** (TypeScript)
- **React Navigation** (bottom tabs, stack navigation)
- **Axios** for HTTP requests and data fetching
- **AsyncStorage** for persisting favorites
- **PokeAPI** for all Pokémon data

---

## 💡 Approach & Challenges

**Approach:**
- The app is structured with clear separation: screens, components, hooks, context, and API logic.
- Navigation uses a bottom tab navigator (Home, Favorites), with stack navigation for details.
- Data fetching is handled directly with Axios for API requests.
- Favorites are managed globally via React Context and persisted with AsyncStorage.
- The UI is fully responsive and adapts to both iOS and Android devices.
- The codebase follows modular, reusable, and TypeScript-based best practices.
- Unit test created using Jest.
- Unit tests have been included for three components: Abilities, StatBar and Stats. 
- Unit test is included for one utility function: getTypeColor.

**Challenges encountered:**

- **Favorites functionality:**  
  Ensuring favorites persist across app restarts using AsyncStorage.  
  Keeping the UI in sync with storage changes and handling edge cases (e.g., rapid toggling, empty state).  
  Making sure favorites are available offline and updating instantly across screens.

- **API structure:**  
  Navigating and parsing deeply nested API responses, especially for evolution chains.  
  Handling multiple asynchronous requests and combining their results.  
  Managing errors when the API is slow, unavailable, or returns unexpected data.

- **Infinite scroll:**  
  Implementing smooth infinite scroll for the Pokémon list while avoiding duplicate fetches and performance issues on the FlatList component.  
  Managing loading indicators and preventing multiple triggers of data loading on the FlatList component.  
  Ensuring the user experience remains responsive, even with large data sets and network delays.

- **Evolution Chain component:**  
  Parsing and displaying complex, branching evolution chains from the PokeAPI.  
  Handling cases where Pokémon have multiple or no evolutions, and presenting this clearly in the UI.  
  Coordinating multiple API calls and managing loading/error states for a seamless user experience.

- **Image handling:**  
  Building correct image URLs from API data and using optimized endpoints.
  Added another source for Pokemon images to enhance user experience (not pokeApi.co)
  Handling missing, slow-loading, or broken images gracefully.  
  Ensuring images load efficiently to provide a smooth user experience.

---

## ✨ Implemented Bonus

- **EvolutionChain Component:**  
  On each Pokémon's details screen, the app displays a visual evolution chain, showing all stages (with images and names) and arrows between them. This required:
  - Fetching species and evolution chain data from the PokeAPI
  - Recursively parsing the evolution chain structure
  - Handling loading and error states

---

## 📂 Project Structure

```
src/
  api/           # API config and services
  components/    # Reusable UI components (e.g., PokemonCard, Icons)
  context/       # Global state (FavoritesContext)
  routes/        # Navigation setup (tabs, stacks)
  screens/       # App screens (Home, Favorites, PokemonDetails)
    PokemonDetails/components/EvolutionChain/  # Bonus feature!
    PokemonDetails/usePokemonDetails.ts # Custom Hook for each screen
    PokemonDetails/PokemonDetails.styles.ts # Styles for each screen
    PokemonDetails/PokemonDetails.screen.tsx # View where we call the custom hook
    PokemonDetails/index.ts # Index to export the screen
  utils/         # Utility functions and constants
```
