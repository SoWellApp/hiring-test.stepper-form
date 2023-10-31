<template>
  <great-header-row text="Professional info"></great-header-row>
  <summary-row
    v-for="(row, i) in rows"
    :key="`${row.value}-${i}`"
    :row="row"
  ></summary-row>
</template>

<script setup lang="ts">
import { GreatHeaderRow, SummaryRow, Row } from '..';
import { ref } from 'vue';
import { useFormStore } from 'src/stores/form-store';

const { form } = useFormStore();

const rows = ref<Row[]>([
  {
    label: 'English proficiency',
    value: form.professional.english + '',
    icon: 'check',
  },
  {
    label: 'French proficiency',
    value: form.professional.french + '',
    icon: 'error',
  },
  {
    label: 'German proficiency',
    value: form.professional.german + '',
    icon: 'check',
  },
]);
</script>
