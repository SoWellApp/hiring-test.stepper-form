<template>
  <q-card flat class="sw-card" v-if="mode == 'xs'">
    <q-card-section class="sw-xs-lg-padding">
      <div class="row items-center">
        <q-icon :name="icon" size="24px" class="q-mr-sm" color="primary" />
        <div class="sw-label">
          {{ label }}
        </div>
      </div>
    </q-card-section>
  </q-card>

  <q-card
    flat
    style="height: 100px"
    class="sw-card row items-end justify-start"
    v-else-if="mode == 'md'">
    <q-card-section class="sw-md-padding">
      <div class="column items-start">
        <q-icon :name="icon" size="24px" color="primary" />
        <div class="sw-label">
          {{ label }}
        </div>
      </div>
    </q-card-section>
  </q-card>

  <q-card
    flat
    style="height: 168px"
    class="sw-card row justify-center items-center"
    v-else-if="mode == 'lg'">
    <q-card-section class="sw-xs-lg-padding">
      <div class="column items-center">
        <q-icon :name="icon" size="64px" class="q-mb-sm" color="primary" />
        <div class="sw-label">
          {{ label }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  mode: "xs" | "md" | "lg"
}>()
</script>
<style lang="scss" scoped>
.sw-card {
  border-radius: 0.5em;
}
.sw-xs-lg-padding {
  padding: 1em;
}
.sw-md-padding {
  padding: 0.5em 1em;
}
.sw-label {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
</style>
