import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Currency from './Currency';

const {height: windowHeight} = Dimensions.get('window');

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>MY LOGO</Text>
      </View>
      <View style={styles.right}>
        <Currency />
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.navbutton}>
          <Icon name="navicon" size={35} color="#ffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#222222',
    paddingLeft: 5,
    paddingRight: 5,
    width: StatusBar.currentWidth,
    height: StatusBar.currentHeight * 2 || windowHeight * 0.05,
    marginBottom: StatusBar.currentHeight || windowHeight * 0.05,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbutton: {
    paddingLeft: 10,
  },
});

export default Header;
