import React from 'react'
import { Text, StyleSheet, View} from 'react-native';

const days = ["Dimanche","Lundi", "Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];

export default function Header() {
    const date = new Date();

  return (
      <View style={styles.container}>
        <Text style={styles.date}>{`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}</Text>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingLeft: 25,
        paddingTop: 20
    },
    date: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});