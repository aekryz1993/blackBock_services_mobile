import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {height} = Dimensions.get('screen');

const SIZE = height / 4;

const SwipModal = ({isOpen, setisOpen, children}) => {
  const translateY = useRef(useSharedValue(SIZE)).current;

  useEffect(() => {
    if (isOpen && translateY.value === SIZE) {
      translateY.value = withTiming(0, {duration: 500});
    } else if (!isOpen && translateY.value === 0) {
      translateY.value = withTiming(SIZE, {duration: 500});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: event => {
      translateY.value = 0;
    },
    onActive: event => {
      if (event.translationY > 0) {
        translateY.value = event.translationY;
      } else {
        translateY.value = 0;
      }
    },
    onEnd: event => {
      if (translateY.value !== 0) {
        translateY.value = withTiming(SIZE, {duration: 500});
        runOnJS(setisOpen)(false);
      }
    },
  });

  const rStyleOpen = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const rStyleClose = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const rStyle = isOpen ? rStyleOpen : rStyleClose;

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setisOpen(false)}>
        <View style={isOpen ? styles.modalOverlay : {}} />
      </TouchableWithoutFeedback>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.dropdownContainer, rStyle]}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    height: SIZE,
    backgroundColor: '#505050',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  modalOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    bottom: SIZE,
    left: 0,
    right: 0,
  },
});

export default SwipModal;
