import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Dropdown = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconFontAwesome5 name="wallet" size={15} color="#ffff" />
      <Text style={styles.text}>{text}</Text>
      <IconAntDesign name="down" size={10} color="#ffff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    marginRight: 6,
    marginLeft: 6,
    color: '#ffff',
  },
});

export default Dropdown;
