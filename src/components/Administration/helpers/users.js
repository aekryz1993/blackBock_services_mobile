export const initialUserStates = (users, id) => {
  let user = users.filter(_user => _user.id === id);
  const isAdmin = user[0].isAdmin;
  const permissions = user[0].Permission;
  const wallet = user[0].Wallet;
  const userBody = Object.fromEntries(
    Object.entries(user[0]).filter(
      ([key, _]) =>
        key !== 'Permission' &&
        key !== 'Image' &&
        key !== 'Wallet' &&
        key !== 'createdAt' &&
        key !== 'image' &&
        key !== 'isActive' &&
        key !== 'isVerified' &&
        key !== 'updatedAt' &&
        key !== 'id' &&
        key !== 'isAdmin',
    ),
  );
  return {
    user: userBody,
    isAdmin,
    permissions,
    wallet,
  };
};
