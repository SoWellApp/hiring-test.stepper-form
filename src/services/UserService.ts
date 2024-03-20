import { api } from 'src/boot/axios';
import User from 'src/models/UserInterface';
const getUsers = async () => {
  const response = await api.get<User[]>('/users');
  return response.data;
};

export { getUsers };
