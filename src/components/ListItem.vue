<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="local_bar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Firstname</q-item-label>
            <q-item-label caption data-testid="user-firstname">{{ firstname }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>Lastname</q-item-label>
            <q-item-label caption data-testid="user-lastname">{{ lastname }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="local_gas_station" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Address</q-item-label>
            <q-item-label caption data-testid="user-city">{{ city }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="local_movies" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Email</q-item-label>
            <q-item-label caption data-testid="user-email">{{ email }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  firstname: string;
  lastname: string;
  city: string;
  email: string;
}>();
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
