import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_700Bold 
} from '@expo-google-fonts/nunito-sans';

import { Routes } from '@routes/index';

import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';

export default function App() {

  const [isFontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor='transparent'/>
      <View style={{
        flex: 1, 
        backgroundColor: theme.COLOR.GRAY_700,
      }}>
        {isFontsLoaded ? <Routes /> : null}
      </View>
    </ThemeProvider>
  );
}
