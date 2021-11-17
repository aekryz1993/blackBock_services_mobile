import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const RenderInnerItem = ({item, InnerComponent, currency}) => {
  return <InnerComponent data={item} currency={currency} />;
};

const RenderItem = ({item, InnerComponent, currency}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.section}</Text>
      </View>
      <FlatList
        data={item.innerData}
        keyExtractor={_item => _item.id}
        renderItem={({item: _item}) =>
          RenderInnerItem({item: _item, InnerComponent, currency})
        }
      />
    </View>
  );
};

const SectionList = ({data, InnerComponent, currency}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.section}
      renderItem={({item}) => RenderItem({item, InnerComponent, currency})}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  header: {
    backgroundColor: 'rgba(200,200,200,1)',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    color: 'rgba(100,100,100,1)',
  },
});

export default SectionList;
