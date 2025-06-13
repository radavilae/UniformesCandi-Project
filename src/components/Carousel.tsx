import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

interface CarouselItem {
  id: string;
  title: string;
  description: string;
}

interface CarouselComponentProps {
  items: CarouselItem[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ items }) => {
  const renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={items}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 60}
        layout="default"
        loop={true}
        autoplay={true}
        autoplayInterval={3000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    height: 200,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default CarouselComponent; 