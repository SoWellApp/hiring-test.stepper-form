<template>
  <div class="q-pa-md">
    <div class="component">
      <div class="row">
        <div class="col-12">
          <sw-issue-history-card
            :icon="icon"
            :label="label"
            :sublabel="sublabel"
            :hour="hour"
            :status="status"></sw-issue-history-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SwIssueHistoryCard from "src/components/sw-issue-history-card.vue"
import { ref } from "vue"

const icon = ref("ion-refresh")
const label = ref("2 RUE HONORE DE BALZAC")
const sublabel = ref("Plomberie (fuite d'eau)")
const hour = ref("19:41")
const status = ref("done")
</script>
