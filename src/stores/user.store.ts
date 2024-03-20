import { defineStore } from 'pinia'
import { getUsers } from 'src/services/user-service'
import { User } from 'src/types/interfaces';
import { ref } from 'vue';

export const useUserStore = defineStore('users', () => {
    const usersList = ref<User[]>([]);

    const getAllUsers = async () => {
        const response = await getUsers();
        usersList.value = response?.data;
    }

    return { usersList, getAllUsers }
})