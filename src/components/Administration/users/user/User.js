import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import EditUserInfo from './EditUserInfo';
import Permissions from './Permissions';
import Wallet from './Wallet';

const User = ({
  userMsg,
  userSuccess,
  permMsg,
  permSuccess,
  walletMsg,
  walletSuccess,
  updateUserRequest,
  updateUserFinished,
  updatePermissionsRequest,
  updatePermissionsFinished,
  updateWalletRequest,
  updateWalletFinished,
  route,
}) => {
  const [screen, setScreen] = useState('userInfo');
  const {permissions, wallet, userId} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {screen === 'userInfo' && (
          <EditUserInfo
            userId={userId}
            message={userMsg}
            success={userSuccess}
            updateUserRequest={updateUserRequest}
            updateUserFinished={updateUserFinished}
          />
        )}
        {screen === 'permissions' && (
          <Permissions
            permissions={permissions}
            permMsg={permMsg}
            permSuccess={permSuccess}
            userMsg={userMsg}
            userSuccess={userSuccess}
            updateUserRequest={updateUserRequest}
            updateUserFinished={updateUserFinished}
            updatePermissionsRequest={updatePermissionsRequest}
            updatePermissionsFinished={updatePermissionsFinished}
          />
        )}
        {screen === 'wallet' && (
          <Wallet
            wallet={wallet}
            message={walletMsg}
            success={walletSuccess}
            updateWalletRequest={updateWalletRequest}
            updateWalletFinished={updateWalletFinished}
          />
        )}
      </View>
      <View style={styles.tabNav}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.tabItem}
          onPress={() => setScreen('userInfo')}>
          <MCIcon
            style={styles.icon}
            name="account-details"
            size={20}
            color={
              screen === 'userInfo'
                ? 'rgba(255,255,255,1)'
                : 'rgba(255,255,255,0.4)'
            }
          />
          <Text
            style={screen === 'userInfo' ? styles.label_active : styles.label}>
            ??????????????????
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.tabItem}
          onPress={() => setScreen('permissions')}>
          <MCIcon
            style={styles.icon}
            name="security"
            size={20}
            color={
              screen === 'permissions'
                ? 'rgba(255,255,255,1)'
                : 'rgba(255,255,255,0.4)'
            }
          />
          <Text
            style={
              screen === 'permissions' ? styles.label_active : styles.label
            }>
            ??????????
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.tabItem}
          onPress={() => setScreen('wallet')}>
          <MCIcon
            style={styles.icon}
            name="wallet"
            size={20}
            color={
              screen === 'wallet'
                ? 'rgba(255,255,255,1)'
                : 'rgba(255,255,255,0.4)'
            }
          />
          <Text
            style={screen === 'wallet' ? styles.label_active : styles.label}>
            ??????????????
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1.2,
  },
  tabNav: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'rgba(255,255,255,0.4)',
  },
  label_active: {
    color: 'rgba(255,255,255,1)',
  },
});

export default User;
