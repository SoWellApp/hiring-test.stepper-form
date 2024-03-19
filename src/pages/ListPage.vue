<template>
  <div class="q-pa-md">
    <q-input
      v-model="search"
      filled
      type="search"
      hint="Search"
      @update:model-value="searchName()"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-list dense bordered padding class="rounded-borders">
      <q-item v-ripple v-for="d in dataList" :key="d.index">
        <q-item-section> {{ d.name }} </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import data from './data.json';

var dataList = data;

const search = ref('');

const searchName = () => {
  const val = search.value.toLowerCase();

  const temp = data.filter(function (d) {
    return d.name.toLowerCase().indexOf(val) !== -1 || !val;
  });

  dataList = temp;
};
</script>
