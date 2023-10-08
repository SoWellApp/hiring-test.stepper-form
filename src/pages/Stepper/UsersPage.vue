<template>
  <q-list>
    <q-item
      v-ripple
      v-for="{ id, name, username, email } in users"
      :key="id"
      class="q-mb-md"
    >
      <q-item-section>
        <q-item-label>{{ name }} ({{ username }})</q-item-label>
        <q-item-label caption>{{ email }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();

const users = ref();

onMounted(() => {
  getUsers();
});

const getUsers = () => {
  $q.loading.show();
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      users.value = response.data;
      $q.loading.hide();
    })
    .catch((error) => {
      $q.loading.hide();
      $q.notify({
        color: 'negative',
        message: 'There was an error in fetching the users list!',
        icon: 'report_problem',
      });
    });
};
</script>
