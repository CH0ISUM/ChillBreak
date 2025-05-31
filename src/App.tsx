import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { TimerProvider } from './context/TimerContext';
// import ThemeProvider from './hooks/useTheme';
import { ThemeProvider } from 'styled-components/native'; // or your actual ThemeProvider if you use styled-components or another library
import useTheme from './hooks/useTheme';

const Stack = createStackNavigator();

const App = () => {
  const { theme, toggleTheme } = useTheme(); // get theme and toggleTheme from your custom hook

  return (
    <ThemeProvider theme={theme}>
      <TimerProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TimerProvider>
    </ThemeProvider>
  );
};

export default App;