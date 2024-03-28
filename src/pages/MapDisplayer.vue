<template>
  <div class="pageMap">
    <sw-map-displayer :lat="marker.lat" :lng="marker.lng">
      <template #location>
        <q-list class="addressItem">
          <q-item v-for="(adresse, index) in addresses" :key="index">
            <q-item-section avatar>
              <q-icon color="primary" :name="adresse.icon" />
            </q-item-section>
            <q-item-section>{{ adresse.text }}</q-item-section>
          </q-item>
        </q-list>
      </template>
    </sw-map-displayer>
  </div>
</template>

<script setup lang="ts">
import swMapDisplayer from "src/components/swMapDisplayer.vue"
import { ref } from "vue"
import {
  ionLocationOutline,
  ionBusiness,
  ionHome,
  ionWater
} from "@quasar/extras/ionicons-v5"

const marker = ref({ lat: 51.5072, lng: 0.1276 })
const addresses = ref([
  {
    icon: ionBusiness,
    text: "Residence du parc"
  },
  {
    icon: ionLocationOutline,
    text: "12 Rue des Lilas, 75019 Paris"
  },
  {
    icon: ionHome,
    text: "Logement 1204"
  },
  {
    icon: ionWater,
    text: "Plombier (fuite d'eau)"
  }
])
</script>

<style>
.gm-control-active.gm-fullscreen-control {
  top: 100px !important;
}
</style>
