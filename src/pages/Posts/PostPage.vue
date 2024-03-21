<template>
  <div class="q-pa-md">
    <div class="row justify-end q-pa-lg">
      <q-input
        rounded
        outlined
        v-model="searchPost"
        label="Input post title or body to search"
        @input="filteredPosts"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <q-infinite-scroll :offset="250">
      <q-list
        bordered
        separator
        v-for="(post, index) in filteredPosts"
        :key="index"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              {{ post.id }}
            </q-avatar>
          </q-item-section>
          <item-list :postTitle="post.title" :postBody="post.body"></item-list>
        </q-item>
      </q-list>
      <div class="row q-pa-lg justify-center">
        <q-btn
          label="Load more post"
          iconRight="autorenew"
          color="primary"
          @click="btnLoadMorePosts"
        ></q-btn>
      </div>
    </q-infinite-scroll>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import itemList from 'src/components/itemLists.vue';
import { usePostStore } from 'src/stores/posts';
import { computed, onMounted, ref } from 'vue';

const postStore = usePostStore();
const { loadPosts, initPost, loadMorePosts } = postStore;
const { posts } = storeToRefs(postStore);
const searchPost = ref('');

onMounted(async () => {
  await loadPosts(1);
  if (posts.value.length === 0) {
    console.log('Posts are 0');
    await initPost();
  }
});

const btnLoadMorePosts = async () => {
  await loadMorePosts();
};

const filteredPosts = computed(() => {
  if (!searchPost.value.trim()) {
    return posts.value;
  } else {
    return posts.value.filter(
      (post) =>
        post.title.toLowerCase().includes(searchPost.value.toLowerCase()) ||
        post.body.toLowerCase().includes(searchPost.value.toLowerCase())
    );
  }
});
</script>
