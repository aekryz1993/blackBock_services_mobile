import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNFetchBlob from 'rn-fetch-blob';
import Clipboard from '@react-native-clipboard/clipboard';

import ClientScreen from '@components/Client/ClientScreen';
import {OrderContext} from '@components/contexts/OrderProvider';
import {API_HOSTA} from '@env';

const DisplayCodes = ({fetchcreditRequest, walletCredit, orderFinished}) => {
  const [orderState, orderDispatch] = useContext(OrderContext);
  const {commands, codes, navigation, message, fileCodes} = orderState;

  const checkPermissions = async () => {
    if (Platform.OS === 'ios') {
      downloadFile();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          downloadFile();
        } else {
          Alert.alert('Error', 'Storage Permission Not Granted');
        }
      } catch (error) {
        console.log('++++' + error);
      }
    }
  };

  const downloadFile = () => {
    const url = `http://${API_HOSTA}/${fileCodes}`;
    const options = {
      fileCache: true,
      addAndroidDownloads: {
        description: 'downloading file...',
        notification: true,
        useDownloadManager: true,
      },
    };
    RNFetchBlob.config(options)
      .fetch('GET', url)
      .then(() => {
        Alert.alert('File Downloaded Successfully.');
      })
      .catch(error => console.log(error));
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.codeitem}>
        <Text>{item.category}</Text>
        <Text>{item.code}</Text>
      </View>
    );
  };

  const clearStates = () => {
    orderFinished();
    orderDispatch({
      type: 'ENDED',
      payload: {
        navigation: () => {},
        codes: [],
        commands: [],
        fileCodes: '',
        message: '',
      },
    });
  };

  const copyToClipboard = async _codes => {
    let text = '';
    _codes.forEach((code, index) => {
      if (index === 0) {
        text = `${code.category} \t ${code.code}`;
      } else {
        text = text + '\n' + `${code.category} \t ${code.code}`;
      }
    });
    Clipboard.setString(text);
    Alert.alert('Text Copied Successfully');
  };

  return (
    <ClientScreen
      navigation={navigation}
      back={true}
      backAction={clearStates}
      fetchcreditRequest={fetchcreditRequest}
      walletCredit={walletCredit}>
      <View style={styles.container}>
        <View style={styles.success}>
          <Icon name="check-circle" size={50} color="#32cd32" />
          <Text style={styles.seccess_text}>{message}</Text>
        </View>
        <View style={styles.download}>
          <TouchableOpacity
            style={styles.download_button}
            onPress={checkPermissions}>
            <Text style={styles.download_text}>حمل ملف الأكواد</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.commands}>
          <Text style={styles.title}>Commands</Text>
          <ScrollView>
            {commands.map(command => (
              <View key={command.id}>
                <Text style={styles.command_name}>{command.category}</Text>
                <Text style={styles.command_quantity}>{command.quantity}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.codes}>
          <Text style={styles.headerCode}>
            <Text>Codes</Text>
            <TouchableOpacity onPress={() => copyToClipboard(codes)}>
              <Icon name="clipboard" size={20} color="#222" />
            </TouchableOpacity>
          </Text>
          <FlatList
            data={codes}
            style={styles.carousel}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </View>
      </View>
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '65%',
  },
  commands: {
    height: '40%',
    marginBottom: 30,
  },
  codes: {
    height: '80%',
  },
  title: {
    marginBottom: 10,
    marginTop: 10,
  },
  headerCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  codeitem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default DisplayCodes;
