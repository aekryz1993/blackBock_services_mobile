import React, {useEffect} from 'react';
import {
  SafeAreaView,
  //   View,
  StyleSheet,
  //   Text,
  StatusBar,
  //   Image,
} from 'react-native';

// import {API_HOSTA} from '@env';
import Carousel from '@components/Carousel';

// const addNewItems = (currentUsers, fetchUsersRequest, _nextPage) => {
//   if (_nextPage >= 0) {
//     fetchUsersRequest(_nextPage, currentUsers);
//   }
//   return;
// };

// const Item = ({username, image}) => {
//   const url = image.split('/').slice(7).join('/');
//   return (
//     <View style={styles.item}>
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: `http://${API_HOSTA}/${url}`,
//         }}
//       />
//       <Text style={styles.username}>{username}</Text>
//     </View>
//   );
// };

const Users = ({
  topUpServices,
  codeServices,
  fetchTopUpServicesRequest,
  fetchCodeServicesRequest,
}) => {
  useEffect(() => {
    fetchTopUpServicesRequest();
    fetchCodeServicesRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //   const renderItem = ({item}) => {
  //     return <Item username={item.username} image={item.image} />;
  //   };
  return (
    <SafeAreaView style={styles.container}>
      <Carousel services={topUpServices} />
      <Carousel services={codeServices} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  //   tinyLogo: {
  //     width: 100,
  //     height: 100,
  //   },
  //   item: {
  //     // backgroundColor: '#f9c2ff',
  //     padding: 50,
  //     marginVertical: 10,
  //     marginHorizontal: 10,
  //   },
  //   title: {
  //     fontSize: 15,
  //   },
});

export default Users;
