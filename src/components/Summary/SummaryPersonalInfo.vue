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
  { label: 'Firstname', value: form.firstname, icon: 'check' },
  { label: 'Lastname', value: form.lastname, icon: 'error' },
  { label: 'Birthdate', value: form.birthdate, icon: 'check' },
  { label: 'Bio', value: form.bio, icon: 'check' },
]);
</script>
