<template>
  <q-btn
    @click="generateNumber"
    color="primary"
    :label="label"
    size="lg"
    :icon-right="icon" />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import _lodash from "lodash"
import seedrandom from "seedrandom"

const emit = defineEmits<{(e: "sendNumber", value: number): void}>()

const props = withDefaults(
  defineProps<{
    label: string
    seed:  string
    min: number
    max: number
    icon: string
    float: boolean
  }>(),
  { min: 50, max: 150, float: false }
)

const lodash = _lodash.runInContext();

onMounted(() => {
  seedrandom(props.seed, { global: true });

  if (props.min > props.max) {
    ;[props.min, props.max] = [props.max, props.min]
  }
})

const generateNumber = () => {
  emit(
    "sendNumber",
    lodash.random(props.min, props.max, props.float)
  )
}
</script>
