<template>
  <div>
    {{ post }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useData, useRouter } from 'vitepress'
import posts from '../data/posts.json'

const { page } = useData();

const post = ref(posts.find((item) => item.path === page.value.filePath))

const router = useRouter();

router.onAfterRouteChanged = (to) => {
  post.value = posts.find((item) => item.path === page.value.filePath)
}
</script>
