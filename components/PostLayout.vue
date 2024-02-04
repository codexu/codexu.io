<script setup>
import DefaultTheme from 'vitepress/theme'
import PostInfo from './PostInfo.vue';

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-top>
      <PostInfo />
    </template>
  </Layout>
</template>