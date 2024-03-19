<template>
  <div class="q-pa-md">
    <item-list :allPosts="posts"></item-list>
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
