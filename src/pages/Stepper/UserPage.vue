<template>
  <q-list bordered class="rounded-borders">
    <template v-for="(user, i) in users" :key="i">
      <q-item>
        <q-item-section>
          <q-item-label class="text-bold">
            {{ user.name }} ({{ user.username }})
          </q-item-label>
          <q-item-label>{{ user.email }} </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced />
    </template>
  </q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';

interface IUser {
  name: string;
  username: string;
  email: string;
}

let users = ref<IUser[]>([]);
const $q = useQuasar();
$q.loadingBar.start();

api
  .get('/users')
  .then((response) => {
    users.value = response.data;
  })
  .catch((error) => {
    $q.notify({
      message: error.message,
    });
  })
  .finally(() => {
    $q.loadingBar.stop();
  });
</script>
