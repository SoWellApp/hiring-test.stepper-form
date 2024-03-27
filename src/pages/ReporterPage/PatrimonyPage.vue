<template>
  <q-layout>
    <main>
      <section class="card-search">
        <InputSeach @get-value="setSearch" />
        <section v-show="resultSearchLength" class="search-result">
          <template v-for="(item, index) in resultSearch" :key="index">
            <ItemList
              :label="item.label"
              :childs="item.childs"
              :searched="search" />
            <q-separator v-show="index != resultSearchLength - 1" />
          </template>
        </section>
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        assumenda.
      </p>
    </main>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { dataPatrimony } from "src/components/PatrimonyComponents/data"
import InputSeach from "src/components/PatrimonyComponents/InputSearch.vue"
import ItemList from "src/components/PatrimonyComponents/ItemList.vue"

const search = ref<string>("")

const setSearch = (value: string) => {
  search.value = value
}
const resultSearch = computed(() => {
  return search.value.length > 3 ? dataPatrimony(search.value) : []
})

const resultSearchLength = computed(() => {
  return resultSearch.value.length
})
</script>

<style scoped lang="css">
main, .card-search, .search-result {
  display: flex;
  flex-direction: column;
}
main {
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f3f4f5;
}
.card-search {
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-top: 7rem;
  gap: 0.5rem;
}
.search-result {
  position: absolute;
  overflow-y: scroll;
  top: 4rem;
  width: 344px;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
