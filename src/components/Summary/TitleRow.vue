<template>
  <tr>
    <td colspan="3">
      <div class="row no-wrap items-center">
        <div class="text-h6">{{ props.title }}</div>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
