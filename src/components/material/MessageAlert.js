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
          color={alertbcStyle.color}
        />
      </TouchableOpacity>
      <Text style={[styles.message, {color: alertbcStyle.color}]}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    height: '10%',
    marginTop: 20,
    borderWidth: 1,
    alignItems: 'center',
  },
  closeAlert: {
    position: 'relative',
    left: '45%',
    top: '4%',
  },
  message: {
    fontSize: 16,
  },
});

export default MessageAlert;
