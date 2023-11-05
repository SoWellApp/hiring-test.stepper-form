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
      <ItemRow name="Firstname" :value="form.firstname" :isValid="true" />
      <ItemRow name="Lastname" :value="form.lastname" :isValid="false" />
      <ItemRow name="Birthdate" :value="form.birthdate" :isValid="true" />
      <ItemRow name="Bio" :value="form.bio" :isValid="true" />
      <TitleRow title="Professional info" />
      <ItemRow
        name="English proficiency"
        :value="form.professional.english.toString()"
        :isValid="true"
      />
      <ItemRow
        name="French proficiency"
        :value="form.professional.french.toString()"
        :isValid="false"
      />
      <ItemRow
        name="German proficiency"
        :value="form.professional.german.toString()"
        :isValid="true"
      />

      <template v-if="form.professional.degrees.length">
        <TitleRow title="Degrees" />
        <template
          v-for="(degree, i) in form.professional.degrees"
          :key="degree.id"
        >
          <ItemRow name="Title" :value="degree.title" :isValid="true" />
          <ItemRow name="Field" :value="degree.field" :isValid="true" />
          <ItemRow
            name="Year"
            :value="degree.year.toString()"
            :isValid="true"
          />
          <ItemRow name="Details" :value="degree.details" :isValid="true" />
          <tr v-if="i < form.professional.degrees.length - 1">
            <td colspan="3"></td>
          </tr>
        </template>
      </template>

      <template v-if="form.published_works_count > 0">
        <TitleRow title="Publications" />
        <template v-for="(work, i) in form.published_works" :key="work.id">
          <ItemRow name="Title" :value="work.title" :isValid="true" />
          <ItemRow name="Link" :value="work.link" :isValid="true" />
          <ItemRow name="Year" :value="work.year.toString()" :isValid="true" />
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

const form = useFormStore().form;
</script>

<style>
td {
  max-width: 400px;
  overflow: auto;
}
</style>
