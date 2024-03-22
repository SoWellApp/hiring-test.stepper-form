<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section>
        <q-item-label class="post-title"> {{ postTitle }}</q-item-label>
        <q-item-label caption class="post-body">{{ postBody }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  postTitle: string
  postBody: string
}>()
</script>
