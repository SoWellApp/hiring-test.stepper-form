<template>
  <q-markup-table flat bordered>
    <thead>
      <tr>
        <th colspan="3">
          <div class="row no-wrap items-center">
            <div class="text-h6 q-ml-md">Personal info</div>
          </div>
        </th>
      </tr>
      <tr>
        <th class="text-left" width="15%">Label</th>
        <th class="text-right" width="80%">Value</th>
        <th class="text-right" width="5%">Validity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-left">Firstname</td>
        <td class="text-right">{{ form.firstname }}</td>
        <td class="text-right">
          <q-icon name="check" color="positive" size="2em"></q-icon>
        </td>
      </tr>
      <tr>
        <td class="text-left">Lastname</td>
        <td class="text-right">{{ form.lastname }}</td>
        <td class="text-right">
          <q-icon name="error" color="negative" size="2em"></q-icon>
        </td>
      </tr>
      <tr>
        <td class="text-left">Birthdate</td>
        <td class="text-right">{{ form.birthdate }}</td>
        <td class="text-right">
          <q-icon name="check" color="positive" size="2em"></q-icon>
        </td>
      </tr>
      <tr>
        <td class="text-left">Bio</td>
        <td class="text-right">{{ form.bio }}</td>
        <td class="text-right">
          <q-icon name="check" color="positive" size="2em"></q-icon>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="row no-wrap items-center">
            <div class="text-h6 q-ml-md">Professional info</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">English proficiency</td>
        <td class="text-right">{{ form.professional.english }}</td>
        <td class="text-right">
          <q-icon name="check" color="positive" size="2em"></q-icon>
        </td>
      </tr>
      <tr>
        <td class="text-left">French proficiency</td>
        <td class="text-right">{{ form.professional.french }}</td>
        <td class="text-right">
          <q-icon name="error" color="negative" size="2em"></q-icon>
        </td>
      </tr>
      <tr>
        <td class="text-left">German proficiency</td>
        <td class="text-right">{{ form.professional.german }}</td>
        <td class="text-right">
          <q-icon name="check" color="positive" size="2em"></q-icon>
        </td>
      </tr>
      <template v-if="form.professional.degrees.length">
        <tr>
          <td colspan="3">
            <div class="row no-wrap items-center">
              <div class="text-h6 q-ml-md">Degrees</div>
            </div>
          </td>
        </tr>
        <template
          v-for="(degree, i) in form.professional.degrees"
          :key="degree.id"
        >
          <tr>
            <td class="text-left">Title</td>
            <td class="text-right">{{ degree.title }}</td>
            <td class="text-right">
              <q-icon name="check" color="positive" size="2em"></q-icon>
            </td>
          </tr>
          <tr>
            <td class="text-left">Field</td>
            <td class="text-right">{{ degree.field }}</td>
            <td class="text-right">
              <q-icon name="check" color="positive" size="2em"></q-icon>
            </td>
          </tr>
          <tr>
            <td class="text-left">Year</td>
            <td class="text-right">{{ degree.year }}</td>
            <td class="text-right">
              <q-icon name="check" color="positive" size="2em"></q-icon>
            </td>
          </tr>
          <tr>
            <td class="text-left">Details</td>
            <td class="text-right">{{ degree.details }}</td>
            <td class="text-right">
              <q-icon name="check" color="positive" size="2em"></q-icon>
            </td>
          </tr>
          <tr v-if="i < form.professional.degrees.length">
            <td colspan="3"></td>
          </tr>
        </template>
      </template>
      <template v-if="form.published_works_count > 0">
        <tr>
          <td colspan="3">
            <div class="row no-wrap items-center">
              <div class="text-h6 q-ml-md">Publications</div>
            </div>
          </td>
        </tr>
        <template v-for="(work, i) in form.published_works" :key="work.id">
          <tr>
            <td class="text-left">Title</td>
            <td class="text-right">{{ work.title }}</td>
            <td class="text-right">
              <q-icon name="check" color="positive" size="2em"></q-icon>
            </td>
          </tr>
          <tr>
            <td class="text-left">Link</td>
            <td class="text-right">{{ work.link }}</td>
            <td class="text-right">
              <q-icon name="check" color="positive" size="2em"></q-icon>
            </td>
          </tr>
          <tr>
            <td class="text-left">Year</td>
            <td class="text-right">{{ work.year }}</td>
            <td class="text-right">
              <q-icon name="check" color="positive" size="2em"></q-icon>
            </td>
          </tr>
          <tr v-if="i < form.published_works_count - 1">
            <td colspan="3"></td>
          </tr>
        </template>
      </template>
    </tbody>
  </q-markup-table>
</template>
<script setup lang="ts">
import { useFormStore } from "src/stores/form-store";
const { form } = useFormStore();
</script>

<style>
td {
  max-width: 400px;
  overflow: scroll;
}
</style>
