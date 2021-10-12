import React from 'react';
import UserOperation from '../UserOperation';

const EditUserInfo = ({
  message,
  success,
  updateUserRequest,
  updateUserFinished,
}) => {
  return (
    <UserOperation
      message={message}
      success={success}
      userOpRequest={updateUserRequest}
      userOpFinished={updateUserFinished}
    />
  );
};

export default EditUserInfo;
