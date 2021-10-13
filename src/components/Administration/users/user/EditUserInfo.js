import React from 'react';
import UserOperation from '../UserOperation';

const EditUserInfo = ({
  message,
  success,
  updateUserRequest,
  updateUserFinished,
  userId,
}) => {
  return (
    <UserOperation
      message={message}
      success={success}
      userId={userId}
      userOpRequest={updateUserRequest}
      userOpFinished={updateUserFinished}
    />
  );
};

export default EditUserInfo;
