import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import {NotificationContext} from '@components/contexts/NotificationProvider';
import {resetNotificationsCount} from '@apis/users';

const Notification = ({}) => {
  const [notificationStat, notificationDispatch] =
    useContext(NotificationContext);

  const openNotifications = () => {
    notificationDispatch({type: 'SEEN'});
    (async () => {
      try {
        await resetNotificationsCount();
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => openNotifications()}>
        <IoniconsIcon name="md-notifications-outline" size={25} color="#fff" />
      </TouchableOpacity>
      {notificationStat.count !== 0 && (
        <View style={styles.count}>
          <Text style={styles.count_txt}>{notificationStat.count}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  count: {
    marginLeft: -9,
    marginTop: -2,
    alignSelf: 'flex-start',
    width: 16,
    height: 16,
    borderRadius: 20,
    backgroundColor: '#f05',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count_txt: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Notification;
