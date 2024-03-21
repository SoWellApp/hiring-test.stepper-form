<template>
  <div class="q-pa-md">
    <q-input
      v-model="search"
      filled
      type="search"
      hint="Search"
      data-testid="searchbar">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-list
      dense
      bordered
      padding
      class="rounded-borders"
      data-testid="users-list">
      <q-item
        v-ripple
        v-for="(user, index) in filteredUsersList"
        :key="index"
        :data-testid="`user-item-${user.id}`"
        class="user-item">
        <list-item
          :firstname="user.name.firstname"
          :lastname="user.name.lastname"
          :email="user.email"
          :city="user.address.city"></list-item>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import ListItem from "src/components/ListItem.vue"
import { useUserStore } from "src/stores/user.store"
import { storeToRefs } from "pinia"

const userStore = useUserStore()

const { search, filteredUsersList } = storeToRefs(userStore)

onMounted(async () => await userStore.getAllUsers())
</script>
