<template>
  <q-card class="my-card">
    <q-card-section>
      <GMapMap
        :center="{ lat: lat, lng: lng }"
        :zoom="10"
        :options="options"
        map-type-id="terrain"
        style="width: 90vw; height: 10rem">
        <GMapMarker
          key="marker"
          :position="{ lat: lat, lng: lng }"
          clickable="true"
          draggable="true" />
      </GMapMap>
    </q-card-section>
    <slot name="location"></slot>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from "vue"

defineProps({
  lat: {
    type: Number
  },
  lng: {
    type: Number
  }
})
const options = ref({
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: true,
  disableDefaultUi: false
})
</script>

<style scoped></style>
