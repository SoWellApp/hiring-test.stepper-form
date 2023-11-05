<template>
  <tr>
    <td class="text-left">{{ props.name }}</td>
    <td class="text-right">{{ props.value }}</td>
    <td class="text-right">
      <q-icon
        v-if="props.isValid === null"
        name="check"
        color="positive"
        size="2em"
      ></q-icon>
      <q-icon
        v-else
        :name="iconName(props.isValid(props.value))"
        :color="iconColor(props.isValid(props.value))"
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
    type: Function || null,
    default: null,
  },
});

const iconName = (valid: boolean) => {
  return valid ? 'check' : 'error';
};

const iconColor = (valid: boolean) => {
  return valid ? 'positive' : 'negative';
};
</script>
