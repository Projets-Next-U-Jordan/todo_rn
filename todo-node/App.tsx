import { StyleSheet, View } from 'react-native';
import { Home } from './src/pages/Home';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { TodoItem } from './src/data/TodoItem';
import { TodoListContext } from './src/Store';

export default function App() {

  const [todos, setTodos] = useState([] as TodoItem[]);

  return (
    <TodoListContext.Provider value={{ todos, setTodos }}>
      <View style={styles.container}>
        <Home />
      </View>
    </TodoListContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight+10,
    backgroundColor: '#fff',
  },
});
