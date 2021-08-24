import React from 'react';
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

import ClientScreen from '@components/ClientScreen';
import {API_HOSTA} from '@env';

const DisplayCodes = ({route, fetchcreditRequest, walletCredit}) => {
  const {commands, codes, navigation, orderFinished, message, fileCodes} =
    route.params;

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
    const fileUrl = fileCodes
      .split('/')
      .slice(fileCodes.split('/').findIndex(ele => ele === 'resources') + 1)
      .join('/');
    const url = `http://${API_HOSTA}/${fileUrl}`;
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
      .then(response => {
        console.log('response -> ', JSON.stringify(response));
        console.log('The file saved to ', response.path());
        Alert.alert('File Downloaded Successfully.');
      })
      .catch(error => console.log(error));
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
        {codes[item].map(codeItem => (
          <Text key={codeItem.id}>{codeItem.code}</Text>
        ))}
      </View>
    );
  };

  return (
    <ClientScreen
      navigation={navigation}
      back={true}
      backAction={orderFinished}
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
              <>
                <Text style={styles.command_name}>{command.category}</Text>
                <Text style={styles.command_quantity}>{command.quantity}</Text>
              </>
            ))}
          </ScrollView>
        </View>
        <View style={styles.codes}>
          <Text>Codes</Text>
          <FlatList
            data={Object.keys(codes)}
            style={styles.carousel}
            renderItem={renderItem}
            keyExtractor={(_, idx) => idx}
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
    height: '30%',
    marginBottom: 30,
  },
  title: {
    marginBottom: 10,
    marginTop: 10,
  },
});

export default DisplayCodes;
