<template>
  <div class="q-pa-md">
    <q-input v-model="search" filled type="search" hint="Search">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-list dense bordered padding class="rounded-borders">
      <q-item v-ripple v-for="(item, index) in filteredUsersList" :key="index">
        <q-item-section> {{ item.name }} </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { User } from 'src/types/interfaces';
import UserCard from 'src/components/UserCard.vue';
import data from './data.json';

const userList = ref<User[]>([]);
const searchKeyword = ref('');

onMounted(() => {
  userList.value = ref(data);
});

const filteredUsersList = computed(() => {
  const searchValue = search.value.toLowerCase();

  return usersList.value.filter((user) => {
    return user.name.toLowerCase().indexOf(searchValue) !== -1 || !searchValue;
  });
});
</script>
