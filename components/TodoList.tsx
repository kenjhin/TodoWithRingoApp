import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: '1', text: 'React Native 공부하기' },
    { id: '2', text: '코딩 연습하기' },
  ]);

  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default TodoList;