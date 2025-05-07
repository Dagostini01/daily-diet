import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans';
import { Home } from '@screens/Home';
import { ActivityIndicator, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme';

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>

        {fontsLoaded ? (
          <Home />
        ) : (
          <ActivityIndicator color="#000" size="large" />
        )}
      </View>
    </ThemeProvider>
  );
}
