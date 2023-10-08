<template>
  <q-markup-table flat bordered separator="cell" class="q-mb-lg" v-if="show">
    <table-head :title="title"></table-head>
    <tbody>
      <template
        v-for="(contentArray, indexMatrix) in contentMatrix"
        :key="
          contentArray[indexMatrix].label == 'id'
            ? contentArray[indexMatrix].value
            : ''
        "
      >
        <template
          v-for="({ label, value, validity }, indexArray) in contentArray"
          :key="indexArray"
        >
          <table-row
            :label="label"
            :value="value"
            :validity="validity"
            v-if="label != 'id'"
          ></table-row>
        </template>

        <tr v-if="indexMatrix < superiorValue">
          <td colspan="3"></td>
        </tr>
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
  contentMatrix: Array<Row[]>;
  show: boolean;
  superiorValue: number;
}>();
</script>
