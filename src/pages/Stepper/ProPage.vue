<template>
  <q-form class="column q-gutter-y-md">
    <q-field outlined label="English proficiency" stack-label>
      <template v-slot:control>
        <q-rating
          v-model="form.professional.english"
          size="3.5em"
          color="primary"
          icon="star_border"
          icon-selected="star"
        />
      </template>
    </q-field>
    <q-field outlined label="French proficiency" stack-label>
      <template v-slot:control>
        <q-rating
          v-model="form.professional.french"
          size="3.5em"
          color="primary"
          icon="star_border"
          icon-selected="star"
        />
      </template>
    </q-field>
    <q-field outlined label="German proficiency" stack-label>
      <template v-slot:control>
        <q-rating
          v-model="form.professional.german"
          size="3.5em"
          color="primary"
          icon="star_border"
          icon-selected="star"
        />
      </template>
    </q-field>
    <q-field borderless label="Degrees" stack-label>
      <template v-slot:control>
        <div class="q-pt-sm full-width">
          <template
            v-for="degree in form.professional.degrees"
            :key="degree.id"
          >
            <div class="column q-gutter-y-sm">
              <div class="row q-gutter-x-sm">
                <q-input
                  class="col"
                  outlined
                  label="Title"
                  v-model="degree.title"
                ></q-input>
                <q-btn
                  rounded
                  flat
                  color="negative"
                  icon="delete"
                  @click="removeDegree(degree.id)"
                ></q-btn>
              </div>
              <q-input outlined label="Field" v-model="degree.field"></q-input>
              <q-input
                type="textarea"
                outlined
                label="Details"
                stack-label
                v-model="degree.details"
                placeholder="Write a description of your degree..."
              >
              </q-input>
              <q-input
                label="Year"
                v-model.number="degree.year"
                type="number"
                :rules="[
                  (val) =>
                    (val >= 1923 && val < 2023) || 'Please type a valid year',
                ]"
                outlined
              />
            </div>
            <q-separator class="q-mb-md"></q-separator>
          </template>
          <q-btn outline color="primary" icon="add" @click="addDegree"
            >Add a degree</q-btn
          >
        </div>
      </template>
    </q-field>
  </q-form>
</template>
<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';
import { useFormStore } from 'src/stores/form-store';
const { form } = useFormStore();

const addDegree = () => {
  form.professional.degrees.push({
    id: uuidv4(),
    title: '',
    field: '',
    details: '',
    year: 2022,
  });
};

const removeDegree = (id: string) => {
  form.professional.degrees = form.professional.degrees.filter(
    (d) => d.id !== id
  );
};
</script>
