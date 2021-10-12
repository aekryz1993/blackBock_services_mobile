import React, {useState} from 'react';
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

const UserOperation = ({message, success, userOpRequest, userOpFinished}) => {
  const [infoUserBody, setBody] = useState(initUserInfo);
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
        setpage(3);
      }
    } else if (page === 3) {
      for (let item of userBodyP3) {
        if (!infoUserBody[item.key]) {
          emptyFields.push(item.key);
        }
      }
      setisEmpty(emptyFields);
      if (emptyFields.length === 0) {
        userOpRequest({body: infoUserBody});
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
      {message && success && (
        <MessageAlert
          message={message}
          onCloseAlert={onCloseAlert}
          alertbcStyle={styles.alertbcStyle}
          alertMsgClrStyle={styles.alertMsgClrStyle}
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
        {page === 3 && (
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
            {page !== 3 ? 'التالي' : 'تأكيد'}
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
