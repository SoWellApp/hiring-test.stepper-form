<template>
  <q-page padding class="wrapper">
    <div class="q-pa-md left-side" style="max-width: 350px">
      <q-list bordered padding data-testid="users-list">
        <q-item>
          <q-item-section>
            <q-item-label overline>MANAGERS</q-item-label>
            <q-item-label caption>Responsable</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption
              >{{ filtredUsers.length }} pesonne{{
                filtredUsers.length > 1 ? "s" : ""
              }}</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-input
          color="teal"
          filled
          v-model="search"
          label="name, email"
          data-testid="search-input">
          <template v-slot:prepend>
            <q-icon name="search" size="30px" />
          </template>
        </q-input>
        <q-item-label header>List d'utilisateurs</q-item-label>

        <load-list-item :len="5" v-if="isLoading" />
        <template v-for="(item, index) in filtredUsers" :key="index">
          <list-item
            :label="item.username"
            :caption="item.email"
            class="user-item"
            :data-testid="`user-item-${item.id}`" />
        </template>
      </q-list>
    </div>
    <div class="q-pa-md right-side">
      <h4>Générateur de nombre <br> aléatoire</h4>
      <sw-random-number-generate
        label="Générer"
        seed="seed"
        :min="0"
        :max="100"
        :float="false"
        :icon="ionRefresh"
        @send-number="changeNumber">
      </sw-random-number-generate>

      <div v-show="randomNumber">
        <p>nombre dénéré est</p>
        <p class="randNum">
          {{ randomNumber }}
        </p>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import ListItem from "../components/ListItem/ListItem.vue"
import LoadListItem from "../components/ListItem/LoadListItem.vue"
import { useUserStore } from "src/stores/user-store"
import { storeToRefs } from "pinia"
import SwRandomNumberGenerate from "../components/SwRandomNumberGenerate.vue"
import { ionRefresh } from "@quasar/extras/ionicons-v5"

const randomNumber = ref<number>()


const userStore = useUserStore()

const { isLoading, search, filtredUsers } = storeToRefs(userStore)

const changeNumber = (num: number) => {
  randomNumber.value = num
}
onMounted(async () => {
  await userStore.getUsersList()
})
</script>

<style scoped lang="css">
.wrapper {
  display: flex;
  justify-content: space-around;
}
.right-side {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
}

.right-side .randNum {
  font-size: 4rem;
  font-weight: 600;
}
</style>
