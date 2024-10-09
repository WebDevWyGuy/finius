import PocketBase from 'pocketbase';

const pb = new PocketBase('https://finius.pockethost.io');

export const login = async (email: string, password: string) => {
  const authData = await pb
    .collection('users')
    .authWithPassword(email, password);
  localStorage.setItem('pocketbase_auth', JSON.stringify(authData));
};

export const register = async (email: string, password: string) => {
  const user = await pb.collection('users').create({
    email,
    password,
    passwordConfirm: password,
  });
  await login(email, password);
};

export const logout = () => {
  pb.authStore.clear();
  localStorage.removeItem('pocketbase_auth');
};

export const isAuthenticated = () => {
  return pb.authStore.isValid;
};

export const getCurrentUser = () => {
  return pb.authStore.model;
};
