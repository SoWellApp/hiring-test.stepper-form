<template>
  <summary-row
    v-for="(row, i) in rows"
    :key="`${row.value}-${i}`"
    :row="row"
  ></summary-row>
</template>

<script setup lang="ts">
import { SummaryRow } from '..';
import { ref } from 'vue';
import { useFormStore } from 'src/stores/form-store';

const { form } = useFormStore();

const rows = ref<{ label: string; value: string; icon: 'check' | 'error' }[]>([
  {
    label: 'Firstname',
    value: form.firstname,
    icon: form.firstname.length > 0 ? 'check' : 'error',
  },
  { label: 'Lastname', value: form.lastname, icon: 'check' },
  {
    label: 'Birthdate',
    value: form.birthdate,
    icon: /^\d{4}\/\d{2}\/\d{2}/ ? 'check' : 'error',
  },
  { label: 'Bio', value: form.bio, icon: 'check' },
]);
</script>
