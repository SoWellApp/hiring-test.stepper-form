<template>
  <thead>
    <tr>
      <th colspan="3">
        <div class="row no-wrap items-center">
          <div class="text-h6 q-ml-md">{{ title }}</div>
        </div>
      </th>
    </tr>
    <tr>
      <th class="text-left" width="15%">Label</th>
      <th class="text-right" width="80%">Value</th>
      <th class="text-right" width="5%">Validity</th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
