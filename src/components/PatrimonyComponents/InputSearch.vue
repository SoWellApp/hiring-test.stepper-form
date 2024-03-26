<template>
  <q-input
    class="search-input"
    color="transparent"
    filled
    v-model="searchInput">
    <template v-slot:prepend>
      <q-icon name="search" size="30px" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref } from "vue"

const searchInput = ref<string>("")
</script>

<style scoped>
.search-input {
  min-width: 344px;
  font-size: 16px;
}
</style>
