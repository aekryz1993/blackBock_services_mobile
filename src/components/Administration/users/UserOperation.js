import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MessageAlert from '@components/material/MessageAlert';
import {Page1, Page2, Page3} from './UserInfo';
import {userBodyP1, userBodyP2, userBodyP3, initUserInfo} from './objects/user';
import {UsersContext} from '@components/contexts/Users';
import {initialUserStates} from '@components/Administration/helpers/users';

const UserOperation = ({
  message,
  success,
  userOpRequest,
  userOpFinished,
  userId,
}) => {
  const [usersState, usersDispatch] = useContext(UsersContext);
  const [infoUserBody, setBody] = useState(
    userId ? initialUserStates(usersState.users, userId).user : initUserInfo,
  );
  const [isEmpty, setisEmpty] = useState([]);
  const [page, setpage] = useState(1);

  const onClickNext = () => {
    let emptyFields = [];
    if (page === 1) {
      for (let item of userBodyP1) {
        if (!infoUserBody[item.key]) {
          emptyFields.push(item.key);
        }
      }
      setisEmpty(emptyFields);
      if (emptyFields.length === 0) {
        setpage(2);
      }
    } else if (page === 2) {
      for (let item of userBodyP2) {
        if (!infoUserBody[item.key]) {
          emptyFields.push(item.key);
        }
      }
      setisEmpty(emptyFields);
      if (emptyFields.length === 0) {
        if (userId) {
          userOpRequest({body: infoUserBody, id: userId});
          let currentUser = usersState.users.filter(
            userObj => userObj.id === userId,
          );
          for (const [key, value] of Object.entries(infoUserBody)) {
            currentUser[0][key] = value;
          }

          const otherUsers = usersState.users.filter(
            userObj => userObj.id !== userId,
          );
          const users = [...currentUser, ...otherUsers];
          usersDispatch({type: 'UPDATE', payload: {users}});
          setpage(1);
        } else {
          setpage(3);
        }
      }
    } else if (page === 3) {
      for (let item of userBodyP3) {
        if (!infoUserBody[item.key]) {
          emptyFields.push(item.key);
        }
      }
      setisEmpty(emptyFields);
      if (emptyFields.length === 0) {
        userOpRequest({body: infoUserBody, usersDispatch});
        setBody(initUserInfo);
        setpage(1);
      }
    }
  };

  const onCloseAlert = () => {
    userOpFinished();
  };

  return (
    <SafeAreaView style={styles.container}>
      {message && (
        <MessageAlert
          message={message}
          onCloseAlert={onCloseAlert}
          alertbcStyle={success ? styles.alertbcStyle : styles.alertErrobcStyle}
        />
      )}
      <View style={styles.topColumn}>
        {page === 1 && (
          <Page1
            infoUserBody={infoUserBody}
            setBody={setBody}
            isEmpty={isEmpty}
          />
        )}
        {page === 2 && (
          <Page2
            infoUserBody={infoUserBody}
            setBody={setBody}
            isEmpty={isEmpty}
          />
        )}
        {page === 3 && !userId && (
          <Page3
            infoUserBody={infoUserBody}
            setBody={setBody}
            isEmpty={isEmpty}
          />
        )}
      </View>
      <View style={styles.bottomColumn}>
        <TouchableOpacity style={styles.submit} onPress={onClickNext}>
          <Text style={styles.submitLabel}>
            {(page === 2 && userId) || page === 3 ? 'تأكيد' : 'التالي'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topColumn: {
    flex: 6,
    marginBottom: 32,
    paddingHorizontal: 28,
  },
  bottomColumn: {
    flex: 2,
  },
  alertbcStyle: {
    borderColor: 'rgba(20,170,50,1)',
    color: 'rgba(20,170,50,1)',
  },
  alertErrobcStyle: {
    borderColor: 'rgba(170,20,50,1)',
    color: 'rgba(170,20,50,1)',
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

export default UserOperation;
