<template>
  <q-card flat style="margin: 0.5em 0; border-radius: 0.5em">
    <q-card-section>
      <div class="row justify-between items-center">
        <div class="col-9 row items-center">
          <q-icon
            :name="icon"
            class="col-2 q-mr-sm"
            size="48px"
            color="primary" />
          <div class="col content-items">
            <div
              class="text-weight-bold"
              style="font-size: 14px; line-height: 26px">
              {{ truncatedLabel }}
            </div>
            <div
              class="sw-text-grey"
              style="font-size: 12px; line-height: 16px">
              {{ truncatedSublabel }}
            </div>
          </div>
        </div>
        <div class="col-3 content-items">
          <div class="size" style="line-height: 22px">{{ `${hour}  >` }}</div>
          <q-chip
            style="
              margin: 0 !important;
              padding: 0 0.5em !important;
              height: 1.125em;
            "
            :color="statusChip.color"
            :text-color="statusChip.textColor">
            <q-icon
              class="q-mr-xs"
              v-if="statusChip.icon"
              :name="statusChip.icon" />
            <div class="text-caption text-bold size">
              {{ statusChip.label }}
            </div>
          </q-chip>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const props = defineProps<{
  icon: string
  label: string
  sublabel: string
  hour: string
  status: string
}>()

const { t } = useI18n()

const truncatedLabel = computed(() => {
  if (props.label.length > 22) {
    return `${props.label.substring(0, 22)}...`
  } else {
    return props.label
  }
})

const truncatedSublabel = computed(() => {
  if (props.sublabel.length > 30) {
    return `${props.sublabel.substring(0, 30)}...`
  } else {
    return props.sublabel
  }
})

const statusChip = computed(() => {
  switch (props.status) {
    case "pending":
      return {
        icon: "done",
        color: "positive-outline",
        textColor: "positive",
        label: t("history.status.done"),
        style: "done"
      }
    case "ongoing":
      return {
        icon: "",
        color: "info-outline",
        textColor: "info",
        label: t("history.status.ongoing"),
        style: "ongoing"
      }

    default:
      return {
        icon: "",
        color: "warning-outline",
        textColor: "warning",
        label: t("history.status.pending"),
        style: "pending"
      }
  }
})
</script>
<style lang="scss" scoped>
.size {
  font-size: 12px;
}
.col.content-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.col-3.content-items {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.sw-text-grey {
  color: #849298;
}
</style>
