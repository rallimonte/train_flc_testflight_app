import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const add = () => {

    console.log("Add-Komponente gerendert");

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');



    const handleSubmit = async() =>{
        //console.log("handleSubmit wurde aufgerufen");


        if(name && phone && email){
            const contactwb = {name, phone, email}
            const existingContactsString  = await AsyncStorage.getItem('contactswb');
            let contactswb = [];
            
            if(existingContactsString){
                contactswb= JSON.parse(existingContactsString);
            }
            contactswb.push(contactwb);
            await AsyncStorage.setItem('contactswb', JSON.stringify(contactswb) );

            Alert.alert('Kontakt gespeichert','Name:' + name + '\nTelefon: ' + phone + '\nEmail: ' + email);


            setName('');
            setEmail('');
            setPhone('');

        }else{
            Alert.alert('Fehler','Bitte alle Felder ausfüllen');
        }

    };

  return (
   <View style={styles.container}>
    <Text style={styles.title}> Neuen Kontakt hinzufügen </Text>
    <Text> Name: </Text>
    <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>

    <Text> Telefonnummer: </Text>
    <TextInput style={styles.input} value={phone} onChangeText={setPhone}></TextInput>

    <Text> Email: </Text>
    <TextInput style={styles.input} value={email} onChangeText={setEmail}></TextInput>

    <Button title='Kontakt speichern' onPress={handleSubmit}></Button>

    
   </View>

  )
}

export default add

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:20,
        marginTop:20
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft:10
    }
})