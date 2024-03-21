import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Post } from 'src/types';
import { ref } from 'vue';
import { postCollection } from '../boot/pouchorm';

export const usePostStore = defineStore('posts', () => {
  const isLoading = ref(false);
  const posts = ref<Post[]>([]);
  const postsPerPage = 10;
  let currentPage = 1;

  const initPost = async () => {
    isLoading.value = true;
    posts.value = [];
    try {
      const getFromPouchOrm = await postCollection.find({});
      await postCollection.bulkRemove(getFromPouchOrm);

      const response = await api.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );
      if (response.status === 200) {
        const updatePostId = response.data.map((post) => ({
          _id: post.id.toString(),
          ...post,
        }));
        await postCollection.bulkUpsert(updatePostId);
        posts.value = updatePostId;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadPosts = async (page: number) => {
    console.log('loadPosts work');
    isLoading.value = true;
    try {
      const startIndex = (page - 1) * postsPerPage;

      const allPosts = await postCollection.find();
      const sortedPosts = allPosts.sort((a, b) => a.id - b.id);
      const pagePosts = sortedPosts.slice(
        startIndex,
        startIndex + postsPerPage
      );

      posts.value = [...posts.value, ...pagePosts];
    } catch (error) {
      console.log('🚀 ~ loadPosts ~ error:', error);
      posts.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  const loadMorePosts = async () => {
    currentPage++; // Incrémenter le numéro de page
    await loadPosts(currentPage);
  };

  return {
    isLoading,
    posts,
    initPost,
    loadPosts,
    loadMorePosts,
  };
});
