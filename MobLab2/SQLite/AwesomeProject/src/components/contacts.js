
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Contacts from 'expo-contacts';


export default function Contact() {
    let [contacts, setContacts] = useState(undefined);
    let [error, setError] = useState(undefined);
  
    useEffect(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers],
          });
    
          if (data.length > 0) {
            setContacts(data)
            console.log(data);
          } else {
            setError("No contacts found.")
          }
        } else {
          setError("Permission was denied.")
        }
      })();
    }, []);
  
    let getPhoneNumbers = (contact) => {
      if(contact.phoneNumbers) {
        return contact.phoneNumbers.map((phoneNumber, index) => {
          if(contact.name.slice(-2) == "ko") {
            return (
              <View key={index}>
                <Text style={styles.text}>{contact.name} {phoneNumber.number}</Text>
              </View>
            )
          };
        });
      }
    }
  
    let getContactRows = () => {
      if(contacts != undefined) {
        return contacts.map((contact, index) => {
          return(
            <View key={index}>
              {getPhoneNumbers(contact)}
            </View>
          );
        });
      } else {
        return <Text>Awaiting contacts...</Text>
      }
    }
  
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Valid Contacts:</Text>
        <Text style={styles.text}>{error}</Text>
        {getContactRows()}
      </View>
    );
  }
  

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: -25,
    },
    title1: {
        fontSize: 18,
    },
    text: {
        fontSize: 18,
    },
})
