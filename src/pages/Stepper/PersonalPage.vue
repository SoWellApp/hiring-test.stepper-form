<template>
  <q-form class="column q-gutter-y-md">
    <q-input outlined label="First name" v-model="form.firstname"></q-input>
    <q-input outlined label="Last name" v-model="form.lastname"></q-input>
    <q-input
      outlined
      label="Birthdate"
      v-model="form.birthdate"
      mask="date"
      :rules="['date']"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date
              navigation-min-year-month="1923/01"
              navigation-max-year-month="2013/12"
              default-year-month="2013/01"
              v-model="form.birthdate"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input
      label="How many books have you published ?"
      v-model.number="form.published_works_count"
      type="number"
      :rules="[
        (val) => val >= 0 || 'Please type a valid number',
        (val) => val < 4 || 'Please type a number less than 4',
      ]"
      outlined
    />
    <q-input
      type="textarea"
      outlined
      label="Bio"
      stack-label
      v-model="form.bio"
      placeholder="Write a short bio about you..."
    ></q-input>
  </q-form>
</template>
<script setup lang="ts">
import { useFormStore } from "src/stores/form-store";
const { form } = useFormStore();
</script>
