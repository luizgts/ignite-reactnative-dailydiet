import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import { MainHeader } from '@components/MainHeader';

import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
