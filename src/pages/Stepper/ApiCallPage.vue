<template>
  <q-list bordered separator v-if="userList.length > 0">
    <q-item clickable v-for="(user, i) in userList" :key="i">
      <q-section>
        <q-item-label> {{ user.name }} ({{ user.username }}) </q-item-label>
        <q-item-label caption>
          {{ user.email }}
        </q-item-label>
      </q-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const $q = useQuasar();

interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

const userList = ref<{ username: string; name: string; email: string }[]>([]);

onMounted(async () => {
  try {
    $q.loadingBar.start(200);
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    userList.value = (data as UserInfo[]).map((user) => ({
      name: user.name,
      username: user.username,
      email: user.email,
    }));
  } catch (_) {
    $q.notify({
      message: 'An error occured when fetching user list',
      color: 'negative',
      icon: 'announcement',
      position: 'bottom-left',
      closeBtn: 'close',
      textColor: '#fff',
    });
  } finally {
    $q.loadingBar.stop();
  }
});
</script>
