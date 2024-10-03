import { Button, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from '@expo/vector-icons/EvilIcons'; 
//import { Ionicons } from '@expo/vector-icons'; 

const routes = {
  PageOne: 'PageOne',
};

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#DA7A3D', dark: '#DA7A3D' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenidos a nuestro aplicativo</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={[styles.stepContainer, { backgroundColor: '#C4B64A'}]}>
        <ThemedText type="subtitle" style={styles.whiteText}>Explora tus lugares</ThemedText>     
      </ThemedView>
      <ThemedView style={styles.iconContainer}>
        <EvilIcons name="arrow-right"  size={65} color="#CAB64A" onPress={() => navigation.navigate(routes.PageOne)} />
      </ThemedView>      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
    padding: 16,
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 25,
  },
  stepContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',  
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 25,
  },
  whiteText: {
    color: '#FFFFFF', 
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 25,
    marginBottom: 25,
  },
});
