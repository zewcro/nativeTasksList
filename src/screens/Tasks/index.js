import { setStatusBarStyle } from 'expo-status-bar';
import React,  { useState } from 'react'
import { render } from 'react-dom';
import { Text, FlatList } from "react-native";
import FloatingBtn from '../../components/FloatingBtn';
import Header from "../../components/Header"
import TaskForm from './TaskForm';
import TaskTile from './TaskTile';

export default function TasksScreen() {
    // Tasks List => Return FlatList => TaskTile

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [tasks, setTasks] = useState([]);

    // item = 1 element de l'array ex : {title: "Hello World!", isCompleted: false}
    const renderItem = ({item}) =>  {
        return  <TaskTile task={item} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
    }
    // add function to save task in the state
    // use the function with the form

    const onAddTask = (title) => {
        setTasks([...tasks, {
            id: Date.now(),
            title,
            isCompleted: false
        }])
    }

    const onDeleteTask = (id) => {
        let newTasks = [];
        tasks.forEach(t => {
            if (t.id !== id) {
                // Add the task to the new array
                newTasks.push(t);
                return 
            }
        })

        setTasks(newTasks);
    }

    const onUpdateTask = (id) => {
        let newTasks = [];
        tasks.forEach(t => {
            if (t.id !== id) {
                // Add the task to the new array
                newTasks.push(t);
                return 
            }
            
            newTasks.push({
                id,
                title: t.title,
                isCompleted: !t.isCompleted, // if completed = false // if false = completed 
            })
        })

        setTasks(newTasks);
    }

    const _toggleForm = () => {
        setIsFormVisible(!isFormVisible)
    }
    
    return (
        <>
        <FlatList 
            ListHeaderComponent={
            <>
            <Header />
           {isFormVisible && <TaskForm onAddTask={onAddTask} />}
            </>}
            contentContainerStyle={{ flexGrow:1}}
            data={tasks}
            keyExtractor={(item, index) => index.toString() }
            renderItem={renderItem}
        />
        <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible} />
    </>
  );
}

