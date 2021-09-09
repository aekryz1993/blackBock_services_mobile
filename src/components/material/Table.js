import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import CommandDetailContainer from '@components/Administration/Commands/CommandDetailContainer';

const dataForm = (dataItem, property) => {
  if (property === 'createdAt') {
    return dataItem[property].split('T')[0].split('-').reverse().join('/');
  } else if (property === 'treated') {
    return dataItem[property] ? 'YES' : 'NO';
  }
  return dataItem[property];
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

const Content = ({
  contentData,
  headerData,
  touchable,
  setopenModal,
  openModal,
}) => {
  const [currentRow, setcurrentRow] = useState({});

  const submitRow = ({selectedRow}) => {
    setcurrentRow(selectedRow);
    setopenModal(!openModal);
  };

  return (
    <View style={styles.contentContainer}>
      {touchable ? (
        <>
          {contentData.map((row, rowIndex) => (
            <View key={row.id}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={
                  rowIndex !== contentData.length - 1
                    ? [
                        styles.contentRow,
                        {
                          borderBottomWidth: 0.5,
                        },
                      ]
                    : styles.contentRow
                }
                onPress={() => submitRow({selectedRow: row})}>
                {headerData.map((property, propertyIndex) => (
                  <View key={propertyIndex} style={styles.rowItem}>
                    <Text
                      style={
                        propertyIndex === 0
                          ? [styles.rowText, {paddingLeft: 16}]
                          : typeof row[property.property] === 'number'
                          ? [
                              styles.rowText,
                              {textAlign: 'center', paddingRight: 20},
                            ]
                          : styles.rowText
                      }>
                      {dataForm(row, property.property)}
                    </Text>
                  </View>
                ))}
              </TouchableOpacity>
              <CommandDetailContainer
                setopenModal={setopenModal}
                openModal={openModal}
                row={currentRow}
              />
            </View>
          ))}
        </>
      ) : (
        <>
          {contentData.map((row, rowIndex) => (
            <View
              key={row.id}
              style={
                rowIndex !== contentData.length - 1
                  ? [
                      styles.contentRow,
                      {
                        borderBottomWidth: 0.5,
                      },
                    ]
                  : styles.contentRow
              }>
              {headerData.map((property, propertyIndex) => (
                <View key={propertyIndex} style={styles.rowItem}>
                  <Text
                    style={
                      propertyIndex === 0
                        ? [styles.rowText, {paddingLeft: 16}]
                        : typeof row[property.property] === 'number'
                        ? [
                            styles.rowText,
                            {textAlign: 'center', paddingRight: 20},
                          ]
                        : styles.rowText
                    }>
                    {dataForm(row, property.property)}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </>
      )}
    </View>
  );
};

const Header = ({headerData}) => (
  <View style={styles.headerRow}>
    {headerData.map((item, index) => (
      <View key={index} style={styles.rowItem}>
        <Text
          style={
            index !== 0 ? styles.rowText : [styles.rowText, {paddingLeft: 16}]
          }>
          {item.label}
        </Text>
      </View>
    ))}
  </View>
);

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
  touchable,
  setopenModal,
  openModal,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.table}>
        <View style={styles.header}>
          <Header headerData={header} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.table}>
          <View style={styles.content}>
            <Content
              contentData={data}
              headerData={header}
              touchable={touchable}
              setopenModal={setopenModal}
              openModal={openModal}
            />
          </View>
        </ScrollView>
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
    height: '72%',
  },
  table: {
    flexDirection: 'column',
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 14,
    backgroundColor: 'rgba(200, 200, 200, 1)',
  },
  contentRow: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  rowItem: {
    width: 100,
    paddingRight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 14,
    borderTopWidth: 4,
    borderColor: 'rgba(100, 100, 100, 0.1)',
  },
});

export default Table;
