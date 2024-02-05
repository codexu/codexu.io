<script setup>
import DefaultTheme from 'vitepress/theme'
import PostInfo from './PostInfo.vue';

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <PostInfo />
    </template>
  </Layout>
</template>