import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';

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
    type: 'i20',
    engine: '4-Cyl 1.5 Liter',
    price: '$350',
    range: '/ month',
    image: require('@/assets/images/image 7.png'),
  },
];

const Item = ({ title, image, type, engine, price, range }) => {
  const { width } = useWindowDimensions();
  const containerWidth = width * 0.90;

  return (
    <View style={[styles.item, { width: containerWidth }]}>
      <View style={styles.textRow}>
        <View style={[styles.itemText, { width: '55%' }]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.typeMonth}>{type}</Text>
          <Text style={styles.engine}>Engine</Text>
        </View>

        <View style={[styles.itemText, { width: '45%' }]}>
          <Text style={[styles.title, styles.price]}>{price}</Text>
          <Text style={[styles.typeMonth, styles.alignRight]}>{range}</Text>
          <Text style={[styles.engine, styles.alignRight]}>{engine}</Text>
        </View>
      </View>

      <Image
        source={image}
        style={{ width: containerWidth - 40, height: containerWidth * 0.5, borderRadius: 10 }}
        resizeMode="cover"
      />
    </View>
  );
};

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.heading}>Available vehicles</Text>
      <View style={styles.container}>
        {DATA.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            price={item.price}
            type={item.type}
            engine={item.engine}
            image={item.image}
            range={item.range}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 5,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontFamily: 'Poppins_Medium',
    fontSize: 16,
    padding: 10,
    marginBottom: -20,
  },
  container: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 20,
    padding: 20,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  itemText: {
    gap: 5,
  },
  title: {
    fontSize: 28,
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
  price: {
    textAlign: 'right',
    color: '#304FFE',
    fontFamily: 'Gilroy_Regular',
  },
  alignRight: {
    textAlign: 'right',
  },
});
