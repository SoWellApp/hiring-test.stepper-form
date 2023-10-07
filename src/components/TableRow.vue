<template>
  <tr>
    <td class="text-left">{{ label }}</td>
    <td class="text-right">{{ value }}</td>
    <td class="text-right">
      <q-icon
        :name="validity ? 'check' : 'error'"
        :color="validity ? 'positive' : 'negative'"
        size="2em"
      ></q-icon>
    </td>
  </tr>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number;
  validity: boolean;
}>();
</script>
