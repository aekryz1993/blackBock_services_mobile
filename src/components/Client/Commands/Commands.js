import React, {useEffect, useState} from 'react';
import {Text, FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import ClientScreen from '@components/Client/ClientScreen';

const Item = ({category, quantity}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
};

const Commands = ({
  navigation,
  walletCredit,
  fetchcreditRequest,
  commandsTreated,
  commandsWaiting,
  fetchCommandsRequest,
}) => {
  const [activeFilter, setactiveFilter] = useState('right');

  useEffect(() => {
    fetchCommandsRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}) => {
    return <Item category={item.category} quantity={item.quantity} />;
  };

  const buttonStyle = item => {
    if (item === 'left') {
      return item === activeFilter
        ? styles.filterleft_active
        : styles.filterleft;
    } else if (item === 'right') {
      return item === activeFilter
        ? styles.filterright_active
        : styles.filterright;
    }
  };

  const textStyle = item => {
    return item === activeFilter ? styles.filtertext_active : styles.filtertext;
  };

  const data = () => {
    return activeFilter === 'right' ? commandsWaiting : commandsTreated;
  };

  const onChangeFilter = item => {
    setactiveFilter(item);
  };

  return (
    <ClientScreen
      navigation={navigation}
      back={true}
      backAction={() => {}}
      fetchcreditRequest={fetchcreditRequest}
      walletCredit={walletCredit}>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
            style={buttonStyle('left')}
            onPress={() => onChangeFilter('left')}
            activeOpacity={1}>
            <Text style={textStyle('left')}>تمت معالجتها</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyle('right')}
            onPress={() => onChangeFilter('right')}
            activeOpacity={1}>
            <Text style={textStyle('right')}>لم تعالج بعد</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <FlatList
            data={data()}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  filterleft_active: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,1)',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: 2,
    elevation: 5,
    overflow: 'hidden',
  },
  filterright_active: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,1)',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    zIndex: 2,
    elevation: 5,
    overflow: 'hidden',
  },
  filterleft: {
    padding: 20,
    paddingRight: 40,
    backgroundColor: '#ccc',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    marginRight: -25,
    zIndex: 1,
    overflow: 'hidden',
  },
  filterright: {
    padding: 20,
    paddingLeft: 40,
    backgroundColor: '#ccc',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    marginLeft: -25,
    zIndex: 1,
    overflow: 'hidden',
  },
  filtertext: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  filtertext_active: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottom: {
    height: '75%',
  },
});

export default Commands;
