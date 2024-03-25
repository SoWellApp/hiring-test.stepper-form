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
    <div class="container">
      <div class="row">
        <div class="col-8">
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
        <div class="col-4">
          <sw-random-number-generator
            v-model="randomNumber"
            :seed="seed"
            :min="10"
            :max="100"
            :icon="ionRefresh"
            :float="false"
            label="Générer"
            @update-random-number="changeNumber">
          </sw-random-number-generator>
          <p v-if="randomNumber">
            Le nombre généré est
            {{ randomNumber }}
          </p>
          <p v-else>Cliquez sur le boutton pour générer un nombre</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import ListItem from "src/components/ListItem.vue"
import SwRandomNumberGenerator from "src/components/SwRandomNumberGenerator.vue"
import { ionRefresh } from "@quasar/extras/ionicons-v5"
import { useUserStore } from "src/stores/user.store"
import { storeToRefs } from "pinia"

const randomNumber = ref<number>()
const seed = ref("432")

const changeNumber = (newRandomNumber: number) => {
  randomNumber.value = newRandomNumber
}

const userStore = useUserStore()

const { search, filteredUsersList } = storeToRefs(userStore)

onMounted(async () => await userStore.getAllUsers())
</script>
