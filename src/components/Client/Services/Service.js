import React, {useContext, useEffect} from 'react';
import {StyleSheet, StatusBar, View, ScrollView} from 'react-native';

import Carousel from '@components/Carousel';
import Bar from '@components/Bar';
import ClientScreen from '@components/Client/ClientScreen';
import {ProductsContext} from '@components/contexts/ProductsProvider';

const Service = ({
  // topupProducts,
  // codeProducts,
  fetchProductsRequest,
  fetchcreditRequest,
  walletCredit,
  navigation,
}) => {
  const [productsState, productsDispatch] = useContext(ProductsContext);

  useEffect(() => {
    fetchProductsRequest({
      productsDispatch,
      label: 'topupProducts',
      category: 'id',
    });
    fetchProductsRequest({
      productsDispatch,
      label: 'codeProducts',
      category: 'code',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ClientScreen
      navigation={navigation}
      fetchcreditRequest={fetchcreditRequest}
      walletCredit={walletCredit}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.carousel}>
          <Bar title={'Top Up'} />
          <Carousel
            services={productsState.topupProducts}
            navigation={navigation}
            category={'id'}
            fetchcreditRequest={fetchcreditRequest}
            walletCredit={walletCredit}
            navigateTo={{parent: 'Products', child: 'ProductScreen'}}
          />
        </View>
        <View style={styles.carousel}>
          <Bar title={'Card'} />
          <Carousel
            services={productsState.codeProducts}
            navigation={navigation}
            category={'code'}
            fetchcreditRequest={fetchcreditRequest}
            walletCredit={walletCredit}
            navigateTo={{parent: 'Products', child: 'ProductScreen'}}
          />
        </View>
      </ScrollView>
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    marginBottom: StatusBar.currentHeight * 2 || 30,
  },
});

export default Service;
