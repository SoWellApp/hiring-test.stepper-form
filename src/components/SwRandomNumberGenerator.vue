<template>
  <q-btn color="primary" :label="label" :icon="icon" @click="generate" />
</template>
<script setup lang="ts">
import _lodash from "lodash"
import seedrandom from "seedrandom"

import { onBeforeMount } from "vue"

const emit = defineEmits<{
  updateRandomNumber: [value: number]
}>()

const props = withDefaults(
  defineProps<{
    seed: string
    label: string
    icon: string
    min: number
    max: number
    float: boolean
  }>(),
  {
    min: 90,
    max: 100
  }
)

onBeforeMount(() => {
  if (props.min > props.max) {
    ;[props.min, props.max] = [props.max, props.min]
  }
})

seedrandom(props.seed, { global: true })
const _ = _lodash.runInContext()

const generate = () => {
  emit("updateRandomNumber", _.random(props.min, props.max, props.float))
}
</script>
