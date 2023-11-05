<template>
  <q-page padding>
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step
        :name="1"
        title="Your info"
        :icon="ionPersonOutline"
        :done="step > 1"
      >
        <personal-page></personal-page>
      </q-step>

      <q-step
        :name="2"
        title="Professional info"
        :icon="ionDocumentAttachOutline"
        :done="step > 2"
      >
        <pro-page></pro-page>
      </q-step>

      <q-step
        :name="3"
        title="Publications"
        :icon="ionBookOutline"
        :disable="form.published_works_count === 0"
      >
        <publication-page></publication-page>
      </q-step>

      <q-step :name="4" title="Users" :icon="ionPerson" :done="step > 4">
        <user-page></user-page>
      </q-step>
      <q-step :name="5" title="Summary" :icon="ionSaveOutline">
        <summary-page></summary-page>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="stepper.next()"
            color="primary"
            :label="step === 5 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </q-page>
</template>

<script setup lang="ts">
import {
  PersonalPage,
  ProPage,
  PublicationPage,
  SummaryPage,
  UserPage,
} from 'src/pages/Stepper';
import {
  ionPersonOutline,
  ionDocumentAttachOutline,
  ionBookOutline,
  ionSaveOutline,
  ionPerson,
} from '@quasar/extras/ionicons-v5';
import { ref } from 'vue';

const stepper = ref();
const step = ref(1);

import { useFormStore } from 'src/stores/form-store';
const { form } = useFormStore();
</script>
