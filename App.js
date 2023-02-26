// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

export default function App() {
  const [tasks, setTasks] = useState([
    { task: "HTML I", done: true, id: "1" },
    { task: "CSS", done: true, id: "2" },
    { task: "Responsive design", done: true, id: "3" },
  ]);
  const addTask = (text) => {
    setTasks((prevTasks) => {
      return [{ task: text, id: uuid() }
        , ...prevTasks];
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTask addTask={addTask} />
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
            <Task item={item} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 30,
  },
  list: {
    marginTop: 30,
  },
});
