<template>
  <q-markup-table flat bordered>
    <thead>
      <TitleRow title="Personal info" />
      <tr>
        <th class="text-left" width="15%">Label</th>
        <th class="text-right" width="80%">Value</th>
        <th class="text-right" width="5%">Validity</th>
      </tr>
    </thead>
    <tbody>
      <ItemRow name="Firstname" :value="form.firstname" :isValid="required" />
      <ItemRow name="Lastname" :value="form.lastname" />
      <ItemRow name="Birthdate" :value="form.birthdate" :isValid="date" />
      <ItemRow name="Bio" :value="form.bio" />
      <TitleRow title="Professional info" />
      <ItemRow
        name="English proficiency"
        :value="form.professional.english.toString()"
        :isValid="positiveNumber"
      />
      <ItemRow
        name="French proficiency"
        :value="form.professional.french.toString()"
        :isValid="positiveNumber"
      />
      <ItemRow
        name="German proficiency"
        :value="form.professional.german.toString()"
        :isValid="positiveNumber"
      />

      <template v-if="form.professional.degrees.length">
        <TitleRow title="Degrees" />
        <template
          v-for="(degree, i) in form.professional.degrees"
          :key="degree.id"
        >
          <ItemRow name="Title" :value="degree.title" :isValid="required" />
          <ItemRow name="Field" :value="degree.field" />
          <ItemRow
            name="Year"
            :value="degree.year.toString()"
            :isValid="year"
          />
          <ItemRow name="Details" :value="degree.details" />
          <tr v-if="i < form.professional.degrees.length - 1">
            <td colspan="3"></td>
          </tr>
        </template>
      </template>

      <template v-if="form.published_works_count > 0">
        <TitleRow title="Publications" />
        <template v-for="(work, i) in form.published_works" :key="work.id">
          <ItemRow name="Title" :value="work.title" :isValid="required" />
          <ItemRow name="Link" :value="work.link" :isValid="link" />
          <ItemRow name="Year" :value="work.year.toString()" :isValid="year" />
          <tr v-if="i < form.published_works_count - 1">
            <td colspan="3"></td>
          </tr>
        </template>
      </template>
    </tbody>
  </q-markup-table>
</template>
<script setup lang="ts">
import { useFormStore } from 'src/stores/form-store';
import { TitleRow, ItemRow } from 'src/components/Summary';
import { required } from 'src/utils/validationCheck';
import { date } from 'src/utils/validationCheck';
import { link } from 'src/utils/validationCheck';
import { positiveNumber } from 'src/utils/validationCheck';
import { year } from 'src/utils/validationCheck';

const form = useFormStore().form;
</script>

<style>
td {
  max-width: 400px;
  overflow: auto;
}
</style>
