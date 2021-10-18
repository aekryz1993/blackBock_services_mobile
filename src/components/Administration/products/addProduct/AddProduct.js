import React from 'react';
import UserOperation from '../UserOperation';

const AddProduct = ({message, success, addUserRequest, addUserFinished}) => {
  return (
    <UserOperation
      message={message}
      success={success}
      userOpRequest={addUserRequest}
      userOpFinished={addUserFinished}
    />
  );
};

export default AddProduct;
