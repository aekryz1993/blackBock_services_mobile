import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CommandDetailContainer from '../CommandDetailContainer';

export default ({data}) => {
  const [openModal, setopenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={() => setopenModal(true)}>
        <View style={styles.leftSide}>
          <Text style={styles.main}>{data.category}</Text>
          <Text style={styles.sub}>{data.serviceName}</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.main}>{data.quantity}</Text>
        </View>
      </TouchableOpacity>
      <CommandDetailContainer
        openModal={openModal}
        setopenModal={setopenModal}
        command={data}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 0.3,
    borderColor: 'rgba(200, 200, 200, 1)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  leftSide: {
    justifyContent: 'center',
  },
  rightSide: {
    justifyContent: 'flex-start',
  },
  main: {
    fontSize: 18,
  },
  sub: {
    color: 'rgba(130, 130, 130, 1)',
  },
});
