import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import Nav from './components/Nav';
import Introduce from './components/Introduce';
import TodoList from './components/TodoList';


function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle='dark-content' />
      <ScrollView style={styles.scrollView} contentInsetAdjustmentBehavior="automatic">
        <Nav />
        <Introduce />
        <TodoList></TodoList>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
  },
});

export default App;