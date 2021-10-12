import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UserInfoContainer, {userBody} from '../UserInfo';

const EditUserInfo = () => {
  const [infoUserBody, setBody] = useState({
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    phone: null,
    password: null,
  });
  const [isEmpty, setisEmpty] = useState([]);

  const onSave = () => {
    let emptyFields = [];
    for (let item of userBody) {
      if (!infoUserBody[item.key]) {
        emptyFields.push(item.key);
      }
    }
    setisEmpty(emptyFields);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topColumn}>
        <UserInfoContainer
          infoUserBody={infoUserBody}
          setBody={setBody}
          isEmpty={isEmpty}
        />
      </View>
      <View style={styles.bottomColumn}>
        <TouchableOpacity style={styles.submit} onPress={onSave}>
          <Text style={styles.submitLabel}>حفظ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topColumn: {
    flex: 6,
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  bottomColumn: {
    flex: 2,
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

export default EditUserInfo;
