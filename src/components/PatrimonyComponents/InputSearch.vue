<template>
  <q-input
    class="search-input"
    outlined
    rounded
    color="transparent"
    v-model="searchInput"
    placeholder="Search">
    <template v-slot:prepend>
      <q-icon name="search" size="30px" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"

const emit = defineEmits<{(e: "getValue", value: string): void }>()

const searchInput = ref<string>("")

watch(searchInput, () => {
  if (searchInput.value.length > 3) {
    emit("getValue", searchInput.value)
  } else {
    emit("getValue", "")
  }
})
</script>

<style scoped>
.search-input {
  font-size: 1rem;
  min-width: 344px;
  border: none;
}
</style>
