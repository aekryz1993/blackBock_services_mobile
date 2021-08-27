import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileDrawerItem = ({currentUser}) => (
  <View style={styles.container}>
    <View style={styles.innercontainer}>
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
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  innercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 20,
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
  line: {
    borderWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
    borderColor: '#333',
    marginBottom: 10,
  },
});

export default ProfileDrawerItem;
