import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';

export interface Degree {
  id: string;
  title: string;
  field: string;
  year: number;
  details: string;
}

export interface Work {
  title: string;
  year: number;
  link: '';
}
export const useFormStore = defineStore('form', () => {
  const form = ref({
    firstname: '',
    lastname: '',
    birthdate: '',
    bio: '',
    published_works_count: 0,
    published_works: [] as Work[],
    professional: {
      english: 0,
      french: 0,
      german: 0,
      degrees: [] as Degree[],
    },
  });

  const resetForm = () => {
    form.value.firstname = '';
    form.value.lastname = '';
    form.value.birthdate = '';
    form.value.bio = '';
    form.value.published_works_count = 0;
    form.value.professional.english = 0;
    form.value.professional.french = 0;
    form.value.professional.german = 0;
    form.value.professional.degrees = [];
  };

  watch(
    () => form.value.published_works_count,
    (value) => {
      if (value === 0) {
        form.value.published_works = [];
      } else {
        form.value.published_works = Array(value)
          .fill(undefined)
          .map(() => {
            return {
              id: uuidv4(),
              title: '',
              year: 2022,
              link: '',
            } as Work;
          });
      }
    }
  );

  watch(
    () => form.value.published_works_count,
    (value) => {
      if (value > 3) {
        form.value.published_works_count = 3;
      }
    }
  );

  return { form, resetForm };
});
