<template>
  <tr>
    <td class="text-left">{{ props.name }}</td>
    <td class="text-right">{{ props.value }}</td>
    <td class="text-right">
      <q-icon
        :name="isValid ? 'check' : 'error'"
        :color="isValid ? 'positive' : 'negative'"
        size="2em"
      ></q-icon>
    </td>
  </tr>
</template>
<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  isValid: {
    type: Boolean,
    required: true,
  },
});
</script>
