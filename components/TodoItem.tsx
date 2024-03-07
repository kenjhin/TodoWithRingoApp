import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ todo }) => {
  return (
    <View style={styles.item}>
      <Text>{todo.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
});

export default TodoItem;