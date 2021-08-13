import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const TopUp = ({route, navigation}) => {
  const {products} = route.params;
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 15,
  },
  carousel: {
    marginBottom: StatusBar.currentHeight * 2 || 30,
  },
});

export default TopUp;
