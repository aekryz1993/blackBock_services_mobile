import React from 'react';
import {View, StyleSheet, ScrollView, Text, Switch} from 'react-native';

const permissionsBody = [
  {key: 'addProduct', label: 'إضافة منتج'},
  {key: 'updateProductPrice', label: 'تغيير سعر منتج'},
  {key: 'updateProduct', label: 'تعديل منتج'},
  {key: 'addUser', label: 'إضافة عميل'},
  {key: 'viewUser', label: 'مشاهدة العملاء'},
  {key: 'updateUser', label: 'تعديل عميل'},
  {key: 'updateCredit', label: 'تعديل محفظة العميل'},
  {key: 'viewcmnd', label: 'مشاهدة الطلبات'},
  {key: 'confirmPayment', label: 'تأكيد الدفع'},
];

const Permissions = ({isAdmin, setisAdmin, permissions, setpermissions}) => {
  return (
    <ScrollView>
      <View style={styles.itemContainer}>
        <Switch
          trackColor={{false: '#999', true: 'rgba(0,200,100,1)'}}
          thumbColor={isAdmin ? '#fff' : '#fff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setisAdmin(!isAdmin)}
          value={isAdmin}
        />
        <Text style={styles.ItemLabel}>إدارة التطبيق</Text>
      </View>
      {isAdmin &&
        permissionsBody.map((item, index) => (
          <View key={index.toString()} style={styles.itemContainer}>
            <Switch
              trackColor={{false: '#999', true: 'rgba(0,200,100,1)'}}
              thumbColor={permissions[item.key] ? '#fff' : '#fff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setpermissions({
                  ...permissions,
                  [item.key]: !permissions[item.key],
                })
              }
              value={permissions[item.key]}
            />
            <Text style={styles.ItemLabel}>{item.label}</Text>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.2,
    borderColor: '#555',
  },
  ItemLabel: {
    fontSize: 16,
  },
});

export default Permissions;
