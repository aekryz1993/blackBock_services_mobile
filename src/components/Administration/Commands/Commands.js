import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Table from '@components/material/Table';
import AdminScreen from '../AdminScreen';

const tableHeader = [
  {label: 'User', property: 'user'},
  {label: 'Service', property: 'serviceName'},
  {label: 'Product', property: 'category'},
  {label: 'Quantity', property: 'quantity'},
  {label: 'Date', property: 'createdAt'},
];

const Commands = ({
  navigation,
  commands,
  fetchCommandsRequest,
  totalItems,
  nextPage,
  totalPages,
  fetchCommandsFinished,
}) => {
  const [activeFilter, setactiveFilter] = useState('right');
  const [openModal, setopenModal] = useState(false);

  useEffect(
    () =>
      navigation.addListener('focus', () => {
        activeFilter === 'right'
          ? fetchCommandsRequest({page: 0, isTreated: false})
          : fetchCommandsRequest({page: 0, isTreated: true});
        return;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

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
    <AdminScreen navigation={navigation}>
      <SafeAreaView style={styles.container}>
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
        <>
          <Table
            header={tableHeader}
            data={commands}
            totalData={totalItems}
            totalPages={totalPages}
            nextPage={nextPage}
            currentPage={nextPage + 1}
            activeFilter={activeFilter}
            fetchCommandsRequest={fetchCommandsRequest}
            navigation={navigation}
            touchable={true}
            setopenModal={setopenModal}
            openModal={openModal}
          />
        </>
      </SafeAreaView>
    </AdminScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  safeArea: {
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