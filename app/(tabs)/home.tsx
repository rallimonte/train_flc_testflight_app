import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home = () => {
  const [contacts, setContacts] = useState([]);

/*
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('contactswb').then((existingContactsString) => {
        if (existingContactsString) {
          setContacts(JSON.parse(existingContactsString));
        }
      });
    }, [])
  );
  */

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'web') {
        setContacts([
          { name: 'Max Mustermann', phone: '12345678', email: 'max@example.com' }
        ]);
      } else {
        AsyncStorage.getItem('contactswb').then((existingContactsString) => {
          if (existingContactsString) {
            setContacts(JSON.parse(existingContactsString));
          }
        });
      }
    }, [])
  );
  

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text>{item.phone}</Text>
      <Text>{item.email}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Meine Kontakte</Text>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 0, // wird durch SafeArea automatisch geregelt
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});