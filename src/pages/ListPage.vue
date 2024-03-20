<template>
  <div class="q-pa-md">
    <q-input v-model="search" filled type="search" hint="Search">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-list dense bordered padding class="rounded-borders">
      <q-item v-ripple v-for="(user, index) in filteredUsersList" :key="index">
        <list-item
          :firstname="user.name.firstname"
          :lastname="user.name.lastname"
          :email="user.email"
          :city="user.address.city"
        ></list-item>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import ListItem from 'src/components/ListItem.vue';
import { useUserStore } from 'src/stores/user.store';

const userStore = useUserStore();
const usersList = computed(() => userStore.usersList);

const search = ref('');

onMounted(async () => await userStore.getAllUsers());

const filteredUsersList = computed(() => {
  const searchValue = search.value.toLowerCase();

  return usersList.value.filter((user) => {
    return (
      user.name.firstname.toLowerCase().indexOf(searchValue) !== -1 ||
      user.name.lastname.toLowerCase().indexOf(searchValue) !== -1 ||
      !searchValue
    );
  });
});
</script>
