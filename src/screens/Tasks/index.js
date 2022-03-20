import React,  { useState } from 'react'
import { render } from 'react-dom';
import { Text, FlatList } from "react-native";
import Header from "../../components/Header"

export default function TasksScreen() {
    // Tasks List => Return FlatList => TaskTile

    const [tasks, setTasks] = useState([
        {title: "Hello World!", isCompleted: false},
        {title: "Hello World!", isCompleted: false},
        {title: "Hello World!", isCompleted: false},
        {title: "Hello World!", isCompleted: false}
    ])

    // item = 1 element de l'array ex : {title: "Hello World!", isCompleted: false}
    const renderItem = ({item}) =>  {
        return  <Text>{item.title}</Text>
    }

    return (
    <>
        <Header />
        <FlatList 
            data={tasks}
            keyExtractor={(item, index) => index.toString() }
            renderItem={renderItem}
        />

    </>
  )
}
