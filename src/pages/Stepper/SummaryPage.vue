<template>
  <table-container-array
    title="Personal info"
    :contentArray="personalInfo"
  ></table-container-array>

  <table-container-array
    title="Professional info"
    :contentArray="professionalInfo"
  ></table-container-array>

  <table-container-matrix
    title="Degrees"
    :contentMatrix="degrees"
    :show="form.professional.degrees.length > 0"
    :superiorValue="form.professional.degrees.length - 1"
  ></table-container-matrix>

  <table-container-matrix
    title="Publications"
    :contentMatrix="publications"
    :show="form.published_works_count > 0"
    :superiorValue="form.published_works_count - 1"
  ></table-container-matrix>
</template>

<script setup lang="ts">
import TableContainerArray from 'src/components/TableContainerArray.vue';
import TableContainerMatrix from 'src/components/TableContainerMatrix.vue';
import { computed } from 'vue';
import { Row } from 'src/types/types';
import { useFormStore } from 'src/stores/form-store';
const { form } = useFormStore();
const personalInfo = computed<Row[]>(() => [
  { label: 'First name', value: form.firstname, validity: true },
  { label: 'Last name', value: form.lastname, validity: false },
  { label: 'Birthdate', value: form.birthdate, validity: true },
  { label: 'Bio', value: form.bio, validity: false },
]);
const professionalInfo = computed<Row[]>(() => [
  {
    label: 'English proficiency',
    value: form.professional.english,
    validity: true,
  },
  {
    label: 'French proficiency',
    value: form.professional.french,
    validity: true,
  },
  {
    label: 'German proficiency',
    value: form.professional.english,
    validity: true,
  },
]);
const degrees = computed<Array<Row[]>>(() =>
  form.professional.degrees.map((degree) => [
    {
      label: 'Title',
      value: degree.title,
      validity: true,
    },
    {
      label: 'Field',
      value: degree.field,
      validity: true,
    },
    {
      label: 'Year',
      value: degree.year,
      validity: true,
    },
    {
      label: 'Details',
      value: degree.details,
      validity: true,
    },
    {
      label: 'id',
      value: degree.id,
      validity: true,
    },
  ])
);
const publications = computed<Array<Row[]>>(() =>
  form.published_works.map((work) => [
    {
      label: 'link',
      value: work.link,
      validity: true,
    },
    {
      label: 'title',
      value: work.title,
      validity: true,
    },
    {
      label: 'year',
      value: work.year,
      validity: true,
    },
    {
      label: 'id',
      value: work.id,
      validity: true,
    },
  ])
);
</script>

<style>
td {
  max-width: 400px;
  overflow: scroll;
}
</style>
