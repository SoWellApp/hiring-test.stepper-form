<template>
  <div>
    <q-infinite-scroll :offset="250">
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="(post, index) in allPosts"
          :key="index"
        >
          <q-item-section>
            <q-item-label> {{ post.title }}</q-item-label>
            <q-item-label caption>{{ post.body }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-infinite-scroll>
  </div>
</template>
<script setup lang="ts">
import { Post } from 'src/types';

defineProps<{
  allPosts: Post[];
}>();
</script>
