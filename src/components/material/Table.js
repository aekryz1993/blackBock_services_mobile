import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const dataForm = (command, property) => {
  if (property === 'createdAt') {
    return command[property].split('T')[0].split('-').reverse().join('/');
  } else if (property === 'treated') {
    return command[property] ? 'YES' : 'NO';
  }
  return command[property];
};

const Footer = ({
  totalPages,
  activeFilter,
  fetchCommandsRequest,
  navigation,
}) => {
  const [pageStat, setPageStat] = useState(1);
  const [comPageStat, setcomPageStat] = useState(0);

  useEffect(() => {
    if (pageStat !== 1) {
      navigation.addListener('blur', () => {
        setPageStat(1);
        setcomPageStat(0);
      });
    }
  });

  useEffect(() => {
    activeFilter === 'right'
      ? fetchCommandsRequest({page: comPageStat, isTreated: false})
      : fetchCommandsRequest({page: comPageStat, isTreated: true});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comPageStat]);

  const goToPrevPage = () => {
    if (pageStat > 1) {
      setPageStat(pageStat - 1);
      setcomPageStat(comPageStat - 1);
    }
  };

  const goToNextPage = () => {
    if (pageStat < totalPages) {
      setPageStat(pageStat + 1);
      setcomPageStat(comPageStat + 1);
    }
  };

  const goToFirstPage = () => {
    if (pageStat > 1) {
      setPageStat(1);
      setcomPageStat(0);
    }
  };

  const goToLastPage = () => {
    if (pageStat < totalPages) {
      setPageStat(totalPages);
      setcomPageStat(totalPages - 1);
    }
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.paginationbutton} onPress={goToFirstPage}>
        <AntDesignIcon name="verticleright" size={16} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.paginationbutton} onPress={goToPrevPage}>
        <AntDesignIcon name="left" size={16} color="#000" />
      </TouchableOpacity>
      <Text style={styles.currentpage}>{`${pageStat} of ${totalPages}`}</Text>
      <TouchableOpacity style={styles.paginationbutton} onPress={goToNextPage}>
        <AntDesignIcon name="right" size={16} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.paginationbutton} onPress={goToLastPage}>
        <AntDesignIcon name="verticleleft" size={16} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const Table = ({
  header,
  data,
  totalData,
  currentPage,
  nextPage,
  totalPages,
  activeFilter,
  fetchCommandsRequest,
  navigation,
}) => {
  return (
    <View style={styles.container}>
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
      {totalPages !== 0 && (
        <Footer
          totalData={totalData}
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          fetchCommandsRequest={fetchCommandsRequest}
          activeFilter={activeFilter}
          navigation={navigation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 3,
    borderRadius: 2,
  },
  item: {
    flexDirection: 'row',
  },
  text: {
    paddingRight: 32,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
  },
  line: {
    borderWidth: 0.5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 14,
    paddingRight: 16,
  },
  paginationbutton: {
    paddingHorizontal: 20,
  },
});

export default Table;
