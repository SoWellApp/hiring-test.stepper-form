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

        <load-list-item :len="5" v-if="isLoading" />
        <template v-for="(item, index) in users" :key="index">
          <list-item :label="item.username" :caption="item.email" />
        </template>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import ListItem from '../components/ListItem/ListItem.vue';
import LoadListItem from '../components/ListItem/LoadListItem.vue';
import { useUserStore } from 'src/stores/user-store';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();

const { users, isLoading } = storeToRefs(userStore)

onMounted(async () => {
  await userStore.getUsersList();
});

</script>
