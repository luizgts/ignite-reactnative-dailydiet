import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Routes } from '@routes/index';

import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{flex: 1, backgroundColor: theme.COLOR.GRAY_700}}>
        <Routes />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
