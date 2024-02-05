<template>
  <div class="platform-detail">
    <a class="platform-icon" @click="to">
      <img :src="`/assets/platforms/${props.platform}.svg`" />
      <span>{{ props.platformName }}</span>
    </a>
    <a-space :size="16">
      <a-space class="platform-item">
        <ReadOutlined style="color: #999" />
        <span>{{ props.data?.read }}</span>
      </a-space>
      <a-space class="platform-item">
        <LikeOutlined style="color: #999" />
        <span>{{ props.data?.like }}</span>
      </a-space>
      <a-space class="platform-item">
        <StarOutlined style="color: #999" />
        <span>{{ props.data?.like }}</span>
      </a-space>
      <a-space class="platform-item">
        <CommentOutlined style="color: #999" />
        <span>{{ props.data?.comment }}</span>
      </a-space>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import { Space as ASpace } from 'ant-design-vue'
import { LikeOutlined, ReadOutlined, CommentOutlined, StarOutlined } from '@ant-design/icons-vue'

const props = defineProps<{
  platform: string
  platformName: string
  data?: {
    url: string
    like: number
    read: number
    comment: number
  }
}>()

function to() {
  window.open(props.data?.url)
}
</script>

<style scoped>
.platform-detail{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  img {
    width: 18px;
    height: 18px;
  }
  a {
    font-size: 12px;
  }
}
.platform-icon{
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 8px;
    font-size: 14px;
  }
}
.platform-item{
  display: flex;
  align-items: center;
  width: 80px;
  span {
    margin-left: 4px;
  }
}
</style>
