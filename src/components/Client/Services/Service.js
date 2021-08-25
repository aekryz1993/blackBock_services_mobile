import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, View, ScrollView} from 'react-native';

import Carousel from '@components/Carousel';
import Bar from '@components/Bar';
import ClientScreen from '@components/Client/ClientScreen';

const Service = ({
  topUpServices,
  codeServices,
  fetchTopUpServicesRequest,
  fetchCodeServicesRequest,
  fetchcreditRequest,
  walletCredit,
  navigation,
}) => {
  useEffect(() => {
    fetchTopUpServicesRequest();
    fetchCodeServicesRequest();
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
            services={topUpServices}
            navigation={navigation}
            category={'id'}
            fetchcreditRequest={fetchcreditRequest}
            walletCredit={walletCredit}
          />
        </View>
        <View style={styles.carousel}>
          <Bar title={'Card'} />
          <Carousel
            services={codeServices}
            navigation={navigation}
            category={'code'}
            fetchcreditRequest={fetchcreditRequest}
            walletCredit={walletCredit}
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
