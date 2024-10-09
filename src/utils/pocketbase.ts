import PocketBase from 'pocketbase';

const pb = new PocketBase('https://finius.pockethost.io');

export const getFinancialGoals = async () => {
  const records = await pb.collection('financial_goals').getFullList({
    sort: '-created',
  });
  return records;
};

export const getTransactions = async () => {
  const records = await pb.collection('transactions').getFullList({
    sort: '-date',
  });
  return records;
};

export const getUserProfile = async () => {
  const userId = pb.authStore.model?.id;
  if (!userId) throw new Error('User not authenticated');
  const record = await pb.collection('users').getOne(userId);
  return record;
};

export const updateUserProfile = async (data: {
  name?: string;
  email?: string;
  password?: string;
}) => {
  const userId = pb.authStore.model?.id;
  if (!userId) throw new Error('User not authenticated');
  await pb.collection('users').update(userId, data);
};
