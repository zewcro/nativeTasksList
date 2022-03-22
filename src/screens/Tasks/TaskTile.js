import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native';


export default function TaskTile({ task }) {
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
             <Image 
                style={styles.check}
                source={require('../../../assets/icons/icon_circle.png')}
            />
            <Text style={styles.title}>{task.title}</Text>
        </View>
        <Image 
            style={styles.check}
            source={require('../../../assets/icons/icon_bin.png')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:20
    },
    subContainer: {
        flexDirection:"row",
        alignItems:"center",
    },
    title: {
        marginLeft:20,
        fontSize:16
    },
    check: {
        width: 26,
        height: 26
    }
});