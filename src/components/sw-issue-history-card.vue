<template>
  <q-card flat class="mb-2 rounded">
    <q-card-section>
      <div class="row justify-between items-center">
        <div class="col-9 row items-center">
          <q-icon
            name="today"
            class="col-2 q-mr-sm"
            size="48px"
            color="primary" />
          <div class="col content-items">
            <div
              v-if="label.length > 25"
              class="text-weight-bold"
              style="font-size: 14px; line-height: 26px">
              {{ label.substring(0, 25) + "..." }}
            </div>
            <div
              v-else
              class="text-weight-bold"
              style="font-size: 14px; line-height: 26px">
              {{ label }}
            </div>
            <div
              v-if="sublabel.length > 25"
              class="text-grey-9"
              style="font-size: 12px; line-height: 16px">
              {{ sublabel.substring(0, 25) + "..." }}
            </div>
            <div
              v-else
              class="text-grey text-capitalize"
              style="font-size: 12px; line-height: 16px">
              {{ sublabel }}
            </div>
          </div>
        </div>
        <div class="col-3 text-right">
          <div class="size" style="line-height: 22px">{{ `${hour} >` }}</div>
          <q-chip
            style="margin: 0 !important; padding: 0 0.5em !important"
            :color="info.color"
            :text-color="info.textColor">
            <q-icon class="q-mr-xs" v-if="info.icon" :name="info.icon" />
            <div class="text-caption text-bold size">
              {{ info.label }}
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

const info = computed(() => {
  switch (props.status) {
    case "pending":
      return {
        icon: "",
        color: "warning-outline",
        textColor: "warning",
        label: t("history.status.pending"),
        style: "pending"
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
        icon: "done",
        color: "positive-outline",
        textColor: "positive",
        label: t("history.status.done"),
        style: "done"
      }
  }
})
</script>
<style lang="scss" scoped>
.size {
  font-size: 12px;
}
.content-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
