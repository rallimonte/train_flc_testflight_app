import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Profilschoener = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
        source={require('../../assets/images/rallispanienfoto1.jpg')}
        style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={styles.name}>Ralf</Text>
        <Text style={styles.info}>🏍️ Hobby: Motorradfahren</Text>
        <Text style={styles.info}>📧 Email: ralf@example.com</Text>
      </View>
    </View>
  );
};

export default Profilschoener;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 4,
  },
});