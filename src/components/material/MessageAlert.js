import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';

const MessageAlert = ({message, onCloseAlert, alertbcStyle}) => {
  return (
    <View style={[styles.container, alertbcStyle]}>
      <TouchableOpacity style={styles.closeAlert} onPress={onCloseAlert}>
        <IoniconsIcon
          name="close-circle-sharp"
          size={20}
          color="rgba(20,200,50,1)"
        />
      </TouchableOpacity>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    height: 56,
    marginTop: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeAlert: {
    alignSelf: 'flex-end',
    marginRight: 6,
    marginTop: 2,
  },
});

export default MessageAlert;
