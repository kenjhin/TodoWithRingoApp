import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Nav = () => (
  <View style={styles.navContainer}>
    <Text style={styles.navTitle}>쇼핑몰</Text>
    <Text style={styles.hamburgerMenu}>☰</Text>
  </View>
);

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f3f3f3',
  },
  navTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hamburgerMenu: {
    fontSize: 24,
  },
});

export default Nav;