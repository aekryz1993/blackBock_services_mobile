import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from '@components/material/SearchBar';
import FAB from '@components/material/FAB';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';

const ScreenContent = ({
  children,
  text,
  onChangeText,
  placeholder,
  navigateTo,
}) => {
  return (
    <View style={styles.container}>
      <SearchBar
        text={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <View style={styles.content}>{children}</View>
      <FAB navigateTo={navigateTo}>
        <IoniconsIcon name="person-add" size={20} color="#fff" />
      </FAB>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.9,
    marginTop: 30,
  },
});

export default ScreenContent;
