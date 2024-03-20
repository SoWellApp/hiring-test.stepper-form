<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered padding>
        <q-item>
          <q-item-section>
            <q-item-label overline>MANAGERS</q-item-label>
            <q-item-label caption>Responsable</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption
              >{{ users.length }} pesonne{{
                users.length > 1 ? 's' : ''
              }}</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>List d'utilisateurs</q-item-label>

        <q-item v-for="user in users" :key="user.email">
          <user-card :user="user" />
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import UserCard from '../components/User/UserCard.vue';
import { ref } from 'vue';

const users = ref([
  {
    fname: 'herifanantenana',
    email: 'fana@sowell.com',
    points: 2,
  },
  {
    fname: 'rakoto',
    email: 'koto@sowell.com',
    points: 2,
  },
  {
    fname: 'Jeni',
    email: 'jeni@sowell.com',
    points: 150,
  },
  {
    fname: 'zo',
    email: 'zo@sowell.com',
    points: 110,
  },
]);

</script>
