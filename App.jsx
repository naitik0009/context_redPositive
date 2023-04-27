import {SafeAreaView} from 'react-native';
import {CategoryScreen} from './src/screens/categories';
import {NavigationContainer} from '@react-navigation/native';
import {NavigatiosScreens} from './src/routes/routes';
import { FavouriteContextProvider } from './src/context/context';
function App() {
  return (
    <FavouriteContextProvider>
      <NavigationContainer>
      <NavigatiosScreens />
      </NavigationContainer>
    </FavouriteContextProvider>
  );
}

export default App;
