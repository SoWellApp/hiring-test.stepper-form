<template>
  <div class="wrapper">
    <q-input
      class="search-input"
      outlined
      rounded
      color="transparent"
      v-model="search"
      placeholder="Search">
      <template v-slot:prepend>
        <q-icon name="search" size="30px" />
      </template>
    </q-input>
    <q-list v-show="results.length > 0" class="search-result">
      <q-item class="item" v-for="(item, index) in results" :key="index">
        <q-item-label overline class="item-title">{{
          item.label.toUpperCase()
        }}</q-item-label>
        <q-list class="item-list">
          <div
            class="item-list-item"
            v-for="(innerItem, i) in item.childs"
            :key="i">
            <q-item-label v-high-light="{ word: search, text: innerItem.label }"
              >{{ innerItem.label }}
            </q-item-label>
            <q-item-label caption side top>{{
              innerItem.metadata.code
            }}</q-item-label>
          </div>
        </q-list>
        <q-separator v-show="index != results.length - 1" />
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { Patrimony } from "src/types/index"
import { useVModel } from "@vueuse/core"
import { vHighLight } from "src/utils/directives/HighLigth"

const emit = defineEmits<{(e: "update:modelValue", value: string): void }>()

const props = defineProps<{
  modelValue: string
  results: Patrimony[]
}>()

const search = useVModel(props, "modelValue", emit)
</script>

<style scoped>
.wrapper {
  position: relative
}
.search-input {
  font-size: 1rem;
  min-width: 344px;
  border: none;
}
.search-result {
  position: absolute;
  top: 4rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll hidden;
  width: 344px;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.item,
.item-list,
.item-list-item {
  display: flex;
}
.item,
.item-list {
  flex-direction: column;
  gap: 0.5rem;
}
.item {
  padding: 0px;
}
.item-title {
  font-size: 0.75rem;
  color: #849298;
  font-weight: 400;
}
.item-list-item {
  justify-content: space-between;
  padding: 4px 8px;
  gap: 1rem;
}
</style>
