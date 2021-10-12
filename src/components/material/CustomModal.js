import React from 'react';
import {TouchableWithoutFeedback, Modal, View} from 'react-native';
// import t from 'prop-types';

const CustomModal = ({
  dismiss,
  children,
  visible,
  transparent,
  animationType,
  modalStyles,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      onRequestClose={dismiss}
      animationType={animationType}>
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={modalStyles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={modalStyles.modalContent}>{children}</View>
    </Modal>
  );
};

export default CustomModal;
