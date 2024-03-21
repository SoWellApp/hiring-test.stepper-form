import "pinia"
import { defineStore } from "pinia"
import { getUsers } from "src/services/user-service"
import { User } from "src/types/interfaces";
import { computed, ref } from "vue";
import { SessionStorage } from "quasar";

export const useUserStore = defineStore("users", () => {
    const usersList = ref<User[]>([]);
    const search = ref("");

    const getAllUsers = async () => {
        const response = await getUsers();
        usersList.value = response?.data;
    }

    const filteredUsersList = computed(() => {
        const searchValue = search.value.toLowerCase();

        return usersList.value.filter((user) => {
            return (
                user.name.firstname.toLowerCase().indexOf(searchValue) !== -1 ||
                user.name.lastname.toLowerCase().indexOf(searchValue) !== -1 ||
                user.email.toLowerCase().indexOf(searchValue) !== -1 ||
                !searchValue
            );
        });
    });

    const setConnectedUser = (username: string) => {
        SessionStorage.set("loggedUser", username);
    }

    return { usersList, getAllUsers, search, filteredUsersList, setConnectedUser }
})