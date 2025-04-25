import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Standard',
    counts: '56',
    image: require('@/assets/images/image 6.png'),
  },
  {
    id: '2',
    title: 'Prestige',
    counts: '22',
    image: require('@/assets/images/image 7.png'),
  },
  {
    id: '3',
    title: 'SUV',
    counts: '34',
    image: require('@/assets/images/car.png'),
  },
  {
    id: '4',
    title: 'JEEP',
    counts: '34',
    image: require('@/assets/images/Group 5.png'),
  },
];

const Item = ({ title, image, counts, isFirst }) => (
  <View style={[styles.item, isFirst && styles.firstItem]}>
    <Image source={image} style={styles.image} resizeMode="cover" />
    <Text style={[styles.title, isFirst && styles.firstItemTitle]}>{title}</Text>
    <Text style={[styles.counts, isFirst && styles.firstItemTitle]}>{counts}</Text>
  </View>
);

export default function App() {
  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => ( 
        <Item
          title={item.title}
          counts={item.counts}
          image={item.image}
          isFirst={index === 0} 
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 149,
    width: 120,
    marginLeft: 30,
  },
  firstItem: {
    backgroundColor: '#304FFE', 
  },
  image: {
    width: 150,
    height: 86,
    marginLeft: -30,
    marginTop: 5,
  },
  title: {
    padding: 10,
    fontSize: 14,
    fontFamily: 'Poppins_Bold',
    textAlign: 'center',
    marginTop: -5,
  },
  firstItemTitle: {
    color: 'white', 
  },
  counts: {
    fontSize: 14,
    fontFamily: 'Poppins_Bold',
    textAlign: 'center',
    marginTop: -14,
    color: '#7D8EA3',
  },
});