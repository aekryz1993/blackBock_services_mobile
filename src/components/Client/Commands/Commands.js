import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ClientScreen from '@components/Client/ClientScreen';
import SectionList from '@components/material/SectionList';
import commandsData from './helper/commandsData';
import InnerCommandsComponent from './helper/InnerCommandsComponent';

const Commands = ({
  navigation,
  walletCredit,
  fetchcreditRequest,
  commands,
  fetchCommandsRequest,
  totalItems,
  nextPage,
  fetchCommandsFinished,
}) => {
  const [activeFilter, setactiveFilter] = useState('right');

  useEffect(
    () => {
      activeFilter === 'right'
        ? fetchCommandsRequest({page: 0, isTreated: false})
        : fetchCommandsRequest({page: 0, isTreated: true});
      return;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onScroll = () => {
    if (nextPage > 0 && totalItems !== 0) {
      activeFilter === 'right'
        ? fetchCommandsRequest({page: nextPage, isTreated: false})
        : fetchCommandsRequest({page: nextPage, isTreated: true});
    }
    return;
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

  const onChangeFilter = item => {
    if (item !== activeFilter) {
      setactiveFilter(item);
      fetchCommandsFinished();
      item === 'right'
        ? fetchCommandsRequest({page: 0, isTreated: false})
        : fetchCommandsRequest({page: 0, isTreated: true});
    }
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
            <Text style={textStyle('left')}>?????? ????????????????</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyle('right')}
            onPress={() => onChangeFilter('right')}
            activeOpacity={1}>
            <Text style={textStyle('right')}>???? ?????????? ??????</Text>
          </TouchableOpacity>
        </View>
        <SectionList
          data={commandsData(commands)}
          InnerComponent={InnerCommandsComponent}
          onScroll={onScroll}
        />
      </View>
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  filterright_active: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,1)',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    zIndex: 2,
    elevation: 5,
  },
  filterleft: {
    padding: 20,
    paddingRight: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    marginRight: -25,
    zIndex: 1,
    elevation: 2,
  },
  filterright: {
    padding: 20,
    paddingLeft: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    marginLeft: -25,
    zIndex: 1,
    elevation: 2,
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
  tableheader: {
    flexDirection: 'row',
  },
  tableheadertext: {
    flex: 2,
  },
  item: {
    flexDirection: 'row',
    // paddingHorizontal: 20,
    // paddingVertical: 15,
    // marginBottom: 10,
    // backgroundColor: '#999',
  },
  itemtext: {
    // flex: 1,
  },
});

export default Commands;
