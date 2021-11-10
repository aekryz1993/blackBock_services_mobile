import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';
import MessageAlert from '@components/material/MessageAlert';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// import ImagePicker from 'react-native-image-crop-picker';
import {ProductsContext} from '@components/contexts/ProductsProvider';
import DocumentPicker from 'react-native-document-picker';

const AddService = ({
  message,
  success,
  addServiceFinished,
  addServiceRequest,
}) => {
  const [productsState, productsDispatch] = useContext(ProductsContext);
  const [dataForm, setdataForm] = useState([]);
  const [image, setimage] = useState(null);
  const [name, setname] = useState(null);
  const [category, setcategory] = useState('id');

  const onCloseAlert = () => {
    addServiceFinished();
  };

  const uploadImage = async () => {
    try {
      setdataForm([]);
      //   const res = await ImagePicker.openPicker({
      //     cropping: true,
      //     compressImageQuality: 0.7,
      //   });
      const res = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.images,
      });
      let data = new FormData();
      data.append('picture', res);
      setdataForm(data);
      setimage(res.uri);
      //   setimage(res.path);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = () => {
    addServiceRequest({dataForm, productsDispatch, category, name});
    setdataForm([]);
    setimage(null);
    setname(null);
    setcategory('id');
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
        <View style={styles.imageContainer}>
          <ImageBackground
            source={
              image
                ? {
                    uri: image,
                  }
                : require('@images/product-placeholder.png')
            }
            style={styles.image}
            imageStyle={styles.imageDim}>
            <View style={styles.uploadImgBtnContainer}>
              <TouchableOpacity
                style={styles.submitImage}
                onPress={uploadImage}>
                <FontAwesome5Icon
                  style={styles.imageUpdate}
                  name="camera"
                  size={32}
                  color="rgba(255,255,255,1)"
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setname}
            value={name}
            placeholder="Product Name"
          />
        </View>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[
              styles.radioBtn,
              category === 'id' && styles.radioBtn_active,
            ]}
            onPress={() => setcategory('id')}>
            <Text
              style={[
                styles.radiolbl,
                category === 'id' && styles.radiolbl_active,
              ]}>
              Top Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.radioBtn,
              category === 'code' && styles.radioBtn_active,
            ]}
            onPress={() => setcategory('code')}>
            <Text
              style={[
                styles.radiolbl,
                category === 'code' && styles.radiolbl_active,
              ]}>
              Codes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonLbl}>إضافة المنتج</Text>
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
    marginTop: '8%',
    width: '90%',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '90%',
  },
  radioContainer: {
    flex: 0.5,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
  },
  radioBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(120,0,0,0.5)',
    borderRadius: 20,
  },
  radioBtn_active: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(120,0,0,1)',
    borderRadius: 20,
  },
  radiolbl: {
    color: 'rgba(230,230,230,1)',
    fontSize: 16,
  },
  radiolbl_active: {
    color: 'rgba(255,255,255,1)',
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
  uploadImgBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUpdate: {
    padding: 8,
    borderRadius: 40,
    backgroundColor: 'rgba(150,150,150,0.8)',
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  imageDim: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)',
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

export default AddService;
