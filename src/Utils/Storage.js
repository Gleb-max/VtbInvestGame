import SecureStorage from 'react-native-secure-storage';

const userKey = 'AuthenticationToken';

export const saveUser = async data => {
  const stringData = JSON.stringify(data);
  await SecureStorage.setItem(userKey, stringData);
  return true;
};

export const updateUser = async data => {
  const user = await getUser();
  let newUser = {...user, ...data};
  saveUser(newUser);
};

export const getUser = async () => {
  const stringUser = await SecureStorage.getItem(userKey);
  if (!stringUser) {
    return {};
  }

  return JSON.parse(stringUser);
};
