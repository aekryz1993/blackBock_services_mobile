import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import MessageAlert from '@components/material/MessageAlert';
import PermissionsComponent from '../Permission';

const Permissions = ({message, success, navigation, route, addUserRequest}) => {
  const {infoUserBody, setBody} = route.params;

  const [isAdmin, setisAdmin] = useState(false);
  const [permissions, setpermissions] = useState({
    addProduct: false,
    updateProductPrice: false,
    updateProduct: false,
    addUser: false,
    viewUser: false,
    updateUser: false,
    updateCredit: false,
    viewcmnd: false,
    confirmPayment: false,
  });

  const onConfirm = () => {
    const body = {...infoUserBody, isAdmin, permissions};
    addUserRequest({
      body,
      navigate: () => navigation.navigate('UserInfoScreen'),
      setBody,
    });
  };

  const onCloseAlert = () => {};

  return (
    <SafeAreaView style={styles.container}>
      {message && success && (
        <MessageAlert
          message={message}
          onCloseAlert={onCloseAlert}
          alertbcStyle={styles.alertbcStyle}
        />
      )}
      <View style={styles.topColumn}>
        <PermissionsComponent
          isAdmin={isAdmin}
          setisAdmin={setisAdmin}
          permissions={permissions}
          setpermissions={setpermissions}
        />
      </View>
      <View style={styles.bottomColumn}>
        <TouchableOpacity style={styles.submit} onPress={onConfirm}>
          <Text style={styles.submitLabel}>تأكيد</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.2,
    borderColor: '#555',
  },
  alertbcStyle: {
    borderColor: 'rgba(200,20,50,1)',
  },
  topColumn: {
    flex: 10.5,
    paddingVertical: 50,
    marginBottom: 32,
  },
  bottomColumn: {
    flex: 1.5,
  },
  ItemLabel: {
    fontSize: 16,
  },
  submit: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 4,
  },
  submitLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Permissions;
