import { DarkTheme, DefaultTheme, ThemeProvider, NavigationContainer  } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Stack as RouterStack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import PageOne from '../app/(tabs)/pageOne';
import HomeScreen from '../app/(tabs)/index';


import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RouterStack = createNativeStackNavigator();

export default function RootLayout() {
  

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    MergeOne: require('../assets/fonts/MergeOne-Regular.ttf'),
    Numans: require('../assets/fonts/Numans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer independent={true}>
        <RouterStack.Navigator initialRouteName="Home">
          <RouterStack.Screen name="Home" component={HomeScreen} />
          <RouterStack.Screen name="PageOne" component={PageOne} />
        </RouterStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
