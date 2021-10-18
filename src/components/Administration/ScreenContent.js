import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from '@components/material/SearchBar';
import FAB from '@components/material/FAB';

const ScreenContent = ({
  children,
  text,
  onChangeText,
  placeholder,
  navigateTo,
  Icon,
  iconName,
}) => {
  return (
    <View style={styles.container}>
      {placeholder && (
        <SearchBar
          text={text}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      )}
      <View style={styles.content}>{children}</View>
      <FAB navigateTo={navigateTo}>
        <Icon name={iconName} size={20} color="#fff" />
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
