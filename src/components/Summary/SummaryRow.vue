<template>
  <tr>
    <td class="text-left">{{ row.label }}</td>
    <td class="text-right">{{ row.value }}</td>
    <td class="text-right">
      <q-icon
        :name="row.icon"
        :color="row.icon === 'check' ? 'positive' : 'negative'"
        size="2em"
      ></q-icon>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { Row } from '..';

defineProps<{
  row: Row;
}>();
</script>
