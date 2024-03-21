<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section>
        <q-item-label> {{ postTitle }}</q-item-label>
        <q-item-label caption>{{ postBody }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  postTitle: string;
  postBody: string;
}>();
</script>
