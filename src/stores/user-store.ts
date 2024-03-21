import { defineStore } from "pinia";
import { getUsers } from "src/services/UserService";
import { computed, ref } from "vue";
import User from "src/models/UserInterface";

export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);

  const isLoading = ref(false);

  const search = ref("");

  const filtredUsers = computed(() => {
    return users.value.filter((user) => {
      return (
        user.name.lastname.toLowerCase().includes(search.value.toLowerCase()) ||
        user.name.firstname
          .toLowerCase()
          .includes(search.value.toLowerCase()) ||
        user.email.toLowerCase().includes(search.value.toLowerCase()) ||
        !search.value
      );
    });
  });

  const getUsersList = async () => {
    isLoading.value = true;
    const response = await getUsers();
    users.value = response.sort((a, b) => a.username.localeCompare(b.username));
    isLoading.value = false;
  };

  return { getUsersList, isLoading, filtredUsers, search };
});
