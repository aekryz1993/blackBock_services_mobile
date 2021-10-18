import React, {useContext, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {API_HOSTA} from '@env';
import AdminScreen from '../AdminScreen';
import ScreenContent from '../ScreenContent';
import {UsersContext} from '@components/contexts/Users';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';

const Item = ({user, navigation}) => {
  const onNavigate = () => {
    navigation.navigate('UserScreen', {
      title: user.username,
      permissions: user.Permission,
      wallet: user.Wallet,
      userId: user.id,
    });
  };
  const url = user.Image.url
    .split('/')
    .slice(user.Image.url.split('/').indexOf('static'))
    .join('/');
  return (
    <TouchableOpacity style={styles.item} onPress={onNavigate}>
      <Image
        style={styles.userImage}
        source={{
          uri: `${API_HOSTA}/${url}`,
        }}
      />
      <Text style={styles.username}>{user.username}</Text>
    </TouchableOpacity>
  );
};

const Users = ({nextPage, totalUsers, fetchUsersRequest, navigation}) => {
  const [text, onChangeText] = useState(null);
  const [usersState, usersDispatch] = useContext(UsersContext);

  useEffect(() => {
    fetchUsersRequest({page: nextPage, usersDispatch});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScroll = () => {
    if (nextPage >= 0 && totalUsers !== 0) {
      fetchUsersRequest({page: nextPage, usersDispatch});
    }
    return;
  };

  const renderItem = ({item}) => {
    return <Item user={item} navigation={navigation} />;
  };

  const navigateToAddUser = () => {
    navigation.navigate('AddUserScreen');
  };

  return (
    <AdminScreen navigation={navigation}>
      <ScreenContent
        navigateTo={navigateToAddUser}
        text={text}
        onChangeText={onChangeText}
        placeholder="Search"
        Icon={IoniconsIcon}
        iconName="person-add">
        <FlatList
          data={usersState.users}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          horizontal={false}
          onEndReached={onScroll}
        />
      </ScreenContent>
    </AdminScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  userImage: {
    width: 100,
    height: 100,
  },
  item: {
    padding: 50,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 15,
  },
});

export default Users;
