import React from 'react';
import {StyleSheet, View, ScrollView, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ClientScreen from '@components/ClientScreen';

const DisplayCodes = ({route}) => {
  const {commands, codes, navigation, orderFinished, message} = route.params;
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
        {codes[item].map(codeItem => (
          <Text key={codeItem.id}>{codeItem.code}</Text>
        ))}
      </View>
    );
  };

  return (
    <ClientScreen
      navigation={navigation}
      back={true}
      backAction={orderFinished}>
      <View style={styles.container}>
        <View style={styles.success}>
          <Icon name="check-circle" size={50} color="#32cd32" />
          <Text style={styles.seccess_text}>{message}</Text>
        </View>
        <View style={styles.commands}>
          <Text style={styles.title}>Commands</Text>
          <ScrollView>
            {commands.map(command => (
              <>
                <Text style={styles.command_name}>{command.category}</Text>
                <Text style={styles.command_quantity}>{command.quantity}</Text>
              </>
            ))}
          </ScrollView>
        </View>
        <View style={styles.codes}>
          <Text>Codes</Text>
          <FlatList
            data={Object.keys(codes)}
            style={styles.carousel}
            renderItem={renderItem}
            keyExtractor={(_, idx) => idx}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </View>
      </View>
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
});

export default DisplayCodes;
