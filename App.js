import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView  } from 'react-native';
import TasksScreen from './src/screens/Tasks';

export default function App() {
  
  return (
    <SafeAreaView style={{flex:1}}>
        <TasksScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
