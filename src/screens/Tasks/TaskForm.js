import React, {useState} from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native'; 

export default function TaskForm() {

    const [newTitle, setNewTitle] = useState()

    const onChangeText = (val) => {
        setNewTitle(val)
    }

    const onAddTask = () => {

    }


    return (
    <View style={styles.container} >
        <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={newTitle}
            placeholder="Nouvelle tâche"
        />
        <Button
            title="Ajouter"
            onPress={onAddTask}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection
    },
    input: {
        borderColor:"black",
        borderWidth:1
    }

})