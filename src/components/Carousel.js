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
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import {API_HOSTA} from '@env';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const slideList = services =>
  Array.from(services).map((service, i) => {
    const url = service.Image.url.split('/').slice(7).join('/');
    return {
      id: service.id,
      image: `http://${API_HOSTA}/${url}`,
    };
  });

const Slide = memo(function Slide({data}) {
  return (
    <View style={styles.slide}>
      <TouchableHighlight
        underlayColor="#555555"
        style={styles.slideImage}
        onPress={() => console.warn(data.id)}>
        <Image source={{uri: data.image}} style={styles.slideImage} />
      </TouchableHighlight>
    </View>
  );
});

const swipe = (index, setIndex, flatlistRef) => {
  setIndex(index);
  flatlistRef.current.scrollToIndex({index});
};

function Pagination({index, setIndex, flatlistRef, services}) {
  return (
    <View style={styles.pagination}>
      {slideList(services).map((service, i) => {
        return (
          <TouchableOpacity
            onPress={() => swipe(i, setIndex, flatlistRef)}
            key={service.id}
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

const Carousel = ({services}) => {
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
          data={slideList(services)}
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
      <Pagination
        index={index}
        setIndex={setIndex}
        flatlistRef={flatlistRef}
        services={services}
      />
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth,
    alignItems: 'center',
  },
  slideImage: {width: windowWidth * 0.9, height: windowHeight * 0.3},

  pagination: {
    position: 'relative',
    top: StatusBar.currentHeight || 25,
    width: '100%',
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

export default Carousel;
