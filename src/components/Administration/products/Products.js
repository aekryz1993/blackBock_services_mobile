import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import AdminScreen from '../AdminScreen';
import ScreenContent from '../ScreenContent';
import {ProductsContext} from '@components/contexts/ProductsProvider';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';
import Carousel from '@components/Carousel';
import Bar from '@components/Bar';

const Products = ({
  navigation,
  // topupProducts,
  // codeProducts,
  fetchProductsRequest,
}) => {
  const [productsState, productsDispatch] = useContext(ProductsContext);

  useEffect(() => {
    fetchProductsRequest({
      productsDispatch,
      label: 'codeProducts',
      category: 'code',
    });
    fetchProductsRequest({
      productsDispatch,
      label: 'topupProducts',
      category: 'id',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminScreen navigation={navigation}>
      <ScreenContent
        navigateTo={navigation}
        Icon={IoniconsIcon}
        iconName="add-outline">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.carousel}>
            <Bar title={'Top Up'} />
            <Carousel
              services={productsState.topupProducts}
              navigation={navigation}
              navigateTo={{
                parent: 'Products',
                child: 'ProductScreen',
              }}
            />
          </View>
          <View style={styles.carousel}>
            <Bar title={'Card'} />
            <Carousel
              services={productsState.codeProducts}
              navigation={navigation}
              navigateTo={{
                parent: 'Products',
                child: 'ProductScreen',
              }}
            />
          </View>
        </ScrollView>
      </ScreenContent>
    </AdminScreen>
  );
};

const styles = StyleSheet.create({
  head: {
    flex: 1,
    width: '90',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,1)',
  },
  headTitle: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
  },
  carousel: {
    marginBottom: StatusBar.currentHeight * 2 || 30,
  },
});

export default Products;
