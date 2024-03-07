import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ShopBoard = () => {
  const DATA = Array.from({ length: 10 }, (_, i) => ({
    id: String(i),
    title: `상품 ${i + 1}`,
  }));

  return (
    <FlatList
      horizontal
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
});

export default ShopBoard;