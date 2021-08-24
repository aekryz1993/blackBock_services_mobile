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
import {useEffect} from 'react';
import {isPortrait, isTablet} from '../Platform';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const slideList = services =>
  Array.from(services).map(service => {
    const products =
      service.category === 'id'
        ? service.ProductIDs
        : service.ProductCategories;
    const url = service.Image.url.split('/').slice(7).join('/');
    // console.log(url)
    return {
      products,
      category: service.category,
      id: service.id,
      serviceName: service.label,
      image: `http://${API_HOSTA}/${url}`,
    };
  });

const navigateToNext = ({
  navigation,
  products,
  category,
  image,
  serviceName,
}) => {
  navigation.navigate('Products', {
    screen: 'ProductScreen',
    params: {products, category, image, serviceName},
  });
  return;
};

const Slide = memo(function Slide({data, navigation, setProducts, styles}) {
  return (
    <View style={styles.slide}>
      <TouchableHighlight
        underlayColor="#555555"
        style={styles.slideImage}
        onPress={() =>
          navigateToNext({
            navigation,
            category: data.category,
            products: data.products,
            image: data.image,
            serviceName: data.serviceName,
            setProducts,
          })
        }>
        <Image source={{uri: data.image}} style={styles.slideImage} />
      </TouchableHighlight>
    </View>
  );
});

const swipe = (index, setIndex, flatlistRef) => {
  setIndex(index);
  flatlistRef.current.scrollToIndex({index});
};

function Pagination({index, setIndex, flatlistRef, services, styles}) {
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

const Carousel = ({services, navigation}) => {
  const [layout, setlayout] = useState({
    orientation: isPortrait('window') ? 'portrait' : 'landscape',
    devicetype: isTablet('window') ? 'tablet' : 'phone',
  });

  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  const flatlistRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', () => {
      setlayout({
        orientation: isPortrait('window') ? 'portrait' : 'landscape',
        devicetype: isTablet('window') ? 'tablet' : 'phone',
      });
    });
    return () => subscription?.remove();
  });

  const styles =
    layout.orientation === 'portrait' ? portraitStyles : landscapeStyles;

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
    return (
      <Slide
        data={item}
        navigation={navigation}
        layout={layout}
        styles={styles}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={{height: windowHeight * 0.2, marginTop: 25}}>
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
        styles={styles}
        setIndex={setIndex}
        flatlistRef={flatlistRef}
        services={services}
      />
    </>
  );
};

const portraitStyles = StyleSheet.create({
  slide: {
    // height: windowHeight,
    width: windowWidth,
    alignItems: 'center',
  },

  slideImage: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.2,
  },

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

const landscapeStyles = StyleSheet.create({
  slide: {
    // height: windowWidth,
    width: windowHeight,
    alignItems: 'center',
  },

  slideImage: {
    width: windowHeight * 0.9,
    height: windowWidth * 0.8,
  },

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
  paginationDotActive: {backgroundColor: 'red'},
  paginationDotInactive: {backgroundColor: 'black'},

  carousel: {
    flex: 1,
  },
});

export default Carousel;
