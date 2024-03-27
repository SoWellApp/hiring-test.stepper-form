<template>
  <div class="q-pa-md" style="background-color: #f3f4f5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <sw-issue-history-card
            v-for="(issue, index) in issuesList"
            :key="index"
            :icon="issue.icon"
            :label="issue.label"
            :sublabel="issue.sublabel"
            :hour="issue.hour"
            :status="issue.status" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ionCall, ionColorFill, ionRefresh } from "@quasar/extras/ionicons-v5"
import SwIssueHistoryCard from "src/components/sw-issue-history-card.vue"
import { ref } from "vue"

const issuesList = ref<
  {
    icon: string
    label: string
    sublabel: string
    hour: string
    status: string
  }[]
>([
  {
    icon: ionColorFill,
    label: "2 RUE HONORE DE BALZAC",
    sublabel: "Plomberie (Fuite d'eau)",
    hour: "19:41",
    status: "ongoing"
  },
  {
    icon: ionCall,
    label: "2 RUE HONORE DE BALZAC TEST TRONQUE",
    sublabel: "Plomberie (Fuite d'eau)",
    hour: "19:41",
    status: "pending"
  },
  {
    icon: ionRefresh,
    label: "2 RUE HONORE DE BALZAC TEST TRONQUE",
    sublabel: "Plomberie (Fuite d'eau)",
    hour: "19:41",
    status: "done"
  }
])
</script>
