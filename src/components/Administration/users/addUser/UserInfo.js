import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MessageAlert from '@components/material/MessageAlert';
import UserInfoContainer, {userBody} from '../UserInfo';

const UserInfo = ({message, success, addUserFinished, navigation}) => {
  const [infoUserBody, setBody] = useState({
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    phone: null,
    password: null,
  });
  const [isEmpty, setisEmpty] = useState([]);

  const onClickNext = () => {
    let emptyFields = [];
    for (let item of userBody) {
      if (!infoUserBody[item.key]) {
        emptyFields.push(item.key);
      }
    }
    setisEmpty(emptyFields);
    if (emptyFields.length === 0) {
      navigation.navigate('PermissionsScreen', {
        infoUserBody,
        setBody: () =>
          setBody({
            firstname: null,
            lastname: null,
            username: null,
            email: null,
            phone: null,
            password: null,
          }),
      });
    }
  };

  const onCloseAlert = () => {
    addUserFinished();
  };

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
        <UserInfoContainer
          infoUserBody={infoUserBody}
          setBody={setBody}
          isEmpty={isEmpty}
        />
      </View>
      <View style={styles.bottomColumn}>
        <TouchableOpacity style={styles.submit} onPress={onClickNext}>
          <Text style={styles.submitLabel}>التالي</Text>
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
    borderColor: 'rgba(20,200,50,1)',
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

export default UserInfo;
