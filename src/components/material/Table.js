import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const dataForm = (command, property) => {
  if (property === 'createdAt') {
    return command[property].split('T')[0].split('-').join('/');
  } else if (property === 'treated') {
    return command[property] ? 'YES' : 'NO';
  }
  return command[property];
};

const Table = ({header, data}) => {
  return (
    <ScrollView horizontal style={styles.item}>
      {header.map((item, index) => (
        <View key={index}>
          <Text
            style={
              index !== 0 ? styles.text : [styles.text, {paddingLeft: 16}]
            }>
            {item.label}
          </Text>
          {data.map(command => {
            return (
              <Text
                key={command.id}
                style={
                  index !== 0 ? styles.text : [styles.text, {paddingLeft: 16}]
                }>
                {dataForm(command, item.property)}
              </Text>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 3,
    borderRadius: 2,
  },
  text: {
    paddingRight: 32,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
  },
  line: {
    borderWidth: 0.5,
  },
});

export default Table;
