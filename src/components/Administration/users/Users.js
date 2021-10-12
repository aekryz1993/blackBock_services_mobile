import React, {useEffect, useState} from 'react';
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

const addNewItems = (currentUsers, fetchUsersRequest, _nextPage) => {
  if (_nextPage >= 0) {
    fetchUsersRequest(_nextPage, currentUsers);
  }
  return;
};

const Item = ({user, image, navigation}) => {
  const onNavigate = () => {
    navigation.navigate('UserScreen', {title: user.username});
  };
  const url = image
    .split('/')
    .slice(image.split('/').indexOf('static'))
    .join('/');
  return (
    <TouchableOpacity style={styles.item} onPress={onNavigate}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `${API_HOSTA}/${url}`,
        }}
      />
      <Text style={styles.username}>{user.username}</Text>
    </TouchableOpacity>
  );
};

const Users = ({
  users,
  nextPage,
  fetchUsersRequest,
  navigation,
  fetchUsersFinished,
}) => {
  const [text, onChangeText] = useState(null);

  useEffect(() => {
    fetchUsersRequest(nextPage, users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   navigation.addListener('blur', () => {
  //     fetchUsersFinished();
  //   });
  // });

  // useEffect(() => {
  //   navigation.addListener('focus', () => {
  //     fetchUsersRequest(nextPage, users);
  //   });
  // });

  const renderItem = ({item}) => {
    return <Item user={item} image={item.Image.url} navigation={navigation} />;
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
        placeholder="Search">
        <FlatList
          data={users}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          horizontal={false}
          onEndReached={() => addNewItems(users, fetchUsersRequest, nextPage)}
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
