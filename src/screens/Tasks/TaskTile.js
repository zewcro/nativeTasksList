import React from 'react'
import { Text, Image, StyleSheet } from 'react-native';


export default function TaskTile({ task }) {
  return (
    <>
        <Image 
            style={styles.check}
            source={require('../../../assets/icons/icon_circle.png')}
        />
        <Text>{task.title}</Text>
        <Image 
            style={styles.check}
            source={require('../../../assets/icons/icon_bin.png')}
        />
    </>
  )
}


const styles = StyleSheet.create({
    check: {
        width: 26,
        height: 26
    }
});