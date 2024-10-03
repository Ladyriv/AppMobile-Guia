import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView>
      
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-down'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        
      </TouchableOpacity>
      {isOpen && <ThemedView style={[styles.content, { backgroundColor: '#FFFFFF'}]}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
    padding: 10,
    borderWidth: 2,    
    borderColor: '#CAB64A', 
    borderRadius: 8,
  },
  content: {
    marginTop: 5,
    borderWidth: 2,    
    borderColor: '#CAB64A', 
    borderRadius: 6,
  },
});
