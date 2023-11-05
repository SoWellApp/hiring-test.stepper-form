<template>
  <q-form>
    <template v-for="work in form.published_works" :key="work.id">
      <div class="column q-gutter-y-sm">
        <q-input outlined label="Title" v-model="work.title">
          <template v-slot:prepend>
            <q-icon name="book" />
          </template>
        </q-input>
        <q-input
          outlined
          label="Link"
          v-model="work.link"
          :rules="[
            (val) =>
              linkRegex.test(val) ||
              'Please enter a valid HTTP or HTTPS link. For example, https://www.example.com.',
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="link" />
          </template>
        </q-input>
        <q-input
          label="Year"
          v-model.number="work.year"
          type="number"
          :rules="[
            (val) => (val >= 1923 && val < 2023) || 'Please type a valid year',
          ]"
          outlined
        >
          <template v-slot:prepend>
            <q-icon name="calendar_month" />
          </template>
        </q-input>
      </div>
      <q-separator class="q-mb-md"></q-separator>
    </template>
  </q-form>
</template>
<script setup lang="ts">
import { useFormStore } from 'src/stores/form-store';
const { form } = useFormStore();
const linkRegex =
  /^(https?:\/\/)?([a-zA-Z0-9]+-?)*[a-zA-Z0-9]+\.[a-z]{2,}(\.[a-z]{2,})?(\/.*)?$/;
</script>
