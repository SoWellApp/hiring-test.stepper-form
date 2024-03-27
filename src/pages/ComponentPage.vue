<template>
  <div class="q-pa-sm" style="background-color: #f3f4f5">
    <div class="container">
      <div class="row justify-center q-gutter-md">
        <sw-action-card
          v-for="(action, index) in actionsList"
          :key="index"
          :label="action.label"
          :icon="action.icon"
          :mode="action.mode"
          :class="`col-${action.col}`" />
      </div>
    </div>
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
import {
  ionCall,
  ionColorFill,
  ionDocument,
  ionLockClosed,
  ionPaperPlane,
  ionRefresh
} from "@quasar/extras/ionicons-v5"
import SwIssueHistoryCard from "src/components/sw-issue-history-card.vue"
import SwActionCard from "src/components/sw-action-card.vue"
import { ref } from "vue"

const actionsList = ref<
  {
    icon: string
    label: string
    mode: "xs" | "md" | "lg"
    col: number
  }[]
>([
  {
    icon: ionPaperPlane,
    label: "Signaler",
    mode: "md",
    col: 5
  },
  {
    icon: ionDocument,
    label: "Contrôler",
    mode: "md",
    col: 5
  },
  {
    icon: ionColorFill,
    label: "Plomberie",
    mode: "lg",
    col: 5
  },
  {
    icon: ionLockClosed,
    label: "Serrurerie",
    mode: "lg",
    col: 5
  },
  {
    icon: ionColorFill,
    label: "Fuite d'eau",
    mode: "xs",
    col: 11
  },
  {
    icon: ionColorFill,
    label: "Humidité",
    mode: "xs",
    col: 11
  }
])

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
