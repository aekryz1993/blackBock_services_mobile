import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';
import {API_HOSTA} from '@env';
import AdminScreen from '../AdminScreen';

const addNewItems = (currentUsers, fetchUsersRequest, _nextPage) => {
  if (_nextPage >= 0) {
    fetchUsersRequest(_nextPage, currentUsers);
  }
  return;
};

const Item = ({username, image}) => {
  const url = image.split('/').slice(7).join('/');
  return (
    <View style={styles.item}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `http://${API_HOSTA}/${url}`,
        }}
      />
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const Users = ({
  users,
  nextPage,
  fetchUsersRequest,
  navigation,
  fetchUsersFinished,
}) => {
  useEffect(() => {
    fetchUsersRequest(nextPage, users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigation.addListener('blur', () => {
      fetchUsersFinished();
    });
  });

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchUsersRequest(nextPage, users);
    });
  });

  const renderItem = ({item}) => {
    return <Item username={item.username} image={item.image} />;
  };

  return (
    <AdminScreen navigation={navigation}>
      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
        onEndReached={() => addNewItems(users, fetchUsersRequest, nextPage)}
      />
    </AdminScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  tinyLogo: {
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
