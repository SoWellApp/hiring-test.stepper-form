import { defineStore } from 'pinia';
import { getUsers } from 'src/services/UserService';
import { ref } from 'vue';
import User from 'src/models/UserInterface';

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([]);

  const isLoading = ref(false);

  const getUsersList = async () => {
    isLoading.value = true;
    const response = await getUsers();
    users.value = response; 
    isLoading.value = false;   
    }
    
  return { users, getUsersList, isLoading}
});
