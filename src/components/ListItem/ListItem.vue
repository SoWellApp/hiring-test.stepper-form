<template>
  <q-item clickable v-ripple>
    <q-item-section avatar>
      <q-avatar color="primary" text-color="white">
        {{ label.charAt(0) }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  caption: string;
}>();
</script>
