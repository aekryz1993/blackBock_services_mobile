import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const FAB = ({children, navigateTo}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={navigateTo}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '2%',
    alignSelf: 'center',
    borderRadius: 100,
    width: 70,
    height: 70,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
  },
});

export default FAB;
