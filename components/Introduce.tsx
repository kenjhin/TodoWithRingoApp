import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Introduce = () => (
  <View style={styles.placeholderImage}>
    <Text style={styles.placeholderText}>앱 소개</Text>
  </View>
);

const styles = StyleSheet.create({
  placeholderImage: {
    height: 200,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  placeholderText: {
    fontSize: 18,
    color: '#333',
  },
});

export default Introduce;