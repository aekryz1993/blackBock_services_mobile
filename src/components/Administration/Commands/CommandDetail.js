import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Button} from 'react-native';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import DocumentPicker from 'react-native-document-picker';

import CustomModal from '../../material/CustomModal';
import ConfirmModal from '@components/material/Modal';

const Header = ({openModal, setopenModal}) => (
  <View style={styles.header}>
    <TouchableOpacity
      style={styles.closebutton}
      onPress={() => setopenModal(!openModal)}>
      <MaterialIconsIcon name="arrow-back" size={25} color="#000" />
    </TouchableOpacity>
    <Text style={styles.header_text}>Commands</Text>
  </View>
);

const Section = ({title, last, children}) => (
  <View style={styles.section}>
    <Text style={styles.section_title}>{title}</Text>
    {children}
    {!last && <View style={styles.sec_separtor} />}
  </View>
);
const InfoItem = ({item, property, last}) => (
  <View style={styles.info_item}>
    <Text style={styles.data_info_item}>{item}</Text>
    <Text style={styles.prop_info_item}>{property}</Text>
    {!last && <View style={styles.item_separtor} />}
  </View>
);

const ActionSec = ({
  message,
  sendCommandRequest,
  sendCommandFinished,
  userId,
  commandId,
  categoryId,
}) => {
  const [excel, setexcel] = useState([]);
  const [openModal, setopenModal] = useState(new FormData());

  const uploadFile = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.xlsx,
      });
      let data = new FormData();
      data.append('file', res);
      setexcel(data);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('Canceled');
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  const onConfirm = () => {
    sendCommandRequest({
      userId,
      commandId,
      categoryId,
      excel,
      // sendCommandFinished,
    });
  };

  return (
    <>
      <View style={styles.action_sec}>
        <TouchableOpacity
          style={styles.submit_button}
          activeOpacity={0.7}
          onPress={() => uploadFile()}>
          <Text style={styles.submit_label}>Upload Codes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submit_button}
          activeOpacity={0.7}
          onPress={() => setopenModal(true)}>
          <Text style={styles.submit_label}>Send</Text>
        </TouchableOpacity>
      </View>
      <ConfirmModal modalVisible={openModal} setModalVisible={setopenModal}>
        {message && <Text>{message}</Text>}
        <Button title="Confirm" onPress={onConfirm} />
      </ConfirmModal>
    </>
  );
};

const CommandDetail = ({
  openModal,
  setopenModal,
  row,
  sendCommandRequest,
  sendCommandFinished,
  message,
}) => {
  return (
    <CustomModal
      animationType="fade"
      transparent={true}
      visible={openModal}
      modalStyles={{
        modalContent: styles.modalContent,
        modalOverlay: styles.modalOverlay,
      }}
      dismiss={() => {
        setopenModal(!openModal);
      }}>
      <>
        <Header openModal={openModal} setopenModal={setopenModal} />
        <View style={styles.content}>
          <Section title="User Info" last={false}>
            <InfoItem property="Full Name" item={row.user} last={false} />
            <InfoItem property="Email" item={row.email} last={false} />
            <InfoItem property="Phone" item={row.phone} last={true} />
          </Section>
          <Section title="Product Info" last={true}>
            <InfoItem
              property="Product Name"
              item={row.serviceName}
              last={false}
            />
            <InfoItem property="Category" item={row.category} last={false} />
            <InfoItem
              property="Quantity"
              item={`${row.quantity} Codes`}
              last={true}
            />
          </Section>
          <ActionSec
            message={message}
            sendCommandRequest={sendCommandRequest}
            sendCommandFinished={sendCommandFinished}
            userId={row.UserId}
            commandId={row.id}
            categoryId={row.ProductCategoryId}
          />
        </View>
      </>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 0.7,
    borderColor: '#555',
  },
  header_text: {
    fontSize: 18,
    marginLeft: 8,
  },
  content: {
    marginTop: 12,
  },
  section: {
    paddingLeft: 20,
  },
  section_title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 12,
  },
  sec_separtor: {
    marginRight: 20,
    borderBottomWidth: 0.5,
    marginVertical: 12,
    borderColor: '#999',
  },
  item_separtor: {
    marginRight: 20,
    borderBottomWidth: 0.3,
    marginVertical: 12,
    borderColor: '#ccc',
  },
  data_info_item: {
    fontWeight: 'bold',
  },
  prop_info_item: {
    color: '#555',
    fontSize: 12,
  },
  action_sec: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  submit_button: {
    width: 120,
    paddingVertical: 12,
    backgroundColor: 'rgba(0, 0, 0, .9)',
    alignItems: 'center',
    borderRadius: 10,
  },
  submit_label: {
    color: '#fff',
  },
  modalContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(240, 240, 240, 1)',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CommandDetail;
