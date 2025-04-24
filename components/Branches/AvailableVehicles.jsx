import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Toyota',
    type: 'Yaris iA',
    engine: '4-Cyl 1.5 Liter',
    price: '$350',
    range: '/ month',
    image: require('@/assets/images/image 6.png'),
  },
  {
    id: '2',
    title: 'Hyundai',
    type: 'i20 ',
    engine: '4-Cyl 1.5 Liter',
    price: '$350',
    range: '/ month',
    image: require('@/assets/images/image 7.png'),
  },

];

const Item = ({ title, image, type, engine, price, range }) => (
  <View style={styles.item}>

    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>

      <View style={[styles.itemText, {     width: '55%', }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.typeMonth}>{type}</Text>
        <Text style={styles.engine}>Engine</Text>
      </View>

      <View style={[styles.itemText, { width: '45%',  }]}>
        <Text style={[styles.title, { textAlign: 'right', fontFamily: 'Gilroy_Regular', color: '#304FFE' }]}>{price}</Text>
        <Text style={[styles.typeMonth, { textAlign: 'right' }]}>/ month</Text>
        <Text style={[styles.engine, { textAlign: 'right' }]}>{engine}</Text>
      </View>

    </View >
    <Image source={image} style={styles.image} resizeMode="cover" />
  </View>
);

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <Text style={{
        fontFamily: 'Poppins_Medium',
        fontSize: 14,
        padding: 20,
        marginBottom: -30
      }}>Available vehicles</Text>


      <View style={styles.container}>
        {DATA.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            price={item.price}
            type={item.type}
            engine={item.engine}
            image={item.image}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  item: {
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 354,
    width: '95%',
    display: 'flex',
    alignItems: 'center',
  },
  itemText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: -20,
    gap: 5,

    padding: 20,
  },
  image: {
    width: 350,
    height: 200,
    marginTop: -20,

  },
  title: {
    fontSize: 34,
    fontFamily: 'Gilroy_Bold',

  },
  typeMonth: {
    fontSize: 14,
    fontFamily: 'Poppins_Regular',
    color: '#7D8EA3',
  },
  engine: {
    fontSize: 14,
    fontFamily: 'Poppins_Medium',
    color: '#212121',
  },
});
