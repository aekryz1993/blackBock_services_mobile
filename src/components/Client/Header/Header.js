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
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Currency from './Currency';

const {height: windowHeight} = Dimensions.get('window');

const Header = ({navigation, back}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {!back ? (
          <Text style={styles.logo}>MY LOGO</Text>
        ) : (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIconsIcon name="arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
        )}
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
  logo: {
    color: '#000000',
    padding: 5,
    backgroundColor: '#696969',
    fontWeight: 'bold',
    borderRadius: 20,
  },
});

export default Header;
