import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
} from 'react-native';

import Carousel from '@components/Carousel';
import Bar from '@components/Bar';
import Header from '../Header/Header';

const Service = ({
  topUpServices,
  codeServices,
  fetchTopUpServicesRequest,
  fetchCodeServicesRequest,
  navigation,
}) => {
  useEffect(() => {
    fetchTopUpServicesRequest();
    fetchCodeServicesRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.carousel}>
          <Bar title={'Top Up'} />
          <Carousel
            services={topUpServices}
            navigation={navigation}
            category={'id'}
          />
        </View>
        <View style={styles.carousel}>
          <Bar title={'Card'} />
          <Carousel
            services={codeServices}
            navigation={navigation}
            category={'code'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 15,
  },
  carousel: {
    marginBottom: StatusBar.currentHeight * 2 || 30,
  },
});

export default Service;
