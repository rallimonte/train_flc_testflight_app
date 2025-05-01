import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'profileschoener') {
            iconName = focused ? 'image' : 'image-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: 'Start' }} />
      <Tabs.Screen name="add" options={{ title: 'Hinzufügen' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
      <Tabs.Screen name="profileschoener" options={{ title: 'ProfilMitBild' }} />
    </Tabs>
  );
}



/*

import { StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="add" />
      <Tabs.Screen name="home" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="profilschoener" />
    </Tabs>
  );
};

export default TabsLayout; // ✅ Kein ()!

*/