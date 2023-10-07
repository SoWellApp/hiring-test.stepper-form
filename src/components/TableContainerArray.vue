<template>
  <q-markup-table flat bordered class="q-mb-lg">
    <table-head :title="title"></table-head>

    <tbody>
      <template
        v-for="({ label, value, validity }, index) in contentArray"
        :key="index"
      >
        <table-row
          :label="label"
          :value="value"
          :validity="validity"
        ></table-row>
      </template>
    </tbody>
  </q-markup-table>
</template>

<script setup lang="ts">
import TableHead from './TableHead.vue';
import TableRow from './TableRow.vue';
import { Row } from 'src/types/types';
defineProps<{
  title: string;
  contentArray: Row[];
}>();
</script>
