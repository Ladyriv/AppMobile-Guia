import ParallaxScrollView from '@/components/ParallaxScrollView';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function PageOne() {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();

  const handleSelection = (value) => {
    if (value === 'home') {
      navigation.navigate('Home');
    } else if (value === 'pageOne') {
      navigation.navigate('PageOne');
    }
  };

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#DA7A3D', dark: '#DA7A3D' }} headerImage={<Ionicons size={50} name="code-slash" style={styles.headerImage}/>}>
      <ThemedView>
      <Collapsible title="Parques">
          <TouchableOpacity onPress={() => handleSelection('home')} style={[
              styles.titleContainer,
              { backgroundColor: isPressed ? '#5d5c1b' : '#FFFFFF' }, // Cambia de color cuando se presiona
            ]}
            onPressIn={() => setIsPressed(true)}  
            onPressOut={() => setIsPressed(false)}>
            <Text style={styles.titleContainer}>Parque 1</Text>
          </TouchableOpacity>
          <Pressable onPress={() => handleSelection('home')}  style={({ pressed }) => [
              styles.titleContainer,
              { backgroundColor: pressed ? '#5d5c1b' : '#FFFFFF' }, // Cambia el color si está presionado
            ]}>
            <Text style={[styles.titleContainer, { color: isPressed ? '#000000' : '#ffffff' }]}>Parque 2</Text>
          </Pressable>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      </ThemedView>      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
