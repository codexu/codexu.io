<template>
  <div class="post-info">
    <PlatformDetail platform="juejin" platformName="稀土掘金" :data="post?.juejin" />
    <PlatformDetail platform="csdn" platformName="CSDN" :data="post?.csdn" />
    <PlatformDetail platform="zhihu" platformName="知乎" :data="post?.csdn" />
    <PlatformDetail platform="SegmentFault" platformName="SegmentFault" :data="post?.csdn" />
    <PlatformDetail platform="jianshu" platformName="简书" :data="post?.csdn" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useData, useRouter } from 'vitepress'
import posts from '../data/posts.json'
import PlatformDetail from './PlatformDetail.vue';

const { page } = useData();

const post = ref(posts.find((item) => item.path === page.value.filePath))

const router = useRouter();

router.onAfterRouteChanged = (to) => {
  post.value = posts.find((item) => item.path === page.value.filePath)
}
</script>

<style scoped>
.post-info {
  margin-bottom: 24px;
}
</style>