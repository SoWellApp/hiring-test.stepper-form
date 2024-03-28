<template>
  <q-layout>
    <main>
      <SwPatrimonySearch v-model="search" :results="searchResults" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        assumenda.
      </p>
    </main>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import SwPatrimonySearch from "src/components/SwPatrimonySearch.vue"

const dataPatrimony = (search: string) => [
  {
    label: "Résidence",
    childs: [
      {
        label: "Résidence des Cézeaux",
        value: "12",
        metadata: { code: "63000" }
      },
      { label: "Résidence du Parc", value: "8", metadata: { code: "63100" } },
      { label: "Résidence Bellevue", value: "15", metadata: { code: "63200" } }
    ]
  },
  {
    label: "Adresse",
    childs: [
      {
        label: `${search} 12 Rue de la Liberté Cézeaux`,
        value: "1",
        metadata: { code: "69002" }
      },
      {
        label: `${search} 8 Avenue de la République Bellevue`,
        value: "2",
        metadata: { code: "13008" }
      },
      {
        label: `${search} 15 Rue Victor Hugo`,
        value: "3",
        metadata: { code: "75016" }
      }
    ]
  }
]

const search = ref<string>("")

const searchResults = computed(() => {
  return search.value.length > 3 ? dataPatrimony(search.value) : []
})
</script>

<style scoped lang="css">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  padding-top: 7rem;
  height: 100vh;
  width: 100vw;
  background-color: #f3f4f5;
}
</style>
