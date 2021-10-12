import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PermissionsComponent from '../Permission';

const Permissions = () => {
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <PermissionsComponent
          isAdmin={isAdmin}
          setisAdmin={setisAdmin}
          permissions={permissions}
          setpermissions={setpermissions}
        />
      </View>
      <View style={styles.submitClmnn}>
        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.confirmBtnLbl}>حفظ</Text>
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
  submitClmnn: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 3.5,
    marginTop: 42,
    paddingHorizontal: 20,
  },
  confirmBtn: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  confirmBtnLbl: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
  },
});

export default Permissions;
