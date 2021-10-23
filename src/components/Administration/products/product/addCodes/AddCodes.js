import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import MessageAlert from '@components/material/MessageAlert';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DocumentPicker from 'react-native-document-picker';
import {CategoryContext} from '@components/contexts/CategoryProduct';

const AddCodes = ({
  route,
  message,
  success,
  addCodesFinished,
  addCodesRequest,
}) => {
  const [categoryState, categoryDispatch] = useContext(CategoryContext);
  const {serviceName, serviceId} = route.params;
  const [dataForm, setdataForm] = useState([]);
  const [file, setfile] = useState(null);

  const onCloseAlert = () => {
    addCodesFinished();
  };

  const uploadFile = async () => {
    try {
      setdataForm([]);
      const res = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.xlsx,
      });
      let data = new FormData();
      data.append('file', res);
      data.append('serviceName', serviceName);
      data.append('ServiceId', serviceId);
      setdataForm(data);
      setfile(res.name);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('Canceled');
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  const onSubmit = () => {
    addCodesRequest({dataForm, categoryDispatch, serviceName});
    setdataForm([]);
    setfile(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {message && (
        <MessageAlert
          message={message}
          onCloseAlert={onCloseAlert}
          alertbcStyle={success ? styles.alertbcStyle : styles.alertErrobcStyle}
        />
      )}
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={uploadFile}>
          <Text style={styles.buttonLbl}>تحميل ملف الأكواد</Text>
          <FeatherIcon name="upload" size={20} color="rgba(255,255,255,1)" />
        </TouchableOpacity>
        {file && (
          <View style={styles.filename}>
            <Text style={styles.filenametxt}>{file}</Text>
          </View>
        )}
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonLbl}>إضافة الأكواد</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 3,
    justifyContent: 'center',
  },
  submitContainer: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLbl: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 20,
    marginRight: 12,
  },
  filename: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  filenametxt: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  alertbcStyle: {
    borderColor: 'rgba(20,170,50,1)',
    color: 'rgba(20,170,50,1)',
  },
  alertErrobcStyle: {
    borderColor: 'rgba(170,20,50,1)',
    color: 'rgba(170,20,50,1)',
  },
});

export default AddCodes;
