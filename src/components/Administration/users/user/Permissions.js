import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {UsersContext} from '@components/contexts/Users';
import PermissionsComponent from '../Permission';
import MessageAlert from '@components/material/MessageAlert';
import {initialUserStates} from '@components/Administration/helpers/users';

const Permissions = ({
  permissions,
  permMsg,
  permSuccess,
  userMsg,
  userSuccess,
  updatePermissionsRequest,
  updatePermissionsFinished,
  updateUserRequest,
  updateUserFinished,
}) => {
  const [usersState, usersDispatch] = useContext(UsersContext);
  const [isAdminST, setisAdminST] = useState(
    initialUserStates(usersState.users, permissions.UserId).isAdmin,
  );
  const [permissionsST, setpermissionsST] = useState(
    initialUserStates(usersState.users, permissions.UserId).permissions,
  );

  const onConfirm = () => {
    updatePermissionsRequest({body: permissionsST, id: permissionsST.UserId});
    updateUserRequest({body: {isAdmin: isAdminST}, id: permissionsST.UserId});
    let currentUser = usersState.users.filter(
      userObj => userObj.Permission.UserId === permissionsST.UserId,
    );
    const otherUsers = usersState.users.filter(
      userObj => userObj.Permission.UserId !== permissionsST.UserId,
    );
    currentUser[0].Permission = permissionsST;
    currentUser[0].isAdmin = isAdminST;
    const users = [...currentUser, ...otherUsers];
    usersDispatch({type: 'UPDATE', payload: {users}});
  };

  const onCloseAlert = () => {
    updateUserFinished();
    updatePermissionsFinished();
  };

  return (
    <SafeAreaView style={styles.container}>
      {permMsg && userMsg && (
        <MessageAlert
          message={permMsg}
          onCloseAlert={onCloseAlert}
          alertbcStyle={
            permSuccess && userSuccess
              ? styles.alertbcStyle
              : styles.alertErrobcStyle
          }
        />
      )}
      <View style={styles.content}>
        <PermissionsComponent
          isAdmin={isAdminST}
          setisAdmin={setisAdminST}
          permissions={permissionsST}
          setpermissions={setpermissionsST}
        />
      </View>
      <View style={styles.submitClmnn}>
        <TouchableOpacity style={styles.confirmBtn} onPress={onConfirm}>
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
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  confirmBtnLbl: {
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
  },
  alertbcStyle: {
    borderColor: 'rgba(20,170,50,1)',
    color: 'rgba(20,170,50,1)',
  },
  alertErrobcStyle: {
    borderColor: 'rgba(170,20,50,1)',
    color: 'rgba(170,20,50,1)',
  },
});

export default Permissions;
