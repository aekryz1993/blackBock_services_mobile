import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
  View,
  StatusBar,
} from 'react-native';
// import t from 'prop-types';

const CustomModal = ({
  dismiss,
  children,
  visible,
  transparent,
  animationType,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      onRequestClose={dismiss}
      animationType={animationType}>
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.modalContent]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    position: 'absolute',
    right: 50,
    marginTop: StatusBar.currentHeight * 2,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CustomModal;
