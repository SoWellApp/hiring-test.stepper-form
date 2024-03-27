<template>
  <q-item class="item">
    <q-item-label overline class="item-title">{{
      label.toUpperCase()
    }}</q-item-label>
    <q-list class="item-list">
      <div class="item-list-item" v-for="(item, index) in childs" :key="index">
        <q-item-label v-high-light="{ searched, text: item.label }"
          >{{ item.label }}
        </q-item-label>
        <q-item-label caption side top>{{ item.metadata.code }}</q-item-label>
      </div>
    </q-list>
  </q-item>
</template>

<script setup lang="ts">
import { ChildPatrimony } from "./data"
import { vHighLight } from "../../utils/directives/HighLigth"

defineProps<{
  label: string
  childs: ChildPatrimony[]
  searched: string
}>()
</script>

<style scoped>
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
