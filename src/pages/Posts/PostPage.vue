<template>
  <div class="q-pa-md">
    <q-infinite-scroll :offset="250">
      <q-list bordered separator v-for="(post, index) in posts" :key="index">
        <item-list :postTitle="post.title" :postBody="post.body"></item-list>
      </q-list>
    </q-infinite-scroll>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import itemList from 'src/components/itemLists.vue';
import { usePostStore } from 'src/stores/posts';
import { onMounted } from 'vue';

const postStore = usePostStore();
const { loadPosts } = postStore;
const { posts } = storeToRefs(postStore);

onMounted(async () => {
  await loadPosts();
});
</script>
