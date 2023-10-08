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
import {
  isNotEmpty,
  isValidDate,
  isPositiveNumber,
  isValidYear,
  isValidLink,
} from 'src/utils/check';

const { form } = useFormStore();

const personalInfo = computed<Row[]>(() => [
  {
    label: 'First name',
    value: form.firstname,
    validity: isNotEmpty(form.firstname),
  },
  { label: 'Last name', value: form.lastname, validity: true },
  {
    label: 'Birthdate',
    value: form.birthdate,
    validity: isNotEmpty(form.birthdate) && isValidDate(form.birthdate),
  },
  { label: 'Bio', value: form.bio, validity: true },
]);

const professionalInfo = computed<Row[]>(() => [
  {
    label: 'English proficiency',
    value: form.professional.english,
    validity:
      isNotEmpty(form.professional.english) &&
      isPositiveNumber(form.professional.english),
  },
  {
    label: 'French proficiency',
    value: form.professional.french,
    validity:
      isNotEmpty(form.professional.french) &&
      isPositiveNumber(form.professional.french),
  },
  {
    label: 'German proficiency',
    value: form.professional.german,
    validity:
      isNotEmpty(form.professional.german) &&
      isPositiveNumber(form.professional.german),
  },
]);

const degrees = computed<Array<Row[]>>(() =>
  form.professional.degrees.map((degree) => [
    {
      label: 'Title',
      value: degree.title,
      validity: isNotEmpty(degree.title),
    },
    {
      label: 'Field',
      value: degree.field,
      validity: true,
    },
    {
      label: 'Year',
      value: degree.year,
      validity: isNotEmpty(degree.year) && isValidYear(degree.year),
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
      label: 'title',
      value: work.title,
      validity: isNotEmpty(work.title),
    },
    {
      label: 'link',
      value: work.link,
      validity: isNotEmpty(work.link) && isValidLink(work.link),
    },
    {
      label: 'year',
      value: work.year,
      validity: isNotEmpty(work.year) && isValidYear(work.year),
    },
    {
      label: 'id',
      value: work.id,
      validity: true,
    },
  ])
);
</script>
