import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import ClientScreen from '@components/ClientScreen';

const ProductScreen = ({route, navigation}) => {
  const {products} = route.params;
  return (
    <ClientScreen navigation={navigation}>
      <View style={styles.carousel}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>GO BACK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.carousel}>
        {products.map((product, i) => (
          <Text key={i}> {product.label} </Text>
        ))}
      </View>
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  carousel: {
    marginBottom: StatusBar.currentHeight * 2 || 30,
  },
});

export default ProductScreen;
