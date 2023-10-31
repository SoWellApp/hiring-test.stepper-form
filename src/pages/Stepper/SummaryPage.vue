<template>
  <q-markup-table flat bordered>
    <thead>
      <great-header-row text="Personal info" />
      <tr>
        <th class="text-left" width="15%">Label</th>
        <th class="text-right" width="80%">Value</th>
        <th class="text-right" width="5%">Validity</th>
      </tr>
    </thead>
    <tbody>
      <summary-personal-info></summary-personal-info>
      <summary-professional-info></summary-professional-info>
      <summary-degrees></summary-degrees>
      <summary-publications></summary-publications>
    </tbody>
  </q-markup-table>
</template>
<script setup lang="ts">
import {
  GreatHeaderRow,
  SummaryPersonalInfo,
  SummaryProfessionalInfo,
  SummaryDegrees,
  SummaryPublications,
} from 'src/components';
</script>

<style>
td {
  max-width: 400px;
  overflow: scroll;
}
</style>
