import React from 'react';
import {StyleSheet, ScrollView, TextInput, View} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';
import {userBodyP1, userBodyP2, userBodyP3} from './objects/user';

export const Page1 = ({infoUserBody, setBody, isEmpty}) => {
  return (
    <ScrollView>
      {userBodyP1.map((item, index) => (
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

export const Page2 = ({infoUserBody, setBody, isEmpty}) => {
  return (
    <ScrollView>
      {userBodyP2.map((item, index) => (
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

export const Page3 = ({infoUserBody, setBody, isEmpty}) => {
  return (
    <ScrollView>
      {userBodyP3.map((item, index) => (
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
            secureTextEntry={true}
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
