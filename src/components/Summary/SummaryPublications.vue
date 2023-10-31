<template>
  <template v-if="form.published_works_count > 0">
    <great-header-row text="Publications"></great-header-row>
    <template v-for="(work, i) in form.published_works" :key="work.id">
      <summary-row
        :row="{ label: 'Title', value: work.title, icon: 'check' }"
      ></summary-row>
      <summary-row
        :row="{ label: 'Link', value: work.link, icon: 'check' }"
      ></summary-row>
      <summary-row
        :row="{ label: 'Year', value: work.year + '', icon: 'check' }"
      ></summary-row>
      <tr v-if="i < form.published_works_count - 1">
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
