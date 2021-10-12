import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';

const SearchBar = ({text, onChangeText, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor="#bbb"
      />
      <IoniconsIcon
        style={styles.searchIcon}
        name="search"
        size={20}
        color="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    marginLeft: -20,
  },
  input: {
    flex: 0.8,
    borderBottomWidth: 2,
    color: '#000',
  },
});

export default SearchBar;
