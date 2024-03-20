import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Post } from 'src/types';
import { ref } from 'vue';
import { postCollection } from '../boot/pouchorm';

export const usePostStore = defineStore('posts', () => {
  const isLoading = ref(false);
  const posts = ref<Post[]>([]);

  const loadPosts = async () => {
    isLoading.value = true;
    posts.value = [];

    try {
      const response = await api.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );
      if (response.status === 200) {
        await postCollection.bulkUpsert(response.data);
        const getFromPouchOrm = await postCollection.find({}, { limit: 10 });
        posts.value = getFromPouchOrm;
      }
    } catch (error) {
      console.log('🚀 ~ loadPosts ~ error:', error);
      posts.value = [];
    }
  };

  return {
    isLoading,
    posts,
    loadPosts,
  };
});
