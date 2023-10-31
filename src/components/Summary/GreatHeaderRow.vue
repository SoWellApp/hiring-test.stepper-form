<template>
  <tr>
    <th colspan="3">
      <div class="row no-wrap items-center">
        <div class="text-h6 q-ml-md">{{ text }}</div>
      </div>
    </th>
  </tr>
</template>
<script setup lang="ts">
defineProps<{ text: string }>();
</script>
