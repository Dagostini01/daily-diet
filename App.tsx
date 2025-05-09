import { Loading } from '@components/Loading';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans';
import { Home } from '@screens/Home';
import theme from '@theme';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>

      <StatusBar translucent backgroundColor="transparent" />

      {fontsLoaded ? (
        <Home />
      ) : (
        <Loading />
      )}

    </ThemeProvider>
  );
}
