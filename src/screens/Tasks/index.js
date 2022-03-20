import React,  { useState } from 'react'
import { render } from 'react-dom';
import { Text, FlatList } from "react-native";
import Header from "../../components/Header"
import TaskTile from './TaskTile';


export default function TasksScreen() {
    // Tasks List => Return FlatList => TaskTile

    const [tasks, setTasks] = useState([
        {title: "Hello World!", isCompleted: false},
    ])

    // item = 1 element de l'array ex : {title: "Hello World!", isCompleted: false}
    const renderItem = ({item}) =>  {
        return  <TaskTile task={item} />
    }

    return (
        <FlatList 
            ListHeaderComponent={<Header />}
            contentContainerStyle={{ flexGrow:1}}
            data={tasks}
            keyExtractor={(item, index) => index.toString() }
            renderItem={renderItem}
        />
  )
}
