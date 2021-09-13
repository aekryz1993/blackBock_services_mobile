import React, {memo, useCallback, useContext, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {NotificationContext} from '@components/contexts/NotificationProvider';

const NotificationItem = memo(function NotificationItem({
  notification,
  navigation,
}) {
  return (
    <TouchableOpacity style={styles.notification_container}>
      <View style={styles.notification_body}>
        <Text style={styles.bold_text}>{notification.from}</Text>
        <Text style={styles.normal_text}> {notification.action}</Text>
        <Text style={styles.bold_text}> {notification.quantity}</Text>
        <Text style={styles.bold_text}> of {notification.product}</Text>
      </View>
      <Text style={styles.sub_text}>{notification.date}</Text>
    </TouchableOpacity>
  );
});

const NotificationScreen = ({navigation}) => {
  const [notificationStat] = useContext(NotificationContext);
  const [limit, setlimit] = useState(10);
  const [notificationPage, setnotificationPage] = useState(
    notificationStat.notifications.slice(0, 10),
  );

  const renderItem = useCallback(function renderItem({item}) {
    return (
      <NotificationItem
        notification={item}
        navigation={navigation}
        styles={styles}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayNotifications = () => {
    if (limit < notificationStat.notifications.length) {
      setlimit(limit + 10);
      setnotificationPage(notificationStat.notifications.slice(0, limit + 10));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notificationPage}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={useCallback(s => s.id, [])}
        onEndReached={displayNotifications}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  notification_body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bold_text: {
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
