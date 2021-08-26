import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileDrawerItem = ({currentUser}) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Icon name="user-circle-o" size={80} color="#ffff" />
    </View>
    <View style={styles.right}>
      <View style={styles.namecontainer}>
        <Text style={styles.name}>{currentUser.firstname}</Text>
        <Text style={styles.name}>{currentUser.lastname}</Text>
      </View>
      <Text style={styles.username}>{currentUser.username}</Text>
      <Text style={styles.email}>{currentUser.email}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 30,
  },
  namecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    paddingRight: 10,
  },
  username: {
    color: '#ccc',
  },
  email: {
    color: '#aaa',
  },
});

export default ProfileDrawerItem;
