import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        //tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor: '#304FFE', 
        tabBarInactiveTintColor: 'gray', 
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>

     


<Tabs.Screen
        name="vehicles"
        options={{
          title: 'Vehicles',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/ic location.png')}
              style={[styles.imageLogo, { tintColor: color, width: size, height: size }]}
            />
          ),
        }}
      />

<Tabs.Screen
        name="index"
        options={{
          title: 'Branches',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/ic main.png')}
              style={[styles.imageLogo, { tintColor: color, width: size, height: size }]}
            />
          ),
        }}
      />
      

<Tabs.Screen
        name="accounts"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/ic user.png')}
              style={[styles.imageLogo, { tintColor: color, width: size, height: size }]}
            />
          ),
        }}
      />

      
    </Tabs>
  );
}


const styles = StyleSheet.create({
  imageLogo: {
    resizeMode: 'contain',
  },
});