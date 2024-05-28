import { Stack } from 'expo-router';
import { ThemeProvider } from 'react-native-paper';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import { theme } from '../config/theme';

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="signin/index" />
          <Stack.Screen name="signup/index" />
          <Stack.Screen name="home/index" />
          <Stack.Screen name="cart/index" />
          <Stack.Screen name="delivery/index" />
          <Stack.Screen name="orders/index" />
        </Stack>
      </StyledComponentsThemeProvider>
    </ThemeProvider>
  );
}
