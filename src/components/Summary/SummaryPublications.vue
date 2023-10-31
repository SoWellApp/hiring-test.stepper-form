<template>
  <template v-if="form.published_works_count > 0">
    <great-header-row text="Publications"></great-header-row>
    <template v-for="(work, i) in form.published_works" :key="work.id">
      <summary-row
        :row="{
          label: 'Title',
          value: work.title,
          icon: work.title.length > 0 ? 'check' : 'error',
        }"
      ></summary-row>
      <summary-row
        :row="{
          label: 'Link',
          value: work.link,
          icon: /^(https|http):\/\/[^\s/$?#]+\.[a-zA-Z]+$/.test(work.link)
            ? 'check'
            : 'error',
        }"
      ></summary-row>
      <summary-row
        :row="{
          label: 'Year',
          value: work.year + '',
          icon: work.year >= 1923 && work.year < 2023 ? 'check' : 'error',
        }"
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
