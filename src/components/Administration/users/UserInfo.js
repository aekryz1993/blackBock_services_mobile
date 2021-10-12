import React from 'react';
import {StyleSheet, ScrollView, TextInput, View} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';

export const userBody = [
  {placeholder: 'First Name', key: 'firstname'},
  {placeholder: 'Last Name', key: 'lastname'},
  {placeholder: 'Username', key: 'username'},
  {placeholder: 'Email', key: 'email'},
  {placeholder: 'Phone Number', key: 'phone'},
  {placeholder: 'Password', key: 'password'},
];

const UserInfo = ({infoUserBody, setBody, isEmpty}) => {
  return (
    <ScrollView>
      {userBody.map((item, index) => (
        <View key={index.toString()} style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              isEmpty.includes(item.key) && styles.emptybclr,
            ]}
            placeholder={item.placeholder}
            onChangeText={text => setBody({...infoUserBody, [item.key]: text})}
            value={infoUserBody[item.key]}
            placeholderTextColor="#bbb"
            secureTextEntry={item.key === 'password' ? true : false}
          />
          {isEmpty.includes(item.key) && (
            <IoniconsIcon
              style={styles.empty}
              name="close-circle"
              size={20}
              color="rgba(255,20,50,1)"
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    borderBottomWidth: 2,
    marginTop: 32,
    color: '#000',
  },
  emptybclr: {
    borderColor: 'rgba(255,20,50,1)',
  },
  empty: {
    position: 'relative',
    top: 16,
    marginLeft: -18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserInfo;
