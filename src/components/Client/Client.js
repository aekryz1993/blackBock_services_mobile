/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef, useCallback, memo} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Loading from '@components/Loading';
import DrawerWithLogoutButton from '@components/DrawerWithLogoutButton';
import ServiceContainer from './Services/ServiceContainer';

const Drawer = createDrawerNavigator();
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const slideList = Array.from({length: 15}).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `This is the title ${i + 1}!`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

const Slide = memo(function Slide({data}) {
  return (
    <View style={styles.slide}>
      <Image source={{uri: data.image}} style={styles.slideImage} />
      <Text style={styles.slideTitle}>{data.title}</Text>
      <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
    </View>
  );
});

const swipe = (index, setIndex, flatlistRef) => {
  setIndex(index);
  flatlistRef.current.scrollToIndex({index, animated: true});
};

function Pagination({index, setIndex, flatlistRef}) {
  return (
    <View style={styles.pagination}>
      {slideList.map((_, i) => {
        return (
          <TouchableOpacity
            onPress={() => swipe(i, setIndex, flatlistRef)}
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  const flatlistRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = distance > 0.4;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(s => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      [],
    ),
  };

  const renderItem = useCallback(function renderItem({item}) {
    return <Slide data={item} />;
  }, []);

  return (
    <>
      <View style={{height: windowHeight * 0.3}}>
        <FlatList
          ref={flatlistRef}
          data={slideList}
          style={styles.carousel}
          renderItem={renderItem}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          {...flatListOptimizationProps}
        />
      </View>
      <Pagination index={index} setIndex={setIndex} flatlistRef={flatlistRef} />
    </>
  );
}

const Client = ({loading, logoutrequest}) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <DrawerWithLogoutButton {...props} logoutrequest={logoutrequest} />
        );
      }}>
      <Drawer.Screen name="Services" component={ServiceContainer} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth,
    alignItems: 'center',
  },
  slideImage: {width: windowWidth * 0.9, height: windowHeight * 0.3},
  slideTitle: {fontSize: 5},
  slideSubtitle: {fontSize: 2},

  pagination: {
    position: 'relative',
    top: 25,
    // width: windowWidth * 0.5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {backgroundColor: 'lightblue'},
  paginationDotInactive: {backgroundColor: 'gray'},

  carousel: {
    flex: 1,
  },
});

export default Client;
