import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UsersContext} from '@components/contexts/Users';
import {walletBody, initWalletSt} from '../objects/wallet';
import {initialUserStates} from '@components/Administration/helpers/users';
import MessageAlert from '@components/material/MessageAlert';

const Wallet = ({
  wallet,
  message,
  success,
  updateWalletRequest,
  updateWalletFinished,
}) => {
  const [usersState, usersDispatch] = useContext(UsersContext);
  const [walletST, setwalletST] = useState(
    initialUserStates(usersState.users, wallet.UserId).wallet,
  );
  const [updateCredit, setupdateCredit] = useState(initWalletSt);
  const [prevCredit, setprevCredit] = useState(initWalletSt);
  const [disabled, setdisabled] = useState(false);

  const onCreditChange = (op, currncyCredit) => {
    switch (op) {
      case 'increament':
        setupdateCredit({
          ...updateCredit,
          [currncyCredit]: Number(updateCredit[currncyCredit]) + 1,
        });
        setwalletST({
          ...walletST,
          [currncyCredit]: walletST[currncyCredit] + 1,
        });
        break;
      case 'decreament':
        if (Number(updateCredit[currncyCredit]) > 0) {
          setupdateCredit({
            ...updateCredit,
            [currncyCredit]: Number(updateCredit[currncyCredit]) - 1,
          });
          setwalletST({
            ...walletST,
            [currncyCredit]: walletST[currncyCredit] - 1,
          });
        }
        break;
      case 'focus':
        setdisabled(true);
        setprevCredit({
          ...prevCredit,
          [currncyCredit]: updateCredit[currncyCredit],
        });
        setupdateCredit({
          ...updateCredit,
          [currncyCredit]: '',
        });
        setwalletST({
          ...walletST,
          [currncyCredit]: walletST[currncyCredit],
        });
        break;
      case 'input':
        if (updateCredit[currncyCredit] === '') {
          setupdateCredit({
            ...updateCredit,
            [currncyCredit]: Number(prevCredit[currncyCredit]),
          });
        } else {
          setupdateCredit({
            ...updateCredit,
            [currncyCredit]: Number(updateCredit[currncyCredit]),
          });
          setwalletST({
            ...walletST,
            [currncyCredit]:
              walletST[currncyCredit] +
              Number(updateCredit[currncyCredit]) -
              Number(prevCredit[currncyCredit]),
          });
        }
        setdisabled(false);
        break;
      default:
        setupdateCredit(updateCredit);
    }
  };

  const onConfirm = () => {
    updateWalletRequest({
      body: {
        dollar: walletST.dollar,
        dinnar: walletST.dinnar,
        euro: walletST.euro,
      },
      id: walletST.UserId,
    });
    let currentUser = usersState.users.filter(
      userObj => userObj.Wallet.UserId === walletST.UserId,
    );
    const otherUsers = usersState.users.filter(
      userObj => userObj.Wallet.UserId !== walletST.UserId,
    );
    currentUser[0].Wallet = walletST;
    const users = [...currentUser, ...otherUsers];
    usersDispatch({type: 'UPDATE', payload: {users}});
    setupdateCredit(initWalletSt);
    setprevCredit(initWalletSt);
  };

  const onCloseAlert = () => {
    updateWalletFinished();
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
        <ScrollView style={styles.scroll}>
          {walletBody.map(item => (
            <View key={item.key} style={styles.currencyContainer}>
              <View style={styles.creditField}>
                <Text style={styles.creditText}>{`${walletST[item.key]} ${
                  item.label
                }`}</Text>
              </View>
              <View style={styles.updateCreditField}>
                <TouchableOpacity
                  style={styles.decrButton}
                  onPress={() => onCreditChange('decreament', item.key)}>
                  <View style={styles.updateButtonContainer}>
                    <Icon name="minus" size={10} color="#fff" />
                  </View>
                </TouchableOpacity>
                <TextInput
                  style={styles.updateCreditInput}
                  onChangeText={t => {
                    setupdateCredit({...updateCredit, [item.key]: t});
                  }}
                  value={updateCredit && updateCredit[item.key].toString()}
                  onEndEditing={() => onCreditChange('input', item.key)}
                  onFocus={() => onCreditChange('focus', item.key)}
                  keyboardType="numeric"
                  textAlign={'center'}
                />
                <TouchableOpacity
                  style={styles.incButton}
                  onPress={() => onCreditChange('increament', item.key)}>
                  <View style={styles.updateButtonContainer}>
                    <Icon name="plus" size={10} color="#fff" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.submitClmnn}>
        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={onConfirm}
          disabled={disabled}>
          <Text style={styles.confirmBtnLbl}>حفظ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  content: {
    paddingHorizontal: '10%',
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  creditField: {
    flex: 2,
    backgroundColor: 'rgba(200, 200, 200, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '5%',
  },
  creditText: {
    fontSize: 20,
  },
  updateCreditField: {
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButtonContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateCreditInput: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 8,
  },
  submitClmnn: {
    flex: 1,
    justifyContent: 'center',
  },
  confirmBtn: {
    alignSelf: 'center',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  confirmBtnLbl: {
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
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

export default Wallet;
