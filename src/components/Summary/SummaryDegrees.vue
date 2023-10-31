<template>
  <template v-if="form.professional.degrees.length > 0">
    <great-header-row text="Degrees"></great-header-row>
    <template v-for="(degree, i) in form.professional.degrees" :key="degree.id">
      <summary-row
        :row="{ label: 'Title', value: degree.title, icon: 'check' }"
      ></summary-row>
      <summary-row
        :row="{ label: 'Field', value: degree.field, icon: 'check' }"
      ></summary-row>
      <summary-row
        :row="{ label: 'Year', value: degree.year + '', icon: 'check' }"
      ></summary-row>
      <summary-row
        :row="{ label: 'Details', value: degree.details, icon: 'check' }"
      ></summary-row>
      <tr v-if="i < form.professional.degrees.length">
        <td colspan="3"></td>
      </tr>
    </template>
  </template>
</template>

<script setup lang="ts">
import { GreatHeaderRow, SummaryRow } from '..';
import { useFormStore } from 'src/stores/form-store';

const { form } = useFormStore();
</script>
